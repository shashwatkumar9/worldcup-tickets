import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      affiliate_link_id,
      entity_type,
      entity_id,
      partner,
    } = body

    // Validate required fields
    if (!affiliate_link_id || !entity_type || !entity_id || !partner) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Get user info from request headers
    const userAgent = request.headers.get("user-agent") || ""
    const referrer = request.headers.get("referer") || ""
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown"

    // Hash IP for privacy
    const ipHash = crypto
      .createHash("sha256")
      .update(ip + process.env.SUPABASE_SERVICE_ROLE_KEY)
      .digest("hex")

    // Generate session ID from user agent and IP hash
    const sessionId = crypto
      .createHash("md5")
      .update(ipHash + userAgent)
      .digest("hex")

    // Insert click record
    const { error: clickError } = await supabase
      .from("affiliate_clicks")
      .insert({
        affiliate_link_id,
        entity_type,
        entity_id,
        partner,
        user_agent: userAgent,
        referrer,
        ip_hash: ipHash,
        session_id: sessionId,
        clicked_at: new Date().toISOString(),
      })

    if (clickError) {
      console.error("Error inserting click:", clickError)
      // Don't fail the request if click tracking fails
    }

    // Update click count on affiliate link
    const { error: updateError } = await supabase.rpc("increment_click_count", {
      link_id: affiliate_link_id,
    })

    if (updateError) {
      console.error("Error updating click count:", updateError)
    }

    // Get the affiliate link URL
    const { data: link, error: linkError } = await supabase
      .from("affiliate_links")
      .select("url")
      .eq("id", affiliate_link_id)
      .single()

    if (linkError || !link) {
      return NextResponse.json(
        { error: "Affiliate link not found" },
        { status: 404 }
      )
    }

    // Return redirect URL
    return NextResponse.json({
      success: true,
      redirect: link.url,
    })
  } catch (error) {
    console.error("Track click error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Also support GET for direct redirects
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const linkId = searchParams.get("id")

    if (!linkId) {
      return NextResponse.json(
        { error: "Missing link ID" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Get the affiliate link
    const { data: link, error } = await supabase
      .from("affiliate_links")
      .select("url, entity_type, entity_id, partner")
      .eq("id", linkId)
      .eq("is_active", true)
      .single()

    if (error || !link) {
      return NextResponse.redirect(new URL("/", request.url))
    }

    // Track the click asynchronously (don't wait for it)
    const userAgent = request.headers.get("user-agent") || ""
    const referrer = request.headers.get("referer") || ""
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown"
    const ipHash = crypto
      .createHash("sha256")
      .update(ip + (process.env.SUPABASE_SERVICE_ROLE_KEY || ""))
      .digest("hex")
    const sessionId = crypto
      .createHash("md5")
      .update(ipHash + userAgent)
      .digest("hex")

    // Insert click (fire and forget)
    ;(async () => {
      try {
        await supabase.from("affiliate_clicks").insert({
          affiliate_link_id: linkId,
          entity_type: link.entity_type,
          entity_id: link.entity_id,
          partner: link.partner,
          user_agent: userAgent,
          referrer,
          ip_hash: ipHash,
          session_id: sessionId,
        })
        await supabase.rpc("increment_click_count", { link_id: linkId })
      } catch (err) {
        console.error("Click tracking error:", err)
      }
    })()

    // Redirect to affiliate URL
    return NextResponse.redirect(link.url)
  } catch (error) {
    console.error("Track click error:", error)
    return NextResponse.redirect(new URL("/", request.url))
  }
}
