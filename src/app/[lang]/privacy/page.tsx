import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function PrivacyPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const sections = lang === 'zh-CN' ? [
    {
      title: "信息收集",
      content: "WorkspaceSaver 不会收集任何个人信息。软件运行所需的所有数据（包括窗口状态、布局信息和配置设置）都只存储在您的本地计算机上。"
    },
    {
      title: "数据存储",
      content: "所有数据都保存在您的用户目录下的专用文件夹中。这些数据完全由您控制，您可以随时查看、备份或删除这些数据。"
    },
    {
      title: "数据使用",
      content: "收集的窗口状态和布局信息仅用于实现软件的核心功能：保存和恢复您的工作区状态。这些数据不会用于任何其他目的。"
    },
    {
      title: "第三方访问",
      content: "由于所有数据都存储在本地，第三方无法访问您的数据。我们不会将任何信息传输到外部服务器或与第三方共享。"
    },
    {
      title: "数据安全",
      content: "我们建议您定期备份重要的工作区配置，并确保您的计算机安全。由于数据存储在本地，其安全性取决于您的计算机系统的安全性。"
    },
    {
      title: "用户控制",
      content: "您可以通过软件设置来控制自动保存的频率，并可以随时手动删除保存的工作区数据。您完全掌控您的数据。"
    }
  ] : [
    {
      title: "Information Collection",
      content: "WorkspaceSaver does not collect any personal information. All data required for the software to function (including window states, layout information, and configuration settings) is stored only on your local computer."
    },
    {
      title: "Data Storage",
      content: "All data is saved in a dedicated folder within your user directory. This data is completely under your control, and you can view, backup, or delete this data at any time."
    },
    {
      title: "Data Usage",
      content: "The collected window states and layout information are used solely for implementing the software's core functionality: saving and restoring your workspace state. This data is not used for any other purpose."
    },
    {
      title: "Third-Party Access",
      content: "Since all data is stored locally, third parties cannot access your data. We do not transmit any information to external servers or share it with third parties."
    },
    {
      title: "Data Security",
      content: "We recommend regularly backing up important workspace configurations and ensuring your computer's security. Since data is stored locally, its security depends on the security of your computer system."
    },
    {
      title: "User Control",
      content: "You can control the frequency of automatic saves through software settings and can manually delete saved workspace data at any time. You have complete control over your data."
    }
  ]

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">{dict.footer.links.privacy}</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          {lang === 'zh-CN'
            ? "最后更新时间：2024年2月20日"
            : "Last updated: February 20, 2024"}
        </p>

        <p className="text-lg text-muted-foreground mb-8">
          {lang === 'zh-CN'
            ? "我们高度重视您的隐私。本隐私政策说明了 WorkspaceSaver 如何处理您的数据。"
            : "We highly value your privacy. This Privacy Policy explains how WorkspaceSaver handles your data."}
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
              ? "如果您对我们的隐私政策有任何疑问，请联系我们：liulongzhoulg@gmail.com"
              : "If you have any questions about our Privacy Policy, please contact us at: liulongzhoulg@gmail.com"}
          </p>
        </section>
      </div>
    </div>
  )
} 