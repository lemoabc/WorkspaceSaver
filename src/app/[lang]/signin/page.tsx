import { AuthForm } from "@/components/auth/auth-form"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function SignInPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container relative flex-1 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.chrome className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            {dict.auth.signin.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {dict.auth.signin.description}
          </p>
        </div>
        <AuthForm mode="signin" lang={lang} />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link 
            href={`/${lang}/signup`}
            className="hover:text-brand underline underline-offset-4"
          >
            {dict.auth.signin.noAccount} {dict.auth.signin.signupLink}
          </Link>
        </p>
      </div>
    </div>
  )
}
