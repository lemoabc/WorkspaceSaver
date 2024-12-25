import { Button } from "@/components/ui/button"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Download, PlayCircle } from "lucide-react"
import Link from "next/link"

// 这里替换为您的实际下载链接
const DOWNLOAD_URL = "https://github.com/lemoabc/WorkspaceSaver/releases/latest/download/WorkspaceSaver-Setup.exe"

export default async function Hero({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {dict.home.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.home.hero.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                {dict.home.hero.download}
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <PlayCircle className="h-5 w-5" />
              {dict.home.hero.viewDemo}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
