import Link from "next/link"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Logo } from "./logo"

export default async function Footer({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const footerLinks = {
    [dict.footer.product]: [
      { name: dict.footer.links.chinesecolor, href: 'https://chinesecolor.xyz' },
      { name: dict.footer.links.lemobook, href: 'https://lemobook.vercel.app' },
      { name: dict.footer.links.workspacesaver, href: 'https://workspace-saver.vercel.app' }
    ],
    [dict.footer.social]: [
      { name: dict.footer.links.twitter, href: 'https://x.com/lemo_ing' },
      { name: dict.footer.links.github, href: 'https://github.com/lemoabc' },
      { name: dict.footer.links.jike, href: 'https://okjk.co/zdg6QD' },
    ],
    [dict.footer.support]: [
      { name: dict.footer.links.help, href: `/${lang}/help` },
      { name: dict.footer.links.contact, href: `/${lang}/contact` },
      { name: dict.footer.links.feedback, href: `/${lang}/feedback` },
    ],
    [dict.footer.company]: [
      { name: dict.footer.links.about, href: `/${lang}/about` },
      { name: dict.footer.links.terms, href: `/${lang}/terms` },
      { name: dict.footer.links.privacy, href: `/${lang}/privacy` },
    ],
  }

  return (
    <footer className="relative w-full bg-background/40 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background/5 to-transparent pointer-events-none" />
      <div className="container relative px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-base font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(category === dict.footer.product || category === dict.footer.social
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {}
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <Logo lang={lang} />
          
          <div className="mt-4 md:mt-0 text-center md:text-left text-sm text-muted-foreground">
            <p>{dict.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
