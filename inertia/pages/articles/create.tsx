import { Head, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function ArticleCreate() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    content: '',
    excerpt: '',
    tags: [],
    published: false,
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/articles')
  }

  return (
    <>
      <Head title="Create Article - JavaScript Cameroun" />
      <Navbar />

      <div className="py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                rows={3}
                value={data.excerpt}
                onChange={(e) => setData('excerpt', e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.excerpt && <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>}
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                rows={10}
                value={data.content}
                onChange={(e) => setData('content', e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
            </div>

            <div className="flex items-center">
              <input
                id="published"
                type="checkbox"
                checked={data.published}
                onChange={(e) => setData('published', e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                Publish immediately
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={processing}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {processing ? 'Saving...' : 'Save Article'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
