import React from 'react';

// @ts-ignore
const LocationCard = ({ title,icon, locationText }) => {
  return (
    <div className="flex items-center px-4 py-3 rounded-full shadow-md bg-white">
      {/* Left Icon */}
      <div className="mr-2">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col ml-2">
        <span className="text-gray-500 text-sm">{title||'Location'}</span>
        <span className="text-black font-semibold text-xl">{locationText}</span>
      </div>
    </div>
  );
};

export default LocationCard;
