"use client"

import { Button } from "@/components/ui/button"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Download } from "lucide-react"
import { PreviewDialog } from "@/components/preview-dialog"

// 使用本地下载链接
const DOWNLOAD_URL = "/downloads/WorkspaceSaver1.0.0.rar"

interface HeroProps {
  lang: Locale
  dict: any
  previewLabels: {
    viewDemo: string
    previous: string
    next: string
    steps: {
      autoSave: {
        title: string
        description: string
        selectWindows: string
        settings: string
        autoSaveInterval: string
        autoStartBoot: string
        hotkeySettings: string
      }
    }
  }
}

export default function Hero({ lang, dict, previewLabels }: HeroProps) {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {dict.home.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {dict.home.hero.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="gap-2" onClick={handleDownload}>
              <Download className="h-5 w-5" />
              {dict.home.hero.download}
            </Button>
            <PreviewDialog lang={lang} labels={previewLabels} />
          </div>
        </div>
      </div>
    </section>
  )
}
