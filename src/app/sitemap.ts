/**
 * 站点地图生成配置
 * 为所有支持的语言和内容页面生成动态站点地图
 * 帮助搜索引擎更好地理解和索引网站结构
 */

import { locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

/**
 * 生成整个网站的站点地图条目
 * 包括以下页面：
 * - 每个语言版本的首页
 * - 每个语言版本的静态页面（博客、定价等）
 * - 每个语言版本的博客文章页面
 * 
 * @returns 包含URL、最后修改日期、更新频率和优先级的站点地图条目数组
 */
export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
  const sitemapEntries = []

  // 为每个语言版本添加基础页面
  for (const locale of locales) {
    const dict = await getDictionary(locale)
    const posts = dict.blog.posts

    // 添加主页（最高优先级）
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })

    // 添加固定页面（中高优先级）
    const staticPages = ['blog', 'pricing']
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }

    // 添加博客文章页面（中等优先级）
    // 使用文章发布日期作为最后修改日期
    for (const post of posts) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  return sitemapEntries
}
