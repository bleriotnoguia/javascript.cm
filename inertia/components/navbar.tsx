import { Link, usePage } from '@inertiajs/react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Fragment } from 'react'

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
            {auth && auth.user && auth.user.username ? (
              <Menu as="div" className="relative ml-3">
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
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
