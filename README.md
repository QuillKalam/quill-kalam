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
```

## 🛠️ Setup and Installation Guide

- [VS Code installation](#vs-code)
- [Node Js setup](#node-js-setup)
- [Docker setup](#docker-setup)
- [SSH Key generation](#ssh-key-generation)
- [Code base setup](#code-base-setup)

#### VS Code

- Install [VS Code](https://code.visualstudio.com/)

#### **Node Js setup**

- Install Node.js (v18+) from [Node.js official website](https://nodejs.org/en/download/). Follow the instructions for your operating system.
- Verify the installation by running the following commands in your terminal:

```bash
node -v
npm -v
```

#### **Docker setup**

- Install Docker from [Docker official website](https://www.docker.com/get-started).
- Follow the instructions for your operating system.
- Verify the installation by running the following command in your terminal:

```bash
docker --version
```

- If you are using Windows, make sure to enable WSL2 integration in Docker settings.
- If you are using Mac, make sure to enable the experimental feature in Docker settings.
- If you are using Linux, make sure to enable the experimental feature in Docker settings.

#### **SSH Key generation**

- Generate an SSH key pair by running the following command in your terminal:

```bash
ssh-keygen -t ed25519 -C "<Your Github Email>"
```

- Press Enter to accept the default file location.
- Enter a passphrase and press Enter.

- Copy the public key to your clipboard by running the following command:

```bash
cat ~/.ssh/id_ed25519.pub
```

- Go to your GitHub account settings and navigate to **SSH and GPG keys**.
- Click on **New SSH key** and paste the public key into the key field.
- Give it a title and click **Add SSH key**.

Or you can directly visit This link (https://github.com/settings/ssh/new) to add the SSH key. Make sure you are logged in to your GitHub account.

#### **Code base setup**

- Open [github repository link in your browser](https://github.com/QuillKalam/quill-kalam) and click on the green button **Code** and copy the SSH link.
- Open your terminal and navigate to the directory where you want to clone the repository.
- Run the following command to clone the repository:

```bash
git clone <use ssh link>
```

- Navigate to the cloned repository:

```bash
cd quill-kalam
```

- Install the required dependencies by running the following command:

```bash
pnpm install
```

If you have _**migrations**_ directory at location `/apps/web/prisma` delete it.

- Create a new file named `.env` at `/apps/web` of the project and add the following environment variables:

```bash
DATABASE_URL="postgresql://quillkalam:password@localhost:5432/quillkalam_db"
AUTH_SECRET="<Any value>"
```

- Run command

```bash
pnpm docker:db
```

Navigate to `/apps/web` directory and run the following command to create the database:

```bash
npx primsa migrate reset(run for the very first time)
pnpm prisma
npx prisma migrate dev
```

Give any name for
**Enter a name for the new migration**

Navigate back to the root directory of the project and run the following command to start the development server:

```bash
pnpm dev:all
```
