import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function TermsPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const sections = lang === 'zh-CN' ? [
    {
      title: "接受条款",
      content: "通过下载、安装或使用 WorkspaceSaver 软件，即表示您同意接受这些服务条款。如果您不同意这些条款，请不要使用本软件。"
    },
    {
      title: "软件许可",
      content: "WorkspaceSaver 是一款开源软件，根据 MIT 许可证发布。您可以自由使用、复制、修改、合并、出版发行、散布、再授权和/或贩售本软件的副本。"
    },
    {
      title: "使用限制",
      content: "您同意不会将本软件用于任何非法目的，也不会以任何可能损害软件或其他用户的方式使用本软件。"
    },
    {
      title: "数据收集",
      content: "本软件不会收集任何个人信息或使用数据。所有工作区状态数据均存储在您的本地计算机上。"
    },
    {
      title: "免责声明",
      content: "本软件按'原样'提供，不提供任何明示或暗示的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责。"
    },
    {
      title: "条款变更",
      content: "我们保留随时修改这些条款的权利。条款的重大变更将通过软件更新或网站公告通知用户。"
    }
  ] : [
    {
      title: "Acceptance of Terms",
      content: "By downloading, installing, or using the WorkspaceSaver software, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the software."
    },
    {
      title: "Software License",
      content: "WorkspaceSaver is open-source software released under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software."
    },
    {
      title: "Use Restrictions",
      content: "You agree not to use the software for any unlawful purposes or in any way that could damage or impair the software or other users."
    },
    {
      title: "Data Collection",
      content: "This software does not collect any personal information or usage data. All workspace state data is stored locally on your computer."
    },
    {
      title: "Disclaimer",
      content: "The software is provided 'as is', without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages or other liability."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Significant changes to the terms will be notified to users through software updates or website announcements."
    }
  ]

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">{dict.footer.links.terms}</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          {lang === 'zh-CN'
            ? "最后更新时间：2024年2月20日"
            : "Last updated: February 20, 2024"}
        </p>

        {sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-muted-foreground">{section.content}</p>
          </section>
        ))}

        <section className="mt-12">
          <p className="text-sm text-muted-foreground">
            {lang === 'zh-CN'
              ? "如果您对这些条款有任何疑问，请联系我们：liulongzhoulg@gmail.com"
              : "If you have any questions about these terms, please contact us at: liulongzhoulg@gmail.com"}
          </p>
        </section>
      </div>
    </div>
  )
} 