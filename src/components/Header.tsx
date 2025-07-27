import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm w-48 sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search"
            />
            <div className="absolute right-3 top-2.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm">🌙</span>
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm">🔔</span>
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold relative">
              1
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold relative">
              1
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm">👤</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 space-y-2 sm:space-y-0 flex-col sm:flex-row">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Marketing</h1>
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded hover:bg-gray-50">
            7 Days
          </button>
          <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded hover:bg-gray-50">
            14 Days
          </button>
          <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gray-900 text-white rounded hover:bg-gray-800">
            1 Month
          </button>
        </div>
      </div>
    </div>
  );
};







