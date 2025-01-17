import { Link } from '@inertiajs/react'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-lg font-bold text-gray-900">
              JavaScript.cm
            </Link>
            <p className="text-gray-500 text-base">
              La plus grande communauté de développeurs JavaScript au Cameroun.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Ressources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                      A propos
                    </Link>
                  </li>
                  <li>
                    <Link href="/sponsors" className="text-base text-gray-500 hover:text-gray-900">
                      Soutien
                    </Link>
                  </li>
                  <li>
                    <Link href="/snippets" className="text-base text-gray-500 hover:text-gray-900">
                      Snippets
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Légal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                      Conditions d'utilisation
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                      Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="/conduct" className="text-base text-gray-500 hover:text-gray-900">
                      Code de conduite
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} JavaScript Cameroun. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
