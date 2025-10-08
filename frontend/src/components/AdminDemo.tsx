import React, { useState } from 'react';
import CollapsibleSidebar from './CollapsibleSidebar';
import SectionHeader from './shared/SectionHeader';
import EmployeeManagement from './EmployeeManagement';

const AdminDemo: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'employees':
        return (
          <div className="flex-1 overflow-hidden">
            {/* Separator line */}
            <div className="h-px bg-gray-200"></div>
            <EmployeeManagement />
          </div>
        );
      case 'assignment':
        return (
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Assignment Management</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-600">Assignment content will be added here</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to Placfy Admin</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Stats</h3>
                  <p className="text-gray-600">Dashboard content goes here</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Collapsible Sidebar */}
      <CollapsibleSidebar onSectionChange={setActiveSection} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Section Header */}
        <SectionHeader 
          title="Admin Dashboard"
          onSearch={(query) => console.log('Search:', query)}
          onAdvancedSearch={() => console.log('Advanced search clicked')}
        />
        
        {/* Content Area */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDemo;
