export default function OpenSourceSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Open source</h2>
          <p className="mt-4 text-lg text-gray-600">
            La communauté développe aussi des packages open source pour contribuer à l'ecosystème de
            JavaScript.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <a
            href="https://github.com/your-org/package-1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-gray-900">javascript-subscriptions</h3>
              <p className="text-sm text-gray-500 mt-1">
                JavaScript Subscriptions is a flexible plans and subscription management system for
                AdonisJS.
              </p>
            </div>
          </a>

          <a
            href="https://github.com/your-org/package-2"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-gray-900">react-admin-panel</h3>
              <p className="text-sm text-gray-500 mt-1">
                A React Admin boilerplate to quickly scaffold any large scale enterprise
                application.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
