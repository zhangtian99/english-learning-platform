'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock } from 'lucide-react'

type Article = {
  id: string
  title: string
  content: string
  translation: string
  difficulty: 'easy' | 'medium' | 'hard'
  readTime: number
}

const articles: Article[] = [
  {
    id: '1',
    title: 'The Power of Reading',
    content: `Reading is one of the most important skills you can develop. It opens doors to new worlds, ideas, and perspectives. When you read regularly, you improve your vocabulary, enhance your writing skills, and expand your knowledge.

Many successful people attribute their achievements to their reading habits. Bill Gates reads about 50 books a year, and Warren Buffett spends 80% of his day reading. They understand that reading is an investment in yourself.

Start with just 15 minutes a day. Choose topics that interest you. Whether it's fiction, non-fiction, or news articles, the key is consistency. Over time, you'll notice improvements in your language skills and critical thinking abilities.`,
    translation: '阅读是你可以培养的最重要的技能之一。它为新世界、新思想和新视角打开了大门。当你经常阅读时，你会提高词汇量，增强写作技巧，扩展知识面。许多成功人士将他们的成就归功于阅读习惯。比尔·盖茨每年读约50本书，沃伦·巴菲特每天80%的时间都在阅读。他们明白阅读是对自己的投资。从每天15分钟开始。选择你感兴趣的主题。无论是小说、非小说还是新闻文章，关键是坚持。随着时间的推移，你会注意到语言技能和批判性思维能力的提高。',
    difficulty: 'easy',
    readTime: 3
  },
  {
    id: '2',
    title: 'The Future of Technology',
    content: `Artificial intelligence is transforming our world at an unprecedented pace. From self-driving cars to personalized medicine, AI is revolutionizing industries and changing how we live and work.

However, this rapid advancement also raises important questions. How do we ensure AI is developed ethically? What happens to jobs that become automated? How do we protect privacy in an increasingly connected world?

These challenges require thoughtful consideration and collaboration between technologists, policymakers, and society at large. The future of technology depends not just on what we can build, but on how we choose to use it.`,
    translation: '人工智能正在以前所未有的速度改变我们的世界。从自动驾驶汽车到个性化医疗，AI正在革新各个行业，改变我们的生活和工作方式。然而，这种快速发展也提出了重要问题。我们如何确保AI的道德发展？自动化的工作会发生什么？在日益互联的世界中，我们如何保护隐私？这些挑战需要技术专家、政策制定者和整个社会的深思熟虑和合作。技术的未来不仅取决于我们能建造什么，还取决于我们选择如何使用它。',
    difficulty: 'medium',
    readTime: 4
  },
  {
    id: '3',
    title: 'Climate Change and Our Responsibility',
    content: `Climate change represents one of the most pressing challenges of our time. Rising temperatures, extreme weather events, and melting ice caps are no longer distant threats—they are current realities affecting communities worldwide.

The scientific consensus is clear: human activities, particularly the burning of fossil fuels, are the primary drivers of climate change. However, this also means we have the power to address it. Individual actions matter, from reducing energy consumption to supporting sustainable businesses.

But individual action alone isn't enough. We need systemic change through policy reforms, corporate responsibility, and international cooperation. The transition to renewable energy, protection of forests, and investment in green technology are crucial steps toward a sustainable future.`,
    translation: '气候变化是我们这个时代最紧迫的挑战之一。气温上升、极端天气事件和冰盖融化不再是遥远的威胁——它们是影响全球社区的当前现实。科学共识很明确：人类活动，特别是化石燃料的燃烧，是气候变化的主要驱动因素。然而，这也意味着我们有能力解决它。个人行动很重要，从减少能源消耗到支持可持续企业。但仅靠个人行动是不够的。我们需要通过政策改革、企业责任和国际合作来实现系统性变革。向可再生能源过渡、保护森林和投资绿色技术是迈向可持续未来的关键步骤。',
    difficulty: 'hard',
    readTime: 5
  }
]

export default function ReadingPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [showTranslation, setShowTranslation] = useState(false)

  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  }

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => {
                setSelectedArticle(null)
                setShowTranslation(false)
              }}
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回列表
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <article className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[selectedArticle.difficulty]}`}>
                {selectedArticle.difficulty}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {selectedArticle.readTime} min read
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {selectedArticle.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed whitespace-pre-line mb-8">
                {selectedArticle.content}
              </div>

              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="mb-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                {showTranslation ? '隐藏翻译' : '显示翻译'}
              </button>

              {showTranslation && (
                <div className="bg-indigo-50 rounded-lg p-6 text-gray-700 leading-relaxed">
                  {selectedArticle.translation}
                </div>
              )}
            </div>
          </article>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center text-gray-600 hover:text-indigo-600">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">阅读练习</h1>
          <p className="text-gray-600">通过阅读提升英语理解能力</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[article.difficulty]}`}>
                    {article.difficulty}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime} min
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.content}
                </p>

                <div className="mt-4 flex items-center text-indigo-600 font-medium">
                  <BookOpen className="w-4 h-4 mr-2" />
                  开始阅读
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
