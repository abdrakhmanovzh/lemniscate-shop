import { Footer } from '@/modules/core/components'
import { Navbar } from '@/modules/navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className="flex min-h-[100svh] w-full flex-col gap-10">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
