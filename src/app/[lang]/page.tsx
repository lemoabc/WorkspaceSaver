import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Features from "@/components/features"
import Hero from "@/components/hero"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import Link from "next/link"

// 这里替换为您的实际下载链接
const DOWNLOAD_URL = "https://github.com/lemoabc/WorkspaceSaver/releases/latest/download/WorkspaceSaver-Setup.exe"

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col items-center w-full">
      <Hero lang={lang} />
      <Features lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {dict.home.cta.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.home.cta.description}
            </p>
            <Link href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="mt-4">
                <Download className="mr-2 h-5 w-5" />
                {dict.home.cta.button}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
