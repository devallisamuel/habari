import React from 'react';

interface Platform {
  name: string;
  icon: string;
  remaining: string;
  percentage: number;
  color: string;
  iconBg: string;
}

const platforms: Platform[] = [
  { name: 'Facebook', icon: 'f', remaining: '$12,345', percentage: 60, color: 'bg-green-500', iconBg: 'bg-blue-600' },
  { name: 'Twitter', icon: '𝕏', remaining: '$1,543', percentage: 85, color: 'bg-green-500', iconBg: 'bg-black' },
  { name: 'Google', icon: 'G', remaining: '$5,678', percentage: 67, color: 'bg-green-500', iconBg: 'bg-red-500' },
  { name: 'TikTok', icon: '♪', remaining: '$3,456', percentage: 21, color: 'bg-red-500', iconBg: 'bg-black' },
  { name: 'Bing', icon: 'b', remaining: '$2,098', percentage: 35, color: 'bg-orange-500', iconBg: 'bg-blue-500' },
];

export const BudgetPlatform: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6" role="region" aria-labelledby="budget-title">
      <h3 id="budget-title" className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Budget by Platform</h3>
      
      <div className="space-y-4 sm:space-y-6" role="list">
        {platforms.map((platform, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0" role="listitem">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 ${platform.iconBg} rounded flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                <span className="text-white text-sm font-bold">{platform.icon}</span>
              </div>
              <div className="text-sm text-gray-600 min-w-0">
                Remaining: <span className="font-medium text-gray-900">{platform.remaining}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 ml-11 sm:ml-0">
              <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-2 flex-shrink-0" role="progressbar" aria-valuenow={platform.percentage} aria-valuemin={0} aria-valuemax={100} aria-label={`${platform.name} budget usage`}>
                <div
                  className={`h-2 rounded-full ${platform.color}`}
                  style={{ width: `${platform.percentage}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-900 w-8 flex-shrink-0">
                {platform.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





