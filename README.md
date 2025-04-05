# ✒️ QuillKalam

QuillKalam is a web-first creative writing and reading platform where authors can write, manage, and share their work, and readers can review, rank, and explore stories with a strong community-driven experience. Inspired by platforms like **MyAnimeList**, **Goodreads**, **Royal Road**, **Reddit** and **Webnovel**, QuillKalam blends powerful writing tools with reader engagement and gamification.

---

## 🚀 Features

### ✍️ For Authors
- Advanced writing editor with **folder and file management**
- Organize stories into **chapters, volumes**, or custom structures
- **Upload and manage images** within writing projects
- **Relational content modeling** similar to Scrivener
- Share finished or draft works with readers
- Gain **badges and rankings** for writing engagement

### 📖 For Readers
- Explore stories from thousands of independent authors
- Leave **reviews, comments**, and **upvote/downvote** content
- Create personal **libraries**, collections, and wishlists
- Follow favorite authors and receive updates
- Earn **badges and rankings** for top reviews

### 🧠 AI & Social Features
- AI-powered **writing assistant and chatbot**
- Smart **recommendation system** for stories and authors
- Personalized dashboards and feeds
- Monthly and all-time **ranking systems**
- Gamified badge system for both writers and reviewers

### 🛠️ CMS (NestJS)
- Built with [NestJS](https://nestjs.com/) to manage:
  - Users and roles
  - Book and chapter metadata
  - Categories, tags, and genres
  - Review moderation
  - Rankings and badges
  - Content publishing workflows

---

## 🧱 Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/) for components
- [Lucide Icons](https://lucide.dev/)

### Backend & CMS
- [NestJS](https://nestjs.com/) (as CMS and admin API)
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [Prisma](https://www.prisma.io/) as ORM
- [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech) or Docker local setup)

### AI Services
- [FastAPI](https://fastapi.tiangolo.com/) (for ML & AI services)
- OpenAI API (for writing assistant & recommendations)

### DevOps
- Docker (for local DB and service containers)
- Vercel (for frontend deployment)


## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- Python 3.10+ (for FastAPI)
- Docker (for local development DB)
- PostgreSQL (local or Neon)
- VS Code + recommended extensions

### 1. Clone the repo

```bash
git clone <use ssh link>
cd quillkalam

