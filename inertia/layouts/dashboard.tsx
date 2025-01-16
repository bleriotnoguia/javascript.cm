import { PropsWithChildren } from 'react'
import Footer from '../components/footer'
import Navbar from '~/components/navbar'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto">
        <div className="py-6">
          <div className="px-4 sm:px-6 md:px-0">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
