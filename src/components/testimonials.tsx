"use client"

import { Star } from "lucide-react"
import type { Locale } from "@/i18n/config"

interface TestimonialCardProps {
  avatar: string
  name: string
  title: string
  content: string
}

function TestimonialCard({ avatar, name, title, content }: TestimonialCardProps) {
  return (
    <div className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-gray-500 mb-6">
        "{content}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <span className="text-lg font-semibold text-primary">
            {avatar}
          </span>
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  )
}

interface TestimonialsProps {
  lang: Locale
  dict: any
}

export default function Testimonials({ lang, dict }: TestimonialsProps) {
  const testimonialsByLang = {
    'zh-CN': [
      {
        avatar: "张",
        name: "张工",
        title: "全栈开发工程师",
        content: "作为一名开发者，我经常同时打开多个IDE、文档和浏览器窗口。WorkspaceSaver帮我完美解决了工作区管理的问题，再也不用担心意外关机导致的工作进度丢失。启动电脑后一键恢复，特别方便。"
      },
      {
        avatar: "李",
        name: "李经理",
        title: "项目经理",
        content: "日常工作要处理多个项目，每个项目都有不同的文档和应用窗口布局。有了这个软件后，可以随时切换不同项目的工作环境，大大提高了工作效率，推荐给团队所有成员使用。"
      },
      {
        avatar: "王",
        name: "王老师",
        title: "在线教育讲师",
        content: "直播课程经常需要打开很多窗口，以前每次开课前都要手动排列窗口，很耗时。现在用这个软件后，一键恢复上次的窗口布局，让我可以更专注于课程本身，非常实用。"
      },
      {
        avatar: "陈",
        name: "陈工",
        title: "系统架构师",
        content: "经常在多个显示器上工作，窗口布局比较复杂。这个软件不仅能记住每个窗口的位置和大小，还能在电脑重启后让我选择性恢复需要的窗口，完全符合我的使用习惯。"
      },
      {
        avatar: "林",
        name: "林医生",
        title: "放射科医生",
        content: "需要同时查看多个病人的影像资料和报告，窗口布局对工作效率影响很大。软件的自动保存和选择性恢复功能帮我节省了大量整理窗口的时间，值得推荐。"
      },
      {
        avatar: "赵",
        name: "赵设计",
        title: "UI设计师",
        content: "设计工作需要同时开启多个设计软件和参考资料。最喜欢这个软件的自启动恢复功能，每天打开电脑就能快速恢复到之前的工作状态，再也不用重新排列窗口了。"
      }
    ],
    'en-US': [
      {
        avatar: "M",
        name: "Mike",
        title: "Full-stack Developer",
        content: "As a developer, I often work with multiple IDEs, docs, and browser windows. WorkspaceSaver perfectly solves my workspace management issues. No more worrying about losing progress due to unexpected shutdowns. One-click restore after startup is super convenient."
      },
      {
        avatar: "S",
        name: "Sarah",
        title: "Project Manager",
        content: "I handle multiple projects daily, each with different document and application window layouts. This software allows me to switch between different project environments instantly, greatly improving efficiency. Highly recommended for all team members."
      },
      {
        avatar: "T",
        name: "Tom",
        title: "Online Educator",
        content: "Live courses require many windows open, and manually arranging them before each class was time-consuming. Now with this software, I can instantly restore my previous window layout, allowing me to focus more on teaching. Very practical."
      },
      {
        avatar: "C",
        name: "Chris",
        title: "System Architect",
        content: "I work with multiple monitors and complex window layouts. This software not only remembers each window's position and size but also lets me selectively restore needed windows after computer restart. It perfectly matches my workflow."
      },
      {
        avatar: "D",
        name: "Dr. Lisa",
        title: "Radiologist",
        content: "I need to view multiple patient images and reports simultaneously, and window layout greatly affects work efficiency. The auto-save and selective restore features save me tons of time organizing windows. Highly recommended."
      },
      {
        avatar: "A",
        name: "Alex",
        title: "UI Designer",
        content: "Design work requires multiple design software and reference materials open. I love the auto-start restore feature the most - every morning when I start my computer, it quickly restores my previous work state. No more manual window arrangement."
      }
    ]
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {dict.testimonials.title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.testimonials.description}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {testimonialsByLang[lang].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
} 