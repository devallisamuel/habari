import React from "react";

const data = [
  { label: 'March 1', value: 120 },
  { label: 'March 2', value: 100 },
  { label: 'March 3', value: 80 },
  { label: 'March 4', value: 200 },
  { label: 'March 5', value: 150 },
  { label: 'March 6', value: 110 },
  { label: 'March 7', value: 240 },
];

export const BarChart: React.FC = () => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Traffic Source
      </h3>

      <div className="relative px-4 pb-6 flex-1">
        <div className="flex items-end justify-between h-48 mb-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 mx-1">
              <div
                className="w-full bg-gradient-to-t from-green-400 to-green-200 rounded-t"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  minHeight: "20px",
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          {data.map((item, index) => (
            <span key={index} className="flex-1 text-center">
              {item.label}
            </span>
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-48 flex flex-col justify-between text-xs text-gray-500">
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};



