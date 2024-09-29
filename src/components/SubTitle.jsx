import React, { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext';

const SubTitle = ({sub1,sub2}) => {
  const { selectedColor } = useAppContext();

  useEffect(() => {
    document.documentElement.style.setProperty('--hover-color', selectedColor);
  }, [selectedColor]);
  return (
    <div>
        <h3 className=' text-4xl text-center font-bold mb-2' >{sub1} <span className='text-[var(--hover-color)]'  >{sub2}</span></h3>
        <div className='flex items-center justify-center relative' >
            <div className='w-[2px] h-28 bg-black' ></div>
            <div className='w-5 h-5 bg-black rounded-full absolute border-white animate-ball-move border-2' ></div>
        </div>
    </div>
  )
}

export default SubTitle
