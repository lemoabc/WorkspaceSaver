"use client"

import { Button } from "@/components/ui/button"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Download } from "lucide-react"
import { PreviewDialog } from "./preview-dialog"

// 使用本地下载链接
const DOWNLOAD_URL = "/downloads/WorkspaceSaver1.0.0.rar"

export default async function Hero({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const handleDownload = () => {
    // 触发下载
    const link = document.createElement('a')
    link.href = DOWNLOAD_URL
    link.download = 'WorkspaceSaver1.0.0.rar'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
            <Button size="lg" className="gap-2" onClick={handleDownload}>
              <Download className="h-5 w-5" />
              {dict.home.hero.download}
            </Button>
            <PreviewDialog lang={lang} dict={dict} />
          </div>
        </div>
      </div>
    </section>
  )
}
