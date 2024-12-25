import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { ThumbsUp, Heart, Github } from "lucide-react"
import Link from "next/link"

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const features = [
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: lang === 'zh-CN' ? "简单易用" : "Easy to Use",
      description: lang === 'zh-CN'
        ? "无需复杂配置，安装即可使用，自动保存您的工作区状态"
        : "No complex configuration needed, just install and use, automatically saves your workspace state"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: lang === 'zh-CN' ? "开源免费" : "Open Source & Free",
      description: lang === 'zh-CN'
        ? "完全开源的解决方案，代码托管在 Github，欢迎贡献"
        : "Fully open-source solution, hosted on Github, contributions welcome"
    }
  ]

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">{dict.footer.links.about}</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg text-muted-foreground">
          {lang === 'zh-CN'
            ? "WorkspaceSaver 是一款专注于提升工作效率的 Windows 工具软件。我们的目标是通过智能的工作区管理，让您的工作更加连贯和高效。"
            : "WorkspaceSaver is a Windows utility software focused on improving work efficiency. Our goal is to make your work more continuous and efficient through intelligent workspace management."}
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-card rounded-lg border"
          >
            <div className="mr-6 mt-1">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {lang === 'zh-CN' ? "开发团队" : "Development Team"}
        </h2>
        <p className="text-muted-foreground mb-6">
          {lang === 'zh-CN'
            ? "我们是一个热爱技术、追求极致用户体验的小团队。如果您对我们的工作感兴趣，欢迎通过以下方式了解更多："
            : "We are a small team passionate about technology and pursuing ultimate user experience. If you're interested in our work, feel free to learn more through:"}
        </p>
      </div>

      <div className="grid gap-6">
        <Link
          href="https://github.com/lemoabc/WorkspaceSaver"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-card rounded-lg border hover:border-primary transition-colors"
        >
          <Github className="h-5 w-5 mr-3" />
          <span>Github Repository</span>
        </Link>
      </div>
    </div>
  )
} 