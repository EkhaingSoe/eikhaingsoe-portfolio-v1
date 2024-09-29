// src/components/ColorSelector.jsx
import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const ColorSelector = () => {
  const { setSelectedColor,selectedColor } = useAppContext();

  const colors = {
    red: '#F4194A',
    purple: '#7B18D5',
    blue: '#5F6AF5',
    orange: '#F5885F',
    teal: '#33DBE2',
    navy: '#4050B5',
    danger: '#F44336',
    pink: '#ED578A',
    gray: '#607D8B',
    green: '#5DAF90',
  };

  return (
    <div>
      <h3 className='mb-3  font-medium text-sm' >Select Color</h3>
      <div className="grid grid-cols-5 gap-3">
        {Object.entries(colors).map(([name, hex]) => (
          <div
            key={name}
            onClick={() => setSelectedColor(hex)}
            className="w-9 h-9 rounded-md cursor-pointer flex items-center justify-center text-white text-lg"
            style={{ backgroundColor: hex }}
          >
            {
              selectedColor===hex && (
                <div >
                  <i className="ri-check-double-fill"></i>
                </div>
              )
            }
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
