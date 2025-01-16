import { Link } from '@inertiajs/react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                JavaScript.cm
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden space-x-8 sm:ml-10 sm:flex">
              <Link
                href="/forum"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Forum
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Articles
              </Link>
              <Link
                href="/discussions"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Discussions
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900">
                Se connecter
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Créer un compte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
