import { Link } from '@inertiajs/react'

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

interface ArticlesListProps {
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

export default function ArticlesList({ articles }: ArticlesListProps) {
  return (
    <div className="mt-8 space-y-8">
      {articles.data.map((article) => (
        <article key={article.id} className="relative bg-white p-8 rounded-lg shadow-sm">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={article.publishedAt} className="text-gray-500">
              {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <Link href={`/articles/${article.slug}`}>
                {/* <span className="absolute inset-0" /> */}
                {article.title}
              </Link>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.excerpt}</p>
          </div>
          <div className="mt-6 flex items-center gap-x-4">
            <div className="flex items-center gap-x-4">
              <img
                src={`https://ui-avatars.com/api/?name=${article.author.name}`}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <Link href={`/@${article.author.username}`}>
                    {/* <span className="absolute inset-0" /> */}
                    {article.author.name}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Pagination */}
      {articles.meta.last_page > 1 && (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-8 pt-8">
          <div className="-mt-px flex w-0 flex-1">
            {articles.meta.current_page > 1 && (
              <Link
                href={`/articles?page=${articles.meta.current_page - 1}`}
                className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <span>Previous</span>
              </Link>
            )}
          </div>
          <div className="hidden md:-mt-px md:flex">
            {[...Array(articles.meta.last_page)].map((_, i) => (
              <Link
                key={i}
                href={`/articles?page=${i + 1}`}
                className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                  articles.meta.current_page === i + 1
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            {articles.meta.current_page < articles.meta.last_page && (
              <Link
                href={`/articles?page=${articles.meta.current_page + 1}`}
                className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <span>Next</span>
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  )
}
