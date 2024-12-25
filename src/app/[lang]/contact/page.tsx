import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Mail, Github, Twitter } from "lucide-react"
import Link from "next/link"

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "liulongzhoulg@gmail.com",
      href: "mailto:liulongzhoulg@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "Github",
      value: "github.com/lemoabc",
      href: "https://github.com/lemoabc"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      title: "Twitter",
      value: "@lemo_ing",
      href: "https://x.com/lemo_ing"
    }
  ]

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">{dict.footer.links.contact}</h1>
      
      <div className="grid gap-8">
        {contactMethods.map((method, index) => (
          <Link
            key={index}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-card rounded-lg border hover:border-primary transition-colors"
          >
            <div className="mr-6">{method.icon}</div>
            <div>
              <h3 className="text-lg font-medium mb-1">{method.title}</h3>
              <p className="text-muted-foreground">{method.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 