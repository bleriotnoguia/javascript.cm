import { Head } from '@inertiajs/react'
import Navbar from '../../components/navbar'
import ArticlesList from '../../components/articles/list'
import Footer from '../../components/footer'

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  author: {
    name: string
    username: string
  }
  publishedAt: string
}

export interface ArticlesIndexProps {
  articles: {
    data: Article[]
    meta: {
      total: number
      per_page: number
      current_page: number
      last_page: number
    }
  }
}

export default function ArticlesIndex({ articles }: ArticlesIndexProps) {
  return (
    <>
      <Head title="Articles - JavaScript Cameroun" />
      <Navbar />

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Articles
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ArticlesList articles={articles} />
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
