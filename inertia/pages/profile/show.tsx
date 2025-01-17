import { Head } from '@inertiajs/react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import ArticlesList from '../../components/articles/list'

interface ProfileProps {
  profile: {
    username: string
    name: string
    email: string
    avatar: string | null
    articles: Array<{
      id: number
      title: string
      slug: string
      excerpt: string
      author: {
        name: string
        username: string
      }
      publishedAt: string
    }>
  }
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <>
      <Head title={`${profile.name} (@${profile.username}) - JavaScript Cameroun`} />
      <Navbar />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Profile Header */}
          <div className="sm:flex sm:items-center sm:space-x-5">
            <div className="flex">
              <img
                className="h-20 w-20 rounded-full"
                src={profile.avatar || `https://ui-avatars.com/api/?name=${profile.name}`}
                alt={profile.name}
              />
            </div>
            <div className="mt-4 sm:mt-0 min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-600">@{profile.username}</p>
              <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Articles
                  </button>
                  <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Discussions
                  </button>
                  <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Questions
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6">
            {profile.articles.length > 0 ? (
              <ArticlesList
                articles={{
                  data: profile.articles,
                  meta: {
                    total: profile.articles.length,
                    per_page: 10,
                    current_page: 1,
                    last_page: 1,
                  },
                }}
              />
            ) : (
              <div className="text-center py-12">
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun article</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {profile.name} n'a pas encore publié d'articles.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
