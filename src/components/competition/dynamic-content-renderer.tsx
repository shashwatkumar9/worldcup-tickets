import { CompetitionContent } from "@/lib/db/competition-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DynamicContentRendererProps {
  content: CompetitionContent[]
}

export function DynamicContentRenderer({ content }: DynamicContentRendererProps) {
  if (!content || content.length === 0) {
    return null
  }

  return (
    <>
      {content.map((section) => {
        // Parse JSON content if available
        let jsonContent = null
        if (section.content_json) {
          try {
            jsonContent = JSON.parse(section.content_json)
          } catch (e) {
            console.error("Failed to parse JSON content:", e)
          }
        }

        // Render based on section type
        switch (section.section_type) {
          case "hero":
            return (
              <div key={section.id} className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
                {section.section_title && (
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{section.section_title}</h2>
                )}
                {section.content_text && (
                  <div
                    className="prose prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.content_text }}
                  />
                )}
              </div>
            )

          case "stats":
            return (
              <Card key={section.id} className="mb-8">
                <CardHeader>
                  {section.section_title && <CardTitle>{section.section_title}</CardTitle>}
                </CardHeader>
                <CardContent>
                  {jsonContent && jsonContent.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {jsonContent.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center">
                          <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                          <p className="text-sm text-slate-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.content_text && !jsonContent && (
                    <div
                      className="prose prose-slate max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content_text }}
                    />
                  )}
                </CardContent>
              </Card>
            )

          case "text":
          case "introduction":
          default:
            return (
              <Card key={section.id} className="mb-8">
                <CardHeader>
                  {section.section_title && <CardTitle>{section.section_title}</CardTitle>}
                </CardHeader>
                <CardContent>
                  {section.content_text && (
                    <div
                      className="prose prose-slate max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content_text }}
                    />
                  )}
                  {jsonContent && jsonContent.items && (
                    <ul className="space-y-2">
                      {jsonContent.items.map((item: string, idx: number) => (
                        <li key={idx} className="text-slate-700">{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            )
        }
      })}
    </>
  )
}
