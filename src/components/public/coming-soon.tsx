import Link from "next/link"
import { Calendar, Globe, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ComingSoonProps {
  title: string
  message: string
  description?: string
  backLink?: string
  backText?: string
  expectedDate?: string
  language?: string
}

export function ComingSoon({
  title,
  message,
  description,
  backLink = "/fifa-world-cup-2026-tickets",
  backText = "Back to FIFA World Cup 2026",
  expectedDate,
  language = "en"
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-blue-500/10 p-6">
            <Globe className="h-24 w-24 text-blue-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>

        {/* Message */}
        <p className="mb-6 text-2xl text-blue-200 md:text-3xl font-semibold">
          {message}
        </p>

        {/* Description */}
        {description && (
          <p className="mb-8 text-lg text-slate-300 max-w-xl mx-auto">
            {description}
          </p>
        )}

        {/* Expected Date */}
        {expectedDate && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-6 py-3 text-blue-200">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">{expectedDate}</span>
          </div>
        )}

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-700"></div>
          <div className="text-slate-500">•</div>
          <div className="h-px flex-1 bg-slate-700"></div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={backLink}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {backText}
            </Button>
          </Link>

          <Link href="/">
            <Button size="lg" variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-slate-800">
              Go to Homepage
            </Button>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-slate-500">
          {language === "en"
            ? "We're working hard to bring you the best ticket comparison experience. Check back soon!"
            : ""}
        </p>
      </div>
    </div>
  )
}
