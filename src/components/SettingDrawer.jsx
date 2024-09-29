import React from 'react'
import ColorSelector from './ColorSelector'
import DarkMode from './DarkMode'
import { useAppContext } from '../contexts/AppContext'

const SettingDrawer = () => {

    const { settingToggle, toggleSettingDrawer } = useAppContext(); 

  return (
    <div className={`h-screen w-80 z-50 bg-white dark:bg-gray-800 fixed right-0 shadow-lg overflow-scroll duration-200 transform ${settingToggle ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 px-5`}>
      <div className='flex items-center justify-between  py-3 border-b' >
        <p className='font-bold text-lg text-black dark:text-white' >Tools</p>
        <button onClick={toggleSettingDrawer} className='text-red-600' >
            <i className="ri-close-fill"></i>
        </button>
      </div> 
      <div className='py-5' >
        <ColorSelector/> 
      </div>
      <div className='py-5' >
        <DarkMode/> 
      </div>
    </div>
  )
}

export default SettingDrawer
