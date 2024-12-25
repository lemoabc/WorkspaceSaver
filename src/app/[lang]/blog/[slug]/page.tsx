import { Button } from "@/components/ui/button"
import { ArrowLeft, CalendarDays, Clock } from "lucide-react"
import Link from "next/link"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import { ScrollToTop } from "@/components/scroll-to-top"
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'

export default async function BlogPost({ 
  params 
}: { 
  params: { 
    slug: string
    lang: Locale 
  } 
}) {
  const dict = await getDictionary(params.lang)
  const post = dict.blog.posts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="container py-12 md:py-24">
      <Link href={`/${params.lang}/blog`}>
        <Button variant="ghost" className="mb-8 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {dict.blog.backToList}
        </Button>
      </Link>

      <article className="prose prose-gray dark:prose-invert mx-auto">
        <h1 className="mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="mt-8">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      <ScrollToTop />
    </main>
  )
}
