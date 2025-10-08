import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const EmployeeManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex h-full bg-gray-50">
      {/* Separator line */}
      <div className="h-px bg-gray-200"></div>
      
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-300 p-4">
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
            All Employee
          </button>
          {/* Additional sidebar items can bimage.pne added here */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Top Section - Search and Add Employee */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            {/* Add Employee Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>+ Add Employee</span>
            </button>
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          {/* Table Header */}
          <div className="bg-gray-50 rounded-t-lg p-4 border-b border-gray-200">
            <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-gray-700">
              <div>Employee ID</div>
              <div>Employee</div>
              <div>Employee Name</div>
              <div>Employee Type</div>
              <div>Department</div>
              <div>Reporting</div>
              <div>Email</div>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="p-4">
            <div className="text-center text-gray-500 py-8">
              No employees found. Click "+ Add Employee" to get started.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
