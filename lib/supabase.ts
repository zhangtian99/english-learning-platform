import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Word = {
  id: string
  word: string
  translation: string
  pronunciation?: string
  example?: string
  difficulty: 'easy' | 'medium' | 'hard'
  created_at: string
}

export type UserProgress = {
  id: string
  user_id: string
  word_id: string
  mastery_level: number
  last_reviewed: string
  next_review: string
  review_count: number
}

export type DailySentence = {
  id: string
  sentence: string
  translation: string
  author?: string
  date: string
}
