/**
 * 根布局文件 - 为整个应用提供基础布局结构
 * [lang] 是动态路由参数，用于多语言支持
 * 该文件定义了页面的整体结构，包括导航栏、页脚和主体内容
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { locales } from '@/i18n/config'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Toaster } from "react-hot-toast"
import { BreadcrumbWrapper } from "@/components/breadcrumb-wrapper"

// 加载 Inter 字体，用于整个应用的文字显示
const inter = Inter({ subsets: ["latin"] });

/**
 * 生成页面元数据
 * 包括标题、描述、关键词、作者信息等
 * 同时处理多语言版本的元数据和搜索引擎优化(SEO)设置
 * 
 * @param params - 包含当前语言参数的对象
 * @returns 返回页面的元数据配置
 */
export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  // 获取当前语言的翻译字典
  const dict = await getDictionary(params.lang)
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
  
  return {
    // 设置页面标题，支持默认标题和模板
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.metadata.title}`  // %s 会被具体页面的标题替换
    },
    // 页面描述和关键词
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: 'yeheboo' }],
    // 设置网站基础URL
    metadataBase: new URL(url),
    // 设置多语言版本链接
    alternates: {
      canonical: `${url}/${params.lang}`,  // 当前页面的标准链接
      languages: {
        'en-US': `${url}/en-US`,  // 英文版链接
        'zh-CN': `${url}/zh-CN`,  // 中文版链接
      },
    },
    // Open Graph 协议配置，用于社交媒体分享
    openGraph: {
      type: 'website',
      locale: params.lang,
      url: `${url}/${params.lang}`,
      title: dict.metadata.title,
      description: dict.metadata.description,
      siteName: dict.common.brand
    },
    // Twitter 卡片配置
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    // 搜索引擎爬虫配置
    robots: {
      index: true,      // 允许索引
      follow: true,     // 允许跟踪链接
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * 生成静态路由参数
 * 为每个支持的语言生成对应的路由
 * 这样可以在构建时预生成所有语言版本的页面
 */
export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

/**
 * 根布局组件
 * 定义整个应用的基础布局结构
 * 包括主题支持、全局通知、背景效果等
 * 
 * @param children - 子组件（页面内容）
 * @param params - 路由参数，包含当前语言设置
 */
export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // 获取当前语言的翻译
  const dict = await getDictionary(lang)
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        {/* 主题提供者组件，处理深色/浅色主题 */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 全局消息提示组件 */}
          <Toaster position="top-center" />
          {/* 页面主体结构 */}
          <div className="relative flex min-h-screen flex-col">
            {/* 背景渐变效果 */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial-t from-primary/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial-b from-primary/20 to-transparent pointer-events-none" />
            {/* 导航栏 */}
            <Navbar lang={lang} />
            {/* 主要内容区域 */}
            <main className="relative flex-1">
              <BreadcrumbWrapper lang={lang} dict={dict} />
              {children}
            </main>
            {/* 页脚 */}
            <Footer lang={lang} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
