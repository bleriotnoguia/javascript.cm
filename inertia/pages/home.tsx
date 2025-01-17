import { Head, Link } from '@inertiajs/react'
import Navbar from '../components/navbar'
import ArticlesSection from '../components/articles-section'
import OpenSourceSection from '../components/open-source-section'
import Footer from '../components/footer'

interface HomeProps {
  stats: {
    members: number
    developers: number
    participation: number
    githubStars: number
  }
  articles: Array<{
    id: number
    title: string
    slug: string
    excerpt: string
    author: {
      name: string
      username: string
    }
    createdAt: string
  }>
}

export default function Home({ stats, articles }: HomeProps) {
  return (
    <>
      <Head title="JavaScript Cameroun - La plus grande communauté de développeurs JavaScript au Cameroun" />

      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">JavaScript Cameroun</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Bienvenue sur le site de la communauté des développeurs JavaScript du Cameroun, le
                  plus gros rassemblement de développeurs au Cameroun.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/register"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Rejoindre la communauté
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/forum"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Visiter le Forum
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base font-semibold text-gray-500">
            Nous travaillons avec d'autres communautés et startups
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="/images/partners/laravel-shopper.svg"
                alt="Laravel Shopper"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="/images/partners/gdg-douala.svg" alt="GDG Douala" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="/images/partners/notchpay.svg" alt="NotchPay" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="/images/partners/sharuco.svg" alt="Sharuco" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A propos
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Nous construisons une communauté Open Source d'apprenants et d'enseignants
            </p>
          </div>
        </div>
        <div className="mt-10 bg-white pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Membres
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">
                      {stats.members}+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Développeurs
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {stats.developers}K+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Participation
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {stats.participation}%
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      GitHub Stars
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {stats.githubStars}K+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArticlesSection articles={articles} />
      <OpenSourceSection />
      <Footer />
    </>
  )
}
