import React from 'react';

export const LineChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Acquisition vs Cost</h3>
      
      <div className="relative flex-1 min-h-0 pl-8 pr-4 pb-8">
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5].map(i => (
            <line
              key={i}
              x1="0"
              y1={i * 40}
              x2="400"
              y2={i * 40}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}
          
          {/* Blue line (Acquisition) */}
          <path
            d="M 0 120 Q 50 100 100 80 Q 150 60 200 70 Q 250 80 300 50 Q 350 30 400 40"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          
          {/* Green line (Cost) */}
          <path
            d="M 0 140 Q 50 130 100 120 Q 150 110 200 100 Q 250 90 300 85 Q 350 80 400 75"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
          />
          
          {/* Fill areas */}
          <path
            d="M 0 120 Q 50 100 100 80 Q 150 60 200 70 Q 250 80 300 50 Q 350 30 400 40 L 400 200 L 0 200 Z"
            fill="url(#blueGradient)"
            opacity="0.1"
          />
          
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 text-right pr-2">
          <span>800</span>
          <span>600</span>
          <span>400</span>
          <span>200</span>
          <span>0</span>
        </div>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-8 right-4 flex justify-between text-xs text-gray-500">
          <span className="hidden sm:inline">March 1</span>
          <span className="sm:hidden">M1</span>
          <span className="hidden sm:inline">March 3</span>
          <span className="sm:hidden">M3</span>
          <span className="hidden sm:inline">March 5</span>
          <span className="sm:hidden">M5</span>
          <span className="hidden sm:inline">March 7</span>
          <span className="sm:hidden">M7</span>
        </div>
      </div>
    </div>
  );
};



