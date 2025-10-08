import React from 'react';
import CollapsibleSidebar from './CollapsibleSidebar';

const AdminDemo: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Collapsible Sidebar */}
      <CollapsibleSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
          <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
        </header>
        
        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Content will be added here */}
        </main>
      </div>
    </div>
  );
};

export default AdminDemo;
