/**
 * 工具函数集合
 * 包含整个应用程序中使用的通用辅助函数
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 合并并处理 CSS 类名，支持 Tailwind CSS
 * 用于动态组合类名，自动处理类名冲突和重复
 * 
 * @param inputs - 类名数组或条件类对象
 * @returns 处理后的类名字符串，已去除重复并解决冲突
 * 
 * @example
 * cn('p-4', 'bg-blue-500', { 'text-white': true, 'font-bold': false })
 * // 返回: "p-4 bg-blue-500 text-white"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
