import React, { useState } from 'react';
import { Star, Target, TrendingUp, Users, Award, FileText, Calendar, CheckCircle } from 'lucide-react';

const PerformanceReviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'goals' | 'analytics'>('reviews');
  const [showNewReview, setShowNewReview] = useState(false);

  // Mock data
  const performanceReviews = [
    {
      id: 1,
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      department: 'Engineering',
      reviewPeriod: 'Q4 2023',
      overallRating: 4.2,
      manager: 'Sarah Wilson',
      status: 'completed',
      lastReview: '2024-01-15',
      nextReview: '2024-04-15',
      goals: [
        { name: 'Complete project delivery', status: 'completed', rating: 4 },
        { name: 'Improve team collaboration', status: 'completed', rating: 4.5 },
        { name: 'Learn new technologies', status: 'in-progress', rating: 3.5 }
      ]
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      employeeId: 'EMP002',
      department: 'Marketing',
      reviewPeriod: 'Q4 2023',
      overallRating: 3.8,
      manager: 'Mike Johnson',
      status: 'pending',
      lastReview: '2024-01-10',
      nextReview: '2024-04-10',
      goals: [
        { name: 'Increase campaign ROI', status: 'completed', rating: 4 },
        { name: 'Lead generation target', status: 'in-progress', rating: 3.5 },
        { name: 'Brand awareness metrics', status: 'pending', rating: 0 }
      ]
    },
    {
      id: 3,
      employeeName: 'Mike Johnson',
      employeeId: 'EMP003',
      department: 'Sales',
      reviewPeriod: 'Q4 2023',
      overallRating: 4.5,
      manager: 'Sarah Wilson',
      status: 'completed',
      lastReview: '2024-01-12',
      nextReview: '2024-04-12',
      goals: [
        { name: 'Sales target achievement', status: 'completed', rating: 5 },
        { name: 'Client relationship building', status: 'completed', rating: 4.5 },
        { name: 'Team mentoring', status: 'completed', rating: 4 }
      ]
    }
  ];

  const goals = [
    {
      id: 1,
      employeeName: 'John Doe',
      goal: 'Complete project delivery',
      category: 'Technical',
      targetDate: '2024-03-31',
      progress: 100,
      status: 'completed',
      priority: 'high'
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      goal: 'Lead generation target',
      category: 'Marketing',
      targetDate: '2024-02-28',
      progress: 75,
      status: 'in-progress',
      priority: 'high'
    },
    {
      id: 3,
      employeeName: 'Mike Johnson',
      goal: 'Sales target achievement',
      category: 'Sales',
      targetDate: '2024-01-31',
      progress: 100,
      status: 'completed',
      priority: 'high'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const stats = {
    totalReviews: 45,
    completedReviews: 38,
    pendingReviews: 7,
    averageRating: 4.1,
    totalGoals: 120,
    completedGoals: 85,
    inProgressGoals: 25,
    pendingGoals: 10
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Performance Reviews</h2>
          <button 
            onClick={() => setShowNewReview(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <FileText className="h-4 w-4" />
            <span>New Review</span>
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
                <p className="text-sm font-medium text-gray-600">Total Reviews</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalReviews}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completedReviews}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Goals</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalGoals}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Performance Reviews
              </button>
              <button
                onClick={() => setActiveTab('goals')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'goals'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Goals Tracking
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Performance Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">All Status</option>
                      <option value="completed">Completed</option>
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search employees..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {performanceReviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900">{review.employeeName}</h4>
                              <p className="text-sm text-gray-500">{review.employeeId} • {review.department}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              {renderStars(review.overallRating)}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600">Review Period</p>
                              <p className="font-medium">{review.reviewPeriod}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Manager</p>
                              <p className="font-medium">{review.manager}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Status</p>
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(review.status)}`}>
                                {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                              </span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">Goals & Objectives</h5>
                            <div className="space-y-2">
                              {review.goals.map((goal, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                  <div className="flex items-center space-x-3">
                                    <span className="text-sm text-gray-900">{goal.name}</span>
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(goal.status)}`}>
                                      {goal.status}
                                    </span>
                                  </div>
                                  {goal.rating > 0 && (
                                    <div className="flex items-center">
                                      {renderStars(goal.rating)}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2 ml-6">
                          <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">View Details</button>
                          <button className="text-green-600 hover:text-green-900 text-sm font-medium">Edit</button>
                          <button className="text-red-600 hover:text-red-900 text-sm font-medium">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'goals' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Goals Tracking</h3>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span>New Goal</span>
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
                          Goal
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Progress
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Target Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Priority
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {goals.map((goal) => (
                        <tr key={goal.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{goal.employeeName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{goal.goal}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{goal.category}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${goal.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">{goal.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {goal.targetDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(goal.status)}`}>
                              {goal.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(goal.priority)}`}>
                              {goal.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Performance Trends Chart</p>
                    <p className="text-sm text-gray-500 mt-2">Visual representation of performance over time</p>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Department Comparison</p>
                    <p className="text-sm text-gray-500 mt-2">Compare performance across departments</p>
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

export default PerformanceReviews;
