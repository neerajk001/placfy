import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Star, 
  Briefcase, 
  Users, 
  UserCheck, 
  Settings, 
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Lock
} from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  subItems?: SubMenuItem[];
  hasGradient?: boolean;
}

interface SubMenuItem {
  id: string;
  label: string;
  icon?: React.ComponentType<any>;
  status?: 'star-filled' | 'star-outline' | 'locked';
}

interface CollapsibleSidebarProps {
  onSectionChange?: (section: string) => void;
}

const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({ onSectionChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>('dashboards');
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'dashboards',
      label: 'Dashboards',
      icon: LayoutDashboard
    },
    {
      id: 'favourites',
      label: 'Favourites',
      icon: Star
    },
    {
      id: 'sales',
      label: 'Sales',
      icon: Briefcase,
      subItems: [
        { id: 'leads', label: 'Leads', status: 'star-filled' },
        { id: 'opportunities', label: 'Opportunities', status: 'star-outline' },
        { id: 'campaigns', label: 'Campaigns', status: 'locked' }
      ]
    },
    {
      id: 'recruit',
      label: 'Recruit',
      icon: UserCheck
    },
    {
      id: 'hr',
      label: 'HR',
      icon: Users,
      subItems: [
        { id: 'employees', label: 'Employees', status: 'star-outline' },
        { id: 'assignment', label: 'Assignment', status: 'star-outline' },
        { id: 'attendance', label: 'Attendance', status: 'star-outline' },
        { id: 'leave', label: 'Leave Management', status: 'star-outline' },
        { id: 'performance', label: 'Performance', status: 'star-outline' },
        { id: 'payroll', label: 'Payroll', status: 'star-outline' }
      ]
    },
    {
      id: 'general',
      label: 'General',
      icon: Settings
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: BarChart3,
      hasGradient: true
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'star-filled':
        return <Star className="h-4 w-4 text-gray-400 fill-current" />;
      case 'star-outline':
        return <Star className="h-4 w-4 text-gray-400" />;
      case 'locked':
        return <Lock className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setHoveredItem(null); // Clear hover state when toggling
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} h-screen bg-gray-900 flex flex-col transition-all duration-300 ease-in-out overflow-hidden relative`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between flex-shrink-0">
        {!isCollapsed && (
          <h1 className="text-white text-lg font-bold">Admin</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto scrollbar-hide" style={{
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
      }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredItem === item.id;
          const isActive = activeItem === item.id;
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <div key={item.id} className="relative">
              {/* Main Menu Item */}
              <div
                className={`
                  flex items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 group relative
                  ${isActive 
                    ? 'bg-orange-600' 
                    : isHovered 
                      ? item.hasGradient 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                        : 'bg-gray-800'
                      : 'hover:bg-gray-800'
                  }
                `}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  console.log('Clicked item:', item.id, 'hasSubItems:', hasSubItems);
                  setActiveItem(item.id);
                  if (hasSubItems) {
                    setOpenSubmenu(openSubmenu === item.id ? null : item.id);
                    console.log('Open submenu:', openSubmenu === item.id ? null : item.id);
                  } else {
                    // Navigate to main menu item if it doesn't have sub-items
                    onSectionChange?.(item.id);
                  }
                }}
              >
                {/* Vertical gray bar on hover */}
                {isHovered && !isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400 rounded-r"></div>
                )}
                <Icon className="h-5 w-5 text-white flex-shrink-0" />
                
                {/* Text Label - Hidden when collapsed */}
                {!isCollapsed && (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white font-medium ml-3 truncate">{item.label}</span>
                    {hasSubItems && (
                      <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${openSubmenu === item.id ? 'rotate-90' : ''}`} />
                    )}
                  </div>
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-white text-black text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </div>

              {/* Sub Menu Items - Only show when not collapsed and clicked */}
              {hasSubItems && openSubmenu === item.id && !isCollapsed && (
                <div className="w-full bg-gray-800 rounded-lg shadow-lg  border-gray-600 z-50 overflow-hidden mt-1">
                  {item.subItems!.map((subItem) => (
                    <div
                      key={subItem.id}
                      className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg whitespace-nowrap"
                      onClick={() => onSectionChange?.(subItem.id)}
                    >
                      <span className="text-gray-300 text-sm truncate">{subItem.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 flex-shrink-0">
        {!isCollapsed ? (
          <div className="flex items-center px-2 py-2 text-gray-400">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div>
              <p className="text-white text-sm">Admin User</p>
              <p className="text-gray-400 text-xs">admin@placfy.com</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
