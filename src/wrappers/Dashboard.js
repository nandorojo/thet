// this is a little hack
// no need to know what it means
// but if you ever get an error importing something from elastic,
// this might solve it
import dynamic from 'next/dynamic'
const Sidebar = dynamic(() => import('src/components/Sidebar'), { ssr: false })

export function DashboardWrapper({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}
