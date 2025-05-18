import { Head, Link } from '@inertiajs/react'
import DashboardLayout from '../../layouts/dashboard'

interface DashboardProps {
  publishedArticles: number
  draftArticles: number
  waitingArticles: number
  discussions: number
  questions: number
}

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${color} bg-opacity-10 mr-2`}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  )
}

export default function Dashboard({ publishedArticles, draftArticles, waitingArticles, discussions, questions , ...props}: DashboardProps) {
  return (
    <DashboardLayout>
      <Head title="Dashboard - JavaScript Cameroun" />

      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 flex flex-col justify-center">
            <dt className="truncate text-sm font-medium text-gray-500 mb-2">Articles</dt>
            <div className="flex gap-2">
              <Badge color="bg-green-600 text-green-800">Publiés ({publishedArticles})</Badge>
              <Badge color="bg-yellow-500 text-yellow-800">Brouillons ({draftArticles})</Badge>
              <Badge color="bg-blue-500 text-blue-800">En attente ({waitingArticles})</Badge>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Total Discussions</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {discussions}
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Total Questions</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {questions}
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
