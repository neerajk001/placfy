import React, { useState } from 'react';
import { Calendar, Plus, CheckCircle, XCircle, Clock, User, FileText } from 'lucide-react';

const LeaveManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'calendar' | 'balances'>('requests');
  const [showNewRequest, setShowNewRequest] = useState(false);

  // Mock data
  const leaveRequests = [
    {
      id: 1,
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      leaveType: 'Annual Leave',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
      days: 5,
      reason: 'Family vacation',
      status: 'pending',
      appliedDate: '2024-01-10',
      manager: 'Sarah Wilson'
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      employeeId: 'EMP002',
      leaveType: 'Sick Leave',
      startDate: '2024-01-18',
      endDate: '2024-01-18',
      days: 1,
      reason: 'Medical appointment',
      status: 'approved',
      appliedDate: '2024-01-17',
      manager: 'Mike Johnson'
    },
    {
      id: 3,
      employeeName: 'Mike Johnson',
      employeeId: 'EMP003',
      leaveType: 'Personal Leave',
      startDate: '2024-01-22',
      endDate: '2024-01-24',
      days: 3,
      reason: 'Personal matters',
      status: 'rejected',
      appliedDate: '2024-01-15',
      manager: 'Sarah Wilson'
    }
  ];

  const leaveBalances = [
    {
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      annualLeave: { total: 25, used: 5, remaining: 20 },
      sickLeave: { total: 12, used: 2, remaining: 10 },
      personalLeave: { total: 5, used: 1, remaining: 4 },
      emergencyLeave: { total: 3, used: 0, remaining: 3 }
    },
    {
      employeeName: 'Jane Smith',
      employeeId: 'EMP002',
      annualLeave: { total: 25, used: 8, remaining: 17 },
      sickLeave: { total: 12, used: 3, remaining: 9 },
      personalLeave: { total: 5, used: 0, remaining: 5 },
      emergencyLeave: { total: 3, used: 1, remaining: 2 }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    totalRequests: 45,
    pendingRequests: 8,
    approvedRequests: 32,
    rejectedRequests: 5
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Leave Management</h2>
          <button 
            onClick={() => setShowNewRequest(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>New Leave Request</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRequests}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingRequests}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">{stats.approvedRequests}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-gray-900">{stats.rejectedRequests}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('requests')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'requests'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Leave Requests
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'calendar'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Calendar View
              </button>
              <button
                onClick={() => setActiveTab('balances')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'balances'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Leave Balances
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'requests' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Leave Requests</h3>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search employees..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Employee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Leave Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Days
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Manager
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {leaveRequests.map((request) => (
                        <tr key={request.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{request.employeeName}</div>
                              <div className="text-sm text-gray-500">{request.employeeId}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {request.leaveType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {request.startDate} to {request.endDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {request.days} days
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(request.status)}
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {request.manager}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {request.status === 'pending' && (
                              <>
                                <button className="text-green-600 hover:text-green-900 mr-3">Approve</button>
                                <button className="text-red-600 hover:text-red-900 mr-3">Reject</button>
                              </>
                            )}
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave Calendar</h3>
                <div className="bg-gray-100 p-8 rounded-lg text-center">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Calendar view will be implemented here</p>
                  <p className="text-sm text-gray-500 mt-2">This will show approved leaves on a calendar interface</p>
                </div>
              </div>
            )}

            {activeTab === 'balances' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave Balances</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Employee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Annual Leave
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sick Leave
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Personal Leave
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Emergency Leave
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {leaveBalances.map((balance, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{balance.employeeName}</div>
                              <div className="text-sm text-gray-500">{balance.employeeId}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {balance.annualLeave.remaining}/{balance.annualLeave.total}
                            </div>
                            <div className="text-xs text-gray-500">Used: {balance.annualLeave.used}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {balance.sickLeave.remaining}/{balance.sickLeave.total}
                            </div>
                            <div className="text-xs text-gray-500">Used: {balance.sickLeave.used}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {balance.personalLeave.remaining}/{balance.personalLeave.total}
                            </div>
                            <div className="text-xs text-gray-500">Used: {balance.personalLeave.used}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {balance.emergencyLeave.remaining}/{balance.emergencyLeave.total}
                            </div>
                            <div className="text-xs text-gray-500">Used: {balance.emergencyLeave.used}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
