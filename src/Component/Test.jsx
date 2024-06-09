import React, { useState } from 'react';

const HoverInfoInput = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <input
          type="text"
          placeholder="Hover to see info"
          className="px-4 py-2 border border-gray-300 rounded-lg outline-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {isHovered && (
          <div className="absolute left-1 ml-2 p-4 w-64 bg-white border border-gray-300 rounded-lg shadow-lg">
            <p className="text-sm text-gray-700">
              Format: Enter text in the following format: YYYY-MM-DD
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverInfoInput;
