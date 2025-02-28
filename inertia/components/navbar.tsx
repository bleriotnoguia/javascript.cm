import { Link, usePage } from '@inertiajs/react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CreateContentModal from './create-content-modal'

interface User {
  name: string
  email: string
  username: string
  avatar: string | null
}

interface PageProps {
  auth: {
    user: User | null
  }
  [key: string]: any
}

export default function Navbar() {
  const { auth } = usePage<PageProps>().props
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

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
          <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-4">
            {auth && auth.user && auth.user.username ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(true)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Create new content</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>

                <Menu as="div" className="relative">
                  <MenuButton className="flex items-center space-x-3 text-sm focus:outline-none">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={auth.user.avatar || `https://ui-avatars.com/api/?name=${auth.user.name}`}
                      alt={auth.user.name}
                    />
                    <span className="text-gray-700">{auth.user.name}</span>
                  </MenuButton>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {/* Tableau de bord */}
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            href="/dashboard"
                            className={`${focus ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Dashboard
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            href={`/@${auth.user?.username}`}
                            className={`${
                              focus ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Profile
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            href="/settings"
                            className={`${
                              focus ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Settings
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className={`${
                              focus ? 'bg-gray-100' : ''
                            } block w-full px-4 py-2 text-left text-sm text-gray-700`}
                          >
                            Logout
                          </Link>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </>
            ) : (
              <div className="space-x-4">
                <Link
                  href="/login"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Se connecter
                </Link>
                <Link
                  href="/register"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Créer un compte
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <CreateContentModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </nav>
  )
}
