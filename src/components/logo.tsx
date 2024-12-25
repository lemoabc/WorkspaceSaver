"use client"

import Image from "next/image"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { useState, useEffect } from "react"

interface LogoProps {
  lang: Locale
  className?: string
}

export function Logo({ lang, className }: LogoProps) {
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    // 开发环境下打印更多信息
    if (process.env.NODE_ENV === 'development') {
      console.log('Logo component mounted')
    }
  }, [])

  return (
    <Link href={`/${lang}`} className={`flex items-center space-x-2 ${className}`}>
      {!imgError ? (
        <Image
          src="https://via.placeholder.com/32"
        //   src="/images/logo.png"
          alt="WorkspaceSaver Logo"
          width={32}
          height={32}
          className="w-8 h-8"
          onError={(e) => {
            console.error("Logo image failed to load", e)
            setImgError(true)
          }}
          priority
          unoptimized
        />
      ) : (
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-primary font-bold">W</span>
        </div>
      )}
      <span className="font-semibold">WorkspaceSaver</span>
    </Link>
  )
} 