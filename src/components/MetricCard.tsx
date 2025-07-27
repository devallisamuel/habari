import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  subtitle: string;
  icon: string;
  iconBg: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType,
  subtitle,
  icon,
  iconBg
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className={`w-8 h-8 ${iconBg} rounded flex items-center justify-center`}>
          <span className="text-white text-sm">{icon}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Progress</div>
        <div className={`text-sm font-medium ${
          changeType === 'positive' ? 'text-green-600' : 'text-red-600'
        }`}>
          {change}
        </div>
      </div>
    </div>
  );
};
