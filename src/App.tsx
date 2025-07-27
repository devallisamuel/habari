import  { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { BudgetPlatform } from './components/BudgetPlatform';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="space-y-4">
              <MetricCard
                title="Total Spend"
                value="$8,765"
                change="-14.3%"
                changeType="negative"
                subtitle="Previous $10,234"
                icon="💰"
                iconBg="bg-yellow-500"
              />
              
              <MetricCard
                title="Acquisition"
                value="1,023"
                change="+16.7%"
                changeType="positive"
                subtitle="Previous 876"
                icon="✓"
                iconBg="bg-green-500"
              />
            </div>
            
            <div className="space-y-4">
              <MetricCard
                title="Visitor"
                value="14,321"
                change="+5.2%"
                changeType="positive"
                subtitle="Previous 12,543"
                icon="👥"
                iconBg="bg-green-500"
              />
              
              <MetricCard
                title="Revenue"
                value="$18,765"
                change="+3.8%"
                changeType="positive"
                subtitle="Previous $18,432"
                icon="$"
                iconBg="bg-green-500"
              />
            </div>
            
            <div className="h-full">
              <LineChart />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="lg:col-span-2">
              <BarChart />
            </div>
            <BudgetPlatform />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;











