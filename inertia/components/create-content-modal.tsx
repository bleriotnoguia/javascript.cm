import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from '@inertiajs/react'
import CreateArticleForm from './articles/create-form'

interface CreateContentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateContentModal({ isOpen, onClose }: CreateContentModalProps) {
  const [isArticleFormOpen, setIsArticleFormOpen] = useState(false)

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="space-y-6">
                    <Link
                      href="/forum/create"
                      className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-emerald-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 13v-2H9a1 1 0 110-2h2V9a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">Créer un sujet</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Vous avez une question? Posez là dans le forum
                        </p>
                      </div>
                    </Link>

                    <Link
                      onClick={(e) => {
                        e.preventDefault()
                        onClose()
                        setIsArticleFormOpen(true)
                      }}
                      href="/articles/create"
                      className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-emerald-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h15a3 3 0 013 3v4.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">Rédiger un article</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Partagez vos découvertes à des milliers de développeurs
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/discussions/create"
                      className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-emerald-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">
                          Démarrer une discussion
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Échangez, débattez sur différentes thématiques et idées.
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none"
                      onClick={onClose}
                    >
                      Annuler
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <CreateArticleForm isOpen={isArticleFormOpen} onClose={() => setIsArticleFormOpen(false)} />
    </>
  )
}
