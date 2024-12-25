"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlayCircle, Monitor, Settings2, Save, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import type { Locale } from "@/i18n/config"

interface PreviewStep {
  title: string
  description: string
  icon: JSX.Element
  animation: (lang: Locale) => JSX.Element
}

interface PreviewDialogProps {
  lang: Locale
  labels: {
    viewDemo: string
    previous: string
    next: string
    steps: {
      autoSave: {
        title: string
        description: string
        selectWindows: string
        settings: string
        autoSaveInterval: string
        autoStartBoot: string
        hotkeySettings: string
      }
    }
  }
}

export function PreviewDialog({ lang, labels }: PreviewDialogProps) {
  const [currentStep, setCurrentStep] = useState(0)

  // 预览步骤
  const steps: PreviewStep[] = [
    {
      title: labels.steps.autoSave.title,
      description: labels.steps.autoSave.description,
      icon: <Save className="h-5 w-5 text-primary" />,
      animation: (lang: Locale) => (
        <div className="relative w-full h-64 bg-background/50 rounded-lg p-4 border-2 border-primary/20">
          {/* 模拟桌面 */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
          
          {/* 窗口1 */}
          <div className="absolute animate-pulse-slow bg-background border-2 border-primary/30 rounded-md w-48 h-32 top-4 left-4 shadow-lg overflow-hidden">
            <div className="h-6 bg-primary/10 border-b border-primary/20 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 mr-1" />
              <div className="w-2 h-2 rounded-full bg-primary/40 mr-1" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
            <div className="p-2 space-y-2">
              <div className="h-3 bg-primary/10 rounded animate-pulse" />
              <div className="h-3 bg-primary/10 rounded animate-pulse" />
            </div>
          </div>

          {/* 窗口2 */}
          <div className="absolute animate-pulse-slower bg-background border-2 border-primary/30 rounded-md w-56 h-40 top-16 left-32 shadow-lg overflow-hidden">
            <div className="h-6 bg-primary/10 border-b border-primary/20 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 mr-1" />
              <div className="w-2 h-2 rounded-full bg-primary/40 mr-1" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
            <div className="p-2 space-y-2">
              <div className="h-3 bg-primary/10 rounded animate-pulse" />
              <div className="h-3 bg-primary/10 rounded animate-pulse" />
              <div className="h-3 bg-primary/10 rounded animate-pulse" />
            </div>
          </div>

          {/* 保存指示器 */}
          <div className="absolute animate-save bg-primary/20 rounded-full w-10 h-10 bottom-4 right-4 flex items-center justify-center shadow-lg">
            <Save className="w-5 h-5 text-primary animate-ping" />
          </div>
        </div>
      )
    },
    {
      title: labels.steps.autoSave.title,
      description: labels.steps.autoSave.description,
      icon: <Monitor className="h-5 w-5 text-primary" />,
      animation: (lang: Locale) => (
        <div className="relative w-full h-64 bg-background/50 rounded-lg p-4 border-2 border-primary/20">
          {/* 模拟桌面 */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
          
          {/* 恢复选择面板 */}
          <div className="absolute right-4 top-4 w-48 bg-background border-2 border-primary/30 rounded-md shadow-lg overflow-hidden">
            <div className="h-8 bg-primary/10 border-b border-primary/20 flex items-center px-3">
              <span className="text-sm font-medium text-primary">
                {labels.steps.autoSave.selectWindows}
              </span>
            </div>
            <div className="p-3 space-y-3">
              <div className="animate-fade-in flex items-center">
                <div className="w-4 h-4 border-2 border-primary/40 rounded mr-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded animate-ping" />
                </div>
                <div className="h-3 bg-primary/10 rounded w-24" />
              </div>
              <div className="animate-fade-in-delay flex items-center">
                <div className="w-4 h-4 border-2 border-primary/40 rounded mr-2" />
                <div className="h-3 bg-primary/10 rounded w-20" />
              </div>
            </div>
          </div>

          {/* 窗口动画 */}
          <div className="absolute animate-slide-in bg-background border-2 border-primary/30 rounded-md w-48 h-32 bottom-4 left-4 shadow-lg overflow-hidden">
            <div className="h-6 bg-primary/10 border-b border-primary/20 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 mr-1" />
              <div className="w-2 h-2 rounded-full bg-primary/40 mr-1" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: labels.steps.autoSave.title,
      description: labels.steps.autoSave.description,
      icon: <Settings2 className="h-5 w-5 text-primary" />,
      animation: (lang: Locale) => (
        <div className="relative w-full h-64 bg-background/50 rounded-lg p-4 border-2 border-primary/20">
          {/* 模拟桌面 */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
          
          {/* 设置面板 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-background border-2 border-primary/30 rounded-md shadow-lg overflow-hidden">
            <div className="h-8 bg-primary/10 border-b border-primary/20 flex items-center px-3">
              <Settings2 className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                {labels.steps.autoSave.settings}
              </span>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="text-xs text-primary/70">
                  {labels.steps.autoSave.autoSaveInterval}
                </div>
                <div className="animate-width h-2 bg-primary/30 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="text-xs text-primary/70">
                  {labels.steps.autoSave.autoStartBoot}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-4 bg-primary/20 rounded-full p-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-slide-x" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-primary/70">
                  {labels.steps.autoSave.hotkeySettings}
                </div>
                <div className="animate-width-delay-2 flex space-x-1">
                  <div className="h-6 w-8 bg-primary/10 rounded flex items-center justify-center text-xs text-primary/70">
                    Ctrl
                  </div>
                  <div className="h-6 w-8 bg-primary/10 rounded flex items-center justify-center text-xs text-primary/70">
                    S
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="gap-2">
          <PlayCircle className="h-5 w-5" />
          {labels.viewDemo}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] p-0 gap-0 bg-background/95 backdrop-blur-xl border-primary/20 rounded-xl overflow-hidden">
        <div className="p-6">
          <DialogHeader>
            <div className="flex items-center space-x-2">
              {steps[currentStep].icon}
              <DialogTitle>{steps[currentStep].title}</DialogTitle>
            </div>
          </DialogHeader>
          <div className="mt-4 text-muted-foreground">
            {steps[currentStep].description}
          </div>
        </div>
        
        {/* 动画展示区域 */}
        <div className="relative border-y border-primary/10 bg-black/5">
          {steps[currentStep].animation(lang)}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        </div>

        {/* 控制按钮 */}
        <div className="p-4 bg-muted/50">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {labels.previous}
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} / {steps.length}
            </span>
            <Button
              onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="gap-2"
            >
              {labels.next}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 