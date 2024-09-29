// src/contexts/AppContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('#F4194A'); // Default color
  const [mode, setMode] = useState("light");
  const [settingToggle,setSettingToggle] = useState(false);
  const toggleMode = (selectedMode) => {
    setMode(selectedMode);
  };

  const toggleSettingDrawer = () => {
    setSettingToggle(prev => !prev); // Toggle the visibility of the settings drawer
  };

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark'); // Add 'dark' class to body
    } else {
      document.body.classList.remove('dark'); // Remove 'dark' class from body
    }
  }, [mode]);

  return (
    <AppContext.Provider value={{ selectedColor, setSelectedColor, mode, toggleMode,settingToggle, toggleSettingDrawer  }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);
export { AppProvider, AppContext, useAppContext };
