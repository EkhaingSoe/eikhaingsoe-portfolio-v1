import React from 'react'
import { useAppContext } from '../contexts/AppContext'

const SettingIcon = () => {
    const { toggleSettingDrawer } = useAppContext(); 

  return (
    <button onClick={toggleSettingDrawer} className="absolute top-[50%] right-3 bg-[rgba(0,0,0,0.5)] text-white w-10 h-10 text-2xl rounded-md">
        <i className="ri-settings-3-line"></i>
    </button>
  
  )
}

export default SettingIcon
