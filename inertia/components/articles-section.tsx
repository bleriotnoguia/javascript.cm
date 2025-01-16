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
  createdAt: string
}

interface ArticlesSectionProps {
  articles: Article[]
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Articles Populaires</h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez les articles les plus appréciés et partagés par les membres de la communauté
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href={`/articles/${article.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                    <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link href={`/@${article.author.username}`}>
                      <span className="sr-only">{article.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${article.author.name}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link href={`/@${article.author.username}`} className="hover:underline">
                        {article.author.name}
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.createdAt}>
                        {new Date(article.createdAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </div>
  )
}
