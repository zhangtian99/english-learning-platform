import Link from 'next/link'
import { BookOpen, Brain, MessageSquare, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">English Learning</h1>
            <nav className="space-x-4">
              <Link href="/words" className="text-gray-600 hover:text-indigo-600">单词</Link>
              <Link href="/reading" className="text-gray-600 hover:text-indigo-600">阅读</Link>
              <Link href="/daily" className="text-gray-600 hover:text-indigo-600">每日一句</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            开始你的英语学习之旅
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            科学的学习方法，让英语学习更高效
          </p>
          <Link 
            href="/words"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
          >
            开始学习
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-indigo-600" />}
            title="智能记忆"
            description="基于艾宾浩斯遗忘曲线的间隔重复算法"
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-indigo-600" />}
            title="海量词库"
            description="涵盖各个难度级别的英语单词"
          />
          <FeatureCard
            icon={<MessageSquare className="w-12 h-12 text-indigo-600" />}
            title="每日一句"
            description="每天学习一句实用的英语表达"
          />
          <FeatureCard
            icon={<TrendingUp className="w-12 h-12 text-indigo-600" />}
            title="进度追踪"
            description="可视化你的学习进度和成就"
          />
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">单词词库</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">365</div>
              <div className="text-gray-600">每日一句</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">阅读文章</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2026 English Learning Platform. Made with ❤️</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
