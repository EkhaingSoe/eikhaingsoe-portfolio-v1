// src/components/Header.jsx
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';

const Header = () => {
  const { selectedColor } = useContext(AppContext);
  useEffect(() => {
    document.documentElement.style.setProperty('--hover-color', selectedColor);
  }, [selectedColor]);

  return (
    <header className="p-4">
      <nav className="container mx-auto flex justify-between items-center bg-[#F8F6Fb] dark:bg-gray-700 border border-black dark:border-white dark:border-opacity-50 rounded-2xl px-4 py-4">
        <div className="text-xl font-bold text-black dark:text-white">
          Ei <span style={{ color: selectedColor }}>Khaing</span>
        </div>
        <ul className="flex space-x-6">
          <li><a href="/"  className="hover:text-[var(--hover-color)] dark:hover:text-[var(--hover-color)] dark:text-white dark:text-opacity-50 font-medium">Home</a></li>
          <li><a href="/about"  className="hover:text-[var(--hover-color)] dark:hover:text-[var(--hover-color)] dark:text-white dark:text-opacity-50 font-medium">About</a></li>
          <li><a href="/project"  className="hover:text-[var(--hover-color)] dark:hover:text-[var(--hover-color)] dark:text-white dark:text-opacity-50 font-medium">Project</a></li>
          <li><a href="/resume"  className="hover:text-[var(--hover-color)] dark:hover:text-[var(--hover-color)] dark:text-white dark:text-opacity-50 font-medium">Resume</a></li>
        </ul>
        <button className="navbar-toggler min-[992px]:hidden w-[40px] h-[40px] flex items-center justify-center rounded-[50%] text-[#111a24] border-[1px] border-solid border-[#111a24] text-[1.25rem] bg-transparent" type="button" title="navbar-toggler">
           <i className="ri-menu-2-line"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
