import { Head } from '@inertiajs/react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

interface Article {
  title: string
  content: string
  publishedAt: string
  author: {
    name: string
    username: string
  }
}

interface ArticleShowProps {
  article: Article
}

export default function ArticleShow({ article }: ArticleShowProps) {
  return (
    <>
      <Head title={`${article.title} - JavaScript Cameroun`} />
      <Navbar />

      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Article
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {article.title}
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>

            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://ui-avatars.com/api/?name=${article.author.name}`}
                    alt=""
                  />
                </div>
                <div className="text-sm leading-5 space-y-1">
                  <p className="text-gray-900 font-medium">{article.author.name}</p>
                  <p className="text-gray-500">
                    Published on{' '}
                    {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
