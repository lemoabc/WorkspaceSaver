import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'

export default async function PricingPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const { pricing } = dict

  const plans = [
    pricing.plans.free,
    pricing.plans.pro,
    pricing.plans.team
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {pricing.title}
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {pricing.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== pricing.plans.free.price && 
                  <span className="text-sm text-muted-foreground">/mo</span>
                }
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.name === pricing.plans.pro.name ? "default" : "outline"}
              >
                {plan.price === pricing.plans.free.price ? 
                  pricing.cta.free : pricing.cta.paid}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          {pricing.footer.refund}
          <Button variant="link" className="px-1 text-sm">
            {pricing.footer.contact}
          </Button>
        </p>
      </div>
    </div>
  )
}

export async function generateMetadata({ 
  params: { lang } 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const dict = await getDictionary(lang)
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: dict.pricing.title,
    description: dict.pricing.description,
    alternates: {
      canonical: `${url}/${lang}/pricing`,
      languages: {
        'en-US': `${url}/en-US/pricing`,
        'zh-CN': `${url}/zh-CN/pricing`,
      },
    },
    openGraph: {
      title: dict.pricing.title,
      description: dict.pricing.description,
      url: `${url}/${lang}/pricing`,
    }
  }
}
