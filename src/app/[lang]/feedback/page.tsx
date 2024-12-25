import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Github, BugPlay, Lightbulb } from "lucide-react"
import Link from "next/link"

export default async function FeedbackPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const feedbackTypes = [
    {
      icon: <BugPlay className="h-6 w-6" />,
      title: lang === 'zh-CN' ? "报告问题" : "Report Issue",
      description: lang === 'zh-CN' 
        ? "如果您在使用过程中遇到任何问题或错误，请通过 Github Issues 向我们报告。"
        : "If you encounter any problems or errors while using the software, please report them to us via Github Issues.",
      href: "https://github.com/lemoabc/WorkspaceSaver/issues/new?labels=bug&template=bug_report.md"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: lang === 'zh-CN' ? "功能建议" : "Feature Request",
      description: lang === 'zh-CN'
        ? "欢迎提出新的功能建议，帮助我们改进软件。"
        : "Welcome to suggest new features to help us improve the software.",
      href: "https://github.com/lemoabc/WorkspaceSaver/issues/new?labels=enhancement&template=feature_request.md"
    }
  ]

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">{dict.footer.links.feedback}</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg text-muted-foreground">
          {lang === 'zh-CN' 
            ? "我们非常重视您的反馈，它们对改进软件质量至关重要。您可以通过以下方式向我们反馈："
            : "We value your feedback greatly as it is crucial for improving our software quality. You can provide feedback through the following channels:"}
        </p>
      </div>

      <div className="grid gap-8">
        {feedbackTypes.map((type, index) => (
          <Link
            key={index}
            href={type.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-6 bg-card rounded-lg border hover:border-primary transition-colors"
          >
            <div className="mr-6 mt-1">{type.icon}</div>
            <div>
              <h3 className="text-lg font-medium mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-card rounded-lg border">
        <div className="flex items-center mb-4">
          <Github className="h-6 w-6 mr-2" />
          <h3 className="text-lg font-medium">
            {lang === 'zh-CN' ? "通过 Github 反馈" : "Feedback via Github"}
          </h3>
        </div>
        <p className="text-muted-foreground mb-4">
          {lang === 'zh-CN'
            ? "我们使用 Github Issues 跟踪所有问题和建议。在提交反馈时，请尽可能详细地描述您遇到的问题或建议。"
            : "We use Github Issues to track all issues and suggestions. When submitting feedback, please describe your issue or suggestion in as much detail as possible."}
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          {(lang === 'zh-CN' ? [
            "包含您的系统环境信息",
            "描述问题发生的步骤",
            "如果可能，附上截图或录屏",
            "说明期望的行为"
          ] : [
            "Include your system environment information",
            "Describe the steps to reproduce the issue",
            "Attach screenshots or recordings if possible",
            "Explain the expected behavior"
          ]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
} 