'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Volume2, Check, X } from 'lucide-react'

type Word = {
  id: string
  word: string
  translation: string
  pronunciation: string
  example: string
  difficulty: 'easy' | 'medium' | 'hard'
}

// 示例单词数据
const sampleWords: Word[] = [
  {
    id: '1',
    word: 'accomplish',
    translation: '完成，实现',
    pronunciation: '/əˈkʌmplɪʃ/',
    example: 'She accomplished her goal of learning English.',
    difficulty: 'medium'
  },
  {
    id: '2',
    word: 'brilliant',
    translation: '聪明的，杰出的',
    pronunciation: '/ˈbrɪliənt/',
    example: 'He is a brilliant student.',
    difficulty: 'medium'
  },
  {
    id: '3',
    word: 'challenge',
    translation: '挑战',
    pronunciation: '/ˈtʃælɪndʒ/',
    example: 'Learning a new language is a challenge.',
    difficulty: 'easy'
  },
  {
    id: '4',
    word: 'determine',
    translation: '决定，确定',
    pronunciation: '/dɪˈtɜːmɪn/',
    example: 'We need to determine the best solution.',
    difficulty: 'medium'
  },
  {
    id: '5',
    word: 'enthusiastic',
    translation: '热情的',
    pronunciation: '/ɪnˌθjuːziˈæstɪk/',
    example: 'She is enthusiastic about learning.',
    difficulty: 'hard'
  }
]

export default function WordsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const currentWord = sampleWords[currentIndex]

  const handleKnow = () => {
    setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }))
    nextWord()
  }

  const handleDontKnow = () => {
    setScore(prev => ({ ...prev, total: prev.total + 1 }))
    setShowAnswer(true)
  }

  const nextWord = () => {
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev + 1) % sampleWords.length)
  }

  const speakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word)
      utterance.lang = 'en-US'
      speechSynthesis.speak(utterance)
    }
  }

  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-gray-600 hover:text-indigo-600">
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回首页
            </Link>
            <div className="text-sm text-gray-600">
              正确率: {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
              ({score.correct}/{score.total})
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>进度</span>
              <span>{currentIndex + 1} / {sampleWords.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentIndex + 1) / sampleWords.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Word Card */}
          <div className="text-center py-12">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[currentWord.difficulty]}`}>
                {currentWord.difficulty}
              </span>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {currentWord.word}
            </h2>

            <button
              onClick={speakWord}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              <span className="text-lg">{currentWord.pronunciation}</span>
            </button>

            {showAnswer && (
              <div className="mt-8 space-y-4 animate-fade-in">
                <div className="bg-indigo-50 rounded-lg p-6">
                  <p className="text-2xl font-semibold text-gray-900 mb-2">
                    {currentWord.translation}
                  </p>
                  <p className="text-gray-600 italic">
                    {currentWord.example}
                  </p>
                </div>
                <button
                  onClick={nextWord}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  下一个
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {!showAnswer && (
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button
                onClick={handleDontKnow}
                className="flex items-center justify-center bg-red-500 text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                <X className="w-5 h-5 mr-2" />
                不认识
              </button>
              <button
                onClick={handleKnow}
                className="flex items-center justify-center bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <Check className="w-5 h-5 mr-2" />
                认识
              </button>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
          <h3 className="font-semibold text-gray-900 mb-2">💡 学习小贴士</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 每天坚持学习 20-30 个单词</li>
            <li>• 点击发音按钮听标准读音</li>
            <li>• 通过例句理解单词用法</li>
            <li>• 定期复习已学单词</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
