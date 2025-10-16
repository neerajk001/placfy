import React, { useState } from 'react';
import { DollarSign, FileText, Download, Eye, Edit, Calendar, TrendingUp, Users } from 'lucide-react';

const PayrollManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'payslips' | 'salaries' | 'reports'>('payslips');
  const [selectedPeriod, setSelectedPeriod] = useState('2024-01');

  // Mock data
  const payslips = [
    {
      id: 1,
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      department: 'Engineering',
      basicSalary: 8000,
      allowances: 2000,
      overtime: 500,
      bonuses: 1000,
      grossSalary: 11500,
      deductions: 1500,
      netSalary: 10000,
      payPeriod: '2024-01',
      status: 'paid',
      payDate: '2024-01-31'
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      employeeId: 'EMP002',
      department: 'Marketing',
      basicSalary: 7000,
      allowances: 1500,
      overtime: 300,
      bonuses: 800,
      grossSalary: 9600,
      deductions: 1200,
      netSalary: 8400,
      payPeriod: '2024-01',
      status: 'paid',
      payDate: '2024-01-31'
    },
    {
      id: 3,
      employeeName: 'Mike Johnson',
      employeeId: 'EMP003',
      department: 'Sales',
      basicSalary: 7500,
      allowances: 1800,
      overtime: 400,
      bonuses: 1200,
      grossSalary: 10900,
      deductions: 1400,
      netSalary: 9500,
      payPeriod: '2024-01',
      status: 'pending',
      payDate: '2024-01-31'
    }
  ];

  const salaryDetails = [
    {
      id: 1,
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      department: 'Engineering',
      position: 'Senior Developer',
      basicSalary: 8000,
      allowances: 2000,
      totalCompensation: 10000,
      lastReview: '2024-01-15',
      nextReview: '2024-07-15',
      employmentType: 'Full-time',
      startDate: '2022-01-15'
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      employeeId: 'EMP002',
      department: 'Marketing',
      position: 'Marketing Manager',
      basicSalary: 7000,
      allowances: 1500,
      totalCompensation: 8500,
      lastReview: '2024-01-10',
      nextReview: '2024-07-10',
      employmentType: 'Full-time',
      startDate: '2021-06-01'
    },
    {
      id: 3,
      employeeName: 'Mike Johnson',
      employeeId: 'EMP003',
      department: 'Sales',
      position: 'Sales Executive',
      basicSalary: 7500,
      allowances: 1800,
      totalCompensation: 9300,
      lastReview: '2024-01-12',
      nextReview: '2024-07-12',
      employmentType: 'Full-time',
      startDate: '2022-03-01'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    totalPayroll: 27900,
    totalEmployees: 150,
    paidEmployees: 147,
    pendingPayments: 3,
    averageSalary: 8500,
    totalDeductions: 4100,
    totalBonuses: 3000,
    totalOvertime: 1200
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Payroll Management</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Process Payroll</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Payroll</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalPayroll.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalEmployees}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Paid</p>
                <p className="text-2xl font-bold text-gray-900">{stats.paidEmployees}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingPayments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Salary</p>
                <p className="text-xl font-bold text-gray-900">${stats.averageSalary.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Deductions</p>
                <p className="text-xl font-bold text-gray-900">${stats.totalDeductions.toLocaleString()}</p>
              </div>
              <FileText className="h-8 w-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bonuses</p>
                <p className="text-xl font-bold text-gray-900">${stats.totalBonuses.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('payslips')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'payslips'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Payslips
              </button>
              <button
                onClick={() => setActiveTab('salaries')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'salaries'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Salary Details
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reports'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reports
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'payslips' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Payslips</h3>
                  <div className="flex items-center space-x-2">
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="2024-01">January 2024</option>
                      <option value="2023-12">December 2023</option>
                      <option value="2023-11">November 2023</option>
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
                          Basic Salary
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Allowances
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Overtime
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bonuses
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Gross Salary
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Deductions
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Net Salary
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {payslips.map((payslip) => (
                        <tr key={payslip.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{payslip.employeeName}</div>
                              <div className="text-sm text-gray-500">{payslip.employeeId} • {payslip.department}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${payslip.basicSalary.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${payslip.allowances.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${payslip.overtime.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${payslip.bonuses.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${payslip.grossSalary.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                            -${payslip.deductions.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                            ${payslip.netSalary.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(payslip.status)}`}>
                              {payslip.status.charAt(0).toUpperCase() + payslip.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3 flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </button>
                            <button className="text-green-600 hover:text-green-900 mr-3 flex items-center">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 flex items-center">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'salaries' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Salary Details</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span>Update Salaries</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Employee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Position
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Basic Salary
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Allowances
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Compensation
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Employment Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {salaryDetails.map((salary) => (
                        <tr key={salary.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{salary.employeeName}</div>
                              <div className="text-sm text-gray-500">{salary.employeeId}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {salary.position}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {salary.department}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${salary.basicSalary.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${salary.allowances.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                            ${salary.totalCompensation.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {salary.employmentType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                            <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                            <button className="text-gray-600 hover:text-gray-900">History</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payroll Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Payroll Trends</p>
                    <p className="text-sm text-gray-500 mt-2">Monthly payroll analysis and trends</p>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Tax Reports</p>
                    <p className="text-sm text-gray-500 mt-2">Tax deductions and compliance reports</p>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Cost Analysis</p>
                    <p className="text-sm text-gray-500 mt-2">Department-wise cost breakdown</p>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Employee Reports</p>
                    <p className="text-sm text-gray-500 mt-2">Individual employee payroll history</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;
