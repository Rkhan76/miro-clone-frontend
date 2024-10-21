'use client'

import Navbar from './_components/navbar'
import { OrgSidebar } from './_components/org-sidebar'
import { Sidebar } from './_components/sidebar'
import Loading from '../../components/auth/loading'
import useLoading from '../../hooks/useLoading' // Import the custom hook

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isLoading] = useLoading() 

  if (isLoading) {
    return <Loading /> 
  }

  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
