import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function HelpPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">{dict.footer.links.help}</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{dict.faq.tabs.general}</h2>
          {dict.faq.questions.general.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-medium mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{dict.faq.tabs.features}</h2>
          {dict.faq.questions.features.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-medium mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{dict.faq.tabs.technical}</h2>
          {dict.faq.questions.technical.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-medium mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
} 