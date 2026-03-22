'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Share2, Heart } from 'lucide-react'

type DailySentence = {
  id: string
  date: string
  sentence: string
  translation: string
  author: string
}

const dailySentences: DailySentence[] = [
  {
    id: '1',
    date: '2026-03-22',
    sentence: 'The only way to do great work is to love what you do.',
    translation: '做出伟大工作的唯一方法就是热爱你所做的事。',
    author: 'Steve Jobs'
  },
  {
    id: '2',
    date: '2026-03-21',
    sentence: 'Life is what happens when you\'re busy making other plans.',
    translation: '生活就是当你忙于制定其他计划时发生的事情。',
    author: 'John Lennon'
  },
  {
    id: '3',
    date: '2026-03-20',
    sentence: 'The future belongs to those who believe in the beauty of their dreams.',
    translation: '未来属于那些相信自己梦想之美的人。',
    author: 'Eleanor Roosevelt'
  },
  {
    id: '4',
    date: '2026-03-19',
    sentence: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    translation: '成功不是终点，失败也不是致命的：重要的是继续前进的勇气。',
    author: 'Winston Churchill'
  },
  {
    id: '5',
    date: '2026-03-18',
    sentence: 'Education is the most powerful weapon which you can use to change the world.',
    translation: '教育是你可以用来改变世界的最强大的武器。',
    author: 'Nelson Mandela'
  }
]

export default function DailyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [liked, setLiked] = useState<Set<string>>(new Set())

  const currentSentence = dailySentences[currentIndex]

  const handleLike = () => {
    setLiked(prev => {
      const newSet = new Set(prev)
      if (newSet.has(currentSentence.id)) {
        newSet.delete(currentSentence.id)
      } else {
        newSet.add(currentSentence.id)
      }
      return newSet
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '每日一句',
          text: `${currentSentence.sentence}\n\n${currentSentence.translation}\n\n— ${currentSentence.author}`
        })
      } catch (err) {
        console.log('分享失败', err)
      }
    } else {
      alert('您的浏览器不支持分享功能')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center text-gray-600 hover:text-indigo-600">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首页
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">每日一句</h1>
          <p className="text-gray-600">每天一句英语，提升你的语感</p>
        </div>

        {/* Sentence Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-gray-500">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{currentSentence.date}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleLike}
                className={`transition ${liked.has(currentSentence.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
              >
                <Heart className={`w-6 h-6 ${liked.has(currentSentence.id) ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="text-gray-400 hover:text-indigo-600 transition"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-relaxed mb-4">
                "{currentSentence.sentence}"
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                {currentSentence.translation}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-right text-gray-500 italic">
                — {currentSentence.author}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-6 py-2 bg-white rounded-lg shadow hover:shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            上一句
          </button>
          <span className="text-gray-600">
            {currentIndex + 1} / {dailySentences.length}
          </span>
          <button
            onClick={() => setCurrentIndex(prev => Math.min(dailySentences.length - 1, prev + 1))}
            disabled={currentIndex === dailySentences.length - 1}
            className="px-6 py-2 bg-white rounded-lg shadow hover:shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            下一句
          </button>
        </div>

        {/* History List */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">历史记录</h2>
          <div className="space-y-3">
            {dailySentences.map((sentence, index) => (
              <button
                key={sentence.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-full text-left p-4 rounded-lg transition ${
                  index === currentIndex
                    ? 'bg-indigo-50 border-2 border-indigo-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">{sentence.date}</p>
                    <p className="text-gray-900 line-clamp-2">{sentence.sentence}</p>
                  </div>
                  {liked.has(sentence.id) && (
                    <Heart className="w-5 h-5 text-red-500 fill-current ml-2 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
