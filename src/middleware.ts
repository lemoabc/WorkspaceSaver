/**
 * Next.js 国际化(i18n)中间件
 * 用于处理多语言路由和语言检测
 * 在每个请求到达之前进行处理，确保URL包含正确的语言前缀
 */

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './i18n/config'

/**
 * 根据用户浏览器偏好获取合适的语言
 * @param request - Next.js 请求对象
 * @returns 检测到的语言代码
 */
function getLocale(request: NextRequest): string {
  // 将请求头转换为 negotiator 期望的格式
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // 获取用户浏览器的语言偏好设置
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const localeList = [...locales]
  
  // 将用户偏好的语言与支持的语言列表匹配
  return matchLocale(languages, localeList, defaultLocale)
}

/**
 * 中间件主函数，处理所有传入的请求
 * 如果URL中没有语言前缀，则重定向到带有适当语言前缀的URL
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  // 检查当前路径是否缺少语言前缀
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // 如果缺少语言前缀，重定向到正确的语言URL
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

/**
 * 中间件配置
 * 定义哪些路由需要经过此中间件处理
 * 排除静态文件、API路由和其他特殊路径
 */
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|download).*)',
  ],
}