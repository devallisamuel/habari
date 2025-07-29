import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  name: string;
  icon: string;
  active: boolean;
  hasDropdown?: boolean;
}

const menuItems: MenuItem[] = [
  { name: 'Marketing', icon: '📊', active: true },
  { name: 'Analytics', icon: '📈', active: false },
  { name: 'Business', icon: '💼', active: false },
  { name: 'Project', icon: '📋', active: false },
  { name: 'HRM', icon: '👥', active: false },
  { name: 'Mobile App', icon: '📱', active: false },
  { name: 'Landingpage', icon: '🌐', active: false },
  { name: 'Components', icon: '🧩', active: false, hasDropdown: true },
  { name: 'Pages', icon: '📄', active: false, hasDropdown: true },
  { name: 'Apps', icon: '⚡', active: false, hasDropdown: true },
  { name: 'Content', icon: '📝', active: false, hasDropdown: true },
  { name: 'Users', icon: '👤', active: false, hasDropdown: true },
  { name: 'Documentation', icon: '📚', active: false, hasDropdown: true },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
          w-64 bg-white border-r border-gray-200 h-screen flex flex-col
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm mr-2">
              B
            </div>
            <span className="font-bold text-lg">rutalism</span>
          </div>
        </div>

        <div className="flex-1 py-4 overflow-y-auto">
          <nav role="navigation" aria-label="Sidebar menu">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center justify-between px-4 py-2 mx-2 rounded cursor-pointer text-left ${
                  item.active
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                aria-current={item.active ? 'page' : undefined}
                aria-expanded={item.hasDropdown ? false : undefined}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-sm" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </div>
                {item.hasDropdown && (
                  <span className="text-gray-400 text-xs" aria-hidden="true">▼</span>
                )}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Upgrade to Pro</h3>
            <p className="text-xs text-gray-600 mb-3">
              Are you looking for more features? Check out our Pro version.
            </p>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded text-sm font-medium hover:bg-green-600 flex items-center justify-center">
              <span className="mr-1" aria-hidden="true">➕</span> Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};


