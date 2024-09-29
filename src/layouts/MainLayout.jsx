import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import SettingIcon from '../components/SettingIcon'
import SettingDrawer from '../components/SettingDrawer'
import { useAppContext } from '../contexts/AppContext'

const MainLayout = () => {

  const { mode } = useAppContext();
  return (
    <>
      <div className={`flex flex-col min-h-screen ${mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
          <Header /> 
          <SettingIcon/>
          <SettingDrawer/>
          <main className="flex-grow container mx-auto">
              <Outlet />  
          </main>
          <Footer />  
      </div>
     

    </>
    
  )
}

export default MainLayout
