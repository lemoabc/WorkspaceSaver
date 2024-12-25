"use client"

import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import type { Locale } from "@/i18n/config"

export function NavbarActions({ lang, dict }: { lang: Locale; dict: any }) {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  )
}
