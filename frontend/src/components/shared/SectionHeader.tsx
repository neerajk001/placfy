import React from 'react';
import { Search } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  onSearch?: (query: string) => void;
  onAdvancedSearch?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  onSearch, 
  onAdvancedSearch 
}) => {
  return (
    <div className="w-full bg-white">
      {/* Top yellow bar */}
      {/* <div className="h-1 bg-yellow-300 w-full"></div> */}
      
      {/* Main header content */}
      <div className="p-4 bg-white">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Placfy
              </span>
            </div>
          </div>

          {/* Center - Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 pr-4 bg-gray-200 shadow-2xs rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                onChange={(e) => onSearch?.(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Right side - Advanced Search button */}
          <button
            onClick={onAdvancedSearch}
            className="px-4 py-2 bg-black text-center text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Advanced Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
