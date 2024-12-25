/**
 * 国际化(i18n)配置文件
 * 包含应用程序的多语言支持核心配置
 * 定义支持的语言和显示名称
 */

// 应用程序的默认语言设置
export const defaultLocale = 'zh-CN'

// 支持的语言列表
// 使用 'as const' 确保类型安全
export const locales = ['zh-CN', 'en-US'] as const
export type Locale = typeof locales[number]

// 语言显示名称配置
// 用于语言切换器组件中显示
export const localeNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English'
}