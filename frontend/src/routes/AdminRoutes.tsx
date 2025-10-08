import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import AdminDashboard from '../components/AdminDashboard';
import Dashboards from '../components/Dashboards';
import Favourites from '../components/Favourites';
import Sales from '../components/Sales';
import Leads from '../components/Leads';
import Opportunities from '../components/Opportunities';
import Campaigns from '../components/Campaigns';
import Recruit from '../components/Recruit';
import EmployeeManagement from '../components/EmployeeManagement';
import AssignmentManagement from '../components/AssignmentManagement';
import General from '../components/General';
import Reports from '../components/Reports';

const AdminRoutes: React.FC = () => {
  console.log('AdminRoutes component rendered');
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        
        {/* Main Menu Routes */}
        <Route path="dashboards" element={<Dashboards />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="recruit" element={<Recruit />} />
        <Route path="general" element={<General />} />
        <Route path="reports" element={<Reports />} />
        
        {/* Sales Routes */}
        <Route path="sales" element={<Sales />} />
        <Route path="sales/leads" element={<Leads />} />
        <Route path="sales/opportunities" element={<Opportunities />} />
        <Route path="sales/campaigns" element={<Campaigns />} />
        
        {/* HR Routes */}
        <Route path="hr/employees" element={<EmployeeManagement />} />
        <Route path="hr/assignment" element={<AssignmentManagement />} />
        
        {/* Legacy redirects for old routes */}
        <Route path="employees" element={<Navigate to="/admin/hr/employees" replace />} />
        <Route path="assignment" element={<Navigate to="/admin/hr/assignment" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
