import React from "react";
import light from "../assets/images/light.png";
import dark from "../assets/images/dark.png";
import { useAppContext } from "../contexts/AppContext";

const DarkMode = () => {
  const { mode, toggleMode,selectedColor } = useAppContext();
  const modes = [
    { name: "Light", img: light, value: "light" },
    { name: "Dark", img: dark, value: "dark" },
  ];
  
  return (
    <div>
      <h3 className="mb-3 font-medium text-sm dark:text-white">Dark Modes</h3>
      <div className="grid grid-cols-2 gap-3">
        {modes.map(({ name, img, value }) => (
          <div key={value} onClick={() => toggleMode(value)}>
             <div 
              className={`border p-1 rounded-md relative`} 
              style={{
                borderColor: mode === value ? selectedColor : "transparent", // Use selectedColor for the selected mode
              }}
            >
              <img src={img} alt={name} className="rounded-md" />
              {mode === value && (
                <div className={`absolute top-3 right-3 w-7 h-7 rounded-md flex items-center justify-center ${value === "light" ? "bg-[rgba(0,0,0,0.8)] text-white" : "bg-[rgba(255,255,255,0.9)] text-black"}`}>
                  <i className="ri-check-double-fill"></i>
                </div>
              )}
            </div>
            <p className="text-sm text-center mt-2 dark:text-gray-300">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkMode;
