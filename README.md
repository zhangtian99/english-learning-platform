# English Learning Platform - 英语学习平台

一个现代化的英语学习平台，提供科学高效的学习方法。

## 🌟 功能特点

### 📚 单词记忆
- 智能间隔重复算法（基于艾宾浩斯遗忘曲线）
- 多难度级别单词库
- 真人发音
- 例句学习
- 学习进度追踪

### 📖 阅读练习
- 精选英语文章
- 多难度级别（Easy/Medium/Hard）
- 中英对照
- 阅读时间估算

### 💬 每日一句
- 每日更新英语名言
- 中英双语
- 收藏功能
- 社交分享

## 🚀 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **数据库**: Supabase (PostgreSQL)
- **部署**: Vercel

## 📦 安装和运行

### 本地开发

\`\`\`bash
# 克隆仓库
git clone https://github.com/zhangtian99/english-learning-platform.git
cd english-learning-platform

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env.local
# 编辑 .env.local 填入你的 Supabase 配置

# 启动开发服务器
npm run dev
\`\`\`

访问 http://localhost:3000

### 环境变量

在 \`.env.local\` 中配置：

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

## 🌐 在线访问

- **主域名**: https://qx.52play.online
- **Vercel 域名**: https://english-learning-app-lake-ten.vercel.app

## 📱 页面导航

- `/` - 首页
- `/words` - 单词学习
- `/reading` - 阅读练习
- `/daily` - 每日一句

## 🎨 特性

- ✅ 响应式设计，支持手机和电脑
- ✅ 现代化 UI/UX
- ✅ 流畅的动画效果
- ✅ 语音朗读功能
- ✅ 进度追踪
- ✅ 社交分享

## 📊 数据库结构

### Words 表
\`\`\`sql
CREATE TABLE words (
  id UUID PRIMARY KEY,
  word TEXT NOT NULL,
  translation TEXT NOT NULL,
  pronunciation TEXT,
  example TEXT,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

### User Progress 表
\`\`\`sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  word_id UUID REFERENCES words(id),
  mastery_level INTEGER DEFAULT 0,
  last_reviewed TIMESTAMP,
  next_review TIMESTAMP,
  review_count INTEGER DEFAULT 0
);
\`\`\`

### Daily Sentences 表
\`\`\`sql
CREATE TABLE daily_sentences (
  id UUID PRIMARY KEY,
  sentence TEXT NOT NULL,
  translation TEXT NOT NULL,
  author TEXT,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

## 🔧 开发计划

- [ ] 用户认证系统
- [ ] 个人学习统计
- [ ] 更多单词库
- [ ] 听力练习
- [ ] 口语练习
- [ ] 社区功能
- [ ] 移动 App

## 📝 许可证

MIT License

## 👨‍💻 作者

zhangtian99

## 🙏 致谢

感谢所有开源项目的贡献者！

---

Made with ❤️ by zhangtian99
