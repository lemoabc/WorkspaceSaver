import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import { getDictionary } from "@/i18n/get-dictionary"
import { Locale } from "@/i18n/config"

// 使用本地下载链接
const DOWNLOAD_URL = "/downloads/WorkspaceSaver1.0.0.rar"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const previewLabels = {
    viewDemo: dict.home.hero.viewDemo,
    previous: lang === 'zh-CN' ? "上一步" : "Previous",
    next: lang === 'zh-CN' ? "下一步" : "Next",
    steps: {
      autoSave: {
        title: dict.features.autoSave.title,
        description: dict.features.autoSave.description,
        selectWindows: lang === 'zh-CN' ? "选择要恢复的窗口" : "Select windows to restore",
        settings: lang === 'zh-CN' ? "设置" : "Settings",
        autoSaveInterval: lang === 'zh-CN' ? "自动保存间隔" : "Auto Save Interval",
        autoStartBoot: lang === 'zh-CN' ? "开机自启动" : "Auto Start on Boot",
        hotkeySettings: lang === 'zh-CN' ? "快捷键设置" : "Hotkey Settings"
      }
    }
  }

  return (
    <main className="flex-1">
      <Hero lang={lang} dict={dict} previewLabels={previewLabels} />
      <Features lang={lang} dict={dict} />
      <Testimonials lang={lang} dict={dict} />
      <FAQ lang={lang} dict={dict} />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {dict.home.cta.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.home.cta.description}
            </p>
            <Button size="lg" className="mt-4" asChild>
              <a href={DOWNLOAD_URL} download="WorkspaceSaver1.0.0.rar">
                <Download className="mr-2 h-5 w-5" />
                {dict.home.cta.button}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
