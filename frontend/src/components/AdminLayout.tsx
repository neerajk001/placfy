import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import CollapsibleSidebar from './CollapsibleSidebar';
import SectionHeader from './shared/SectionHeader';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log('AdminLayout rendered, current location:', location.pathname);

  const handleSectionChange = (section: string) => {
    switch (section) {
      // Main menu items
      case 'dashboards':
        navigate('/admin/dashboards');
        break;
      case 'favourites':
        navigate('/admin/favourites');
        break;
      case 'recruit':
        navigate('/admin/recruit');
        break;
      case 'general':
        navigate('/admin/general');
        break;
      case 'reports':
        navigate('/admin/reports');
        break;
      
      // Sales submenu items
      case 'leads':
        navigate('/admin/sales/leads');
        break;
      case 'opportunities':
        navigate('/admin/sales/opportunities');
        break;
      case 'campaigns':
        navigate('/admin/sales/campaigns');
        break;
      
      // HR submenu items
      case 'employees':
        navigate('/admin/hr/employees');
        break;
      case 'assignment':
        navigate('/admin/hr/assignment');
        break;
      case 'attendance':
        navigate('/admin/hr/attendance');
        break;
      case 'leave':
        navigate('/admin/hr/leave');
        break;
      case 'performance':
        navigate('/admin/hr/performance');
        break;
      case 'payroll':
        navigate('/admin/hr/payroll');
        break;
      
      default:
        navigate('/admin');
        break;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Collapsible Sidebar */}
      <CollapsibleSidebar onSectionChange={handleSectionChange} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Section Header */}
        <SectionHeader 
          title="Admin Dashboard"
          onSearch={(query) => console.log('Search:', query)}
          onAdvancedSearch={() => console.log('Advanced search clicked')}
        />
        
        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
