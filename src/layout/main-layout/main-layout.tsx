import { Outlet } from 'react-router-dom'
import { Header } from '../../components/secure/header/header'

const MainLayout = () => {
   return (
      <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
         <Header></Header>
         <main className="mx-auto max-w-4xl sm:max-w-7xl">{<Outlet />}</main>
      </div>
   )
}

export default MainLayout
