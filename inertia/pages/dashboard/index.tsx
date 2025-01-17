import { Head, Link } from '@inertiajs/react'
import DashboardLayout from '../../layouts/dashboard'

interface DashboardProps {
  stats: {
    articles: number
    discussions: number
    questions: number
  }
}

export default function Dashboard({ stats }: DashboardProps) {
  return (
    <DashboardLayout>
      <Head title="Dashboard - JavaScript Cameroun" />

      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Total Articles</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {stats.articles}
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Total Discussions</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {stats.discussions}
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Total Questions</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {stats.questions}
            </dd>
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            href="/articles/create"
            className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create Article
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Activity</h3>
            <div className="mt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">No recent activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
