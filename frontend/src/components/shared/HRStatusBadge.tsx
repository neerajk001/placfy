import React from 'react';

interface HRStatusBadgeProps {
  status: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const HRStatusBadge: React.FC<HRStatusBadgeProps> = ({ 
  status, 
  variant = 'default', 
  size = 'md' 
}) => {
  const getStatusConfig = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    
    switch (normalizedStatus) {
      case 'active':
      case 'present':
      case 'approved':
      case 'completed':
      case 'paid':
        return {
          color: 'bg-green-100 text-green-800',
          outlineColor: 'border-green-200 text-green-800'
        };
      case 'inactive':
      case 'absent':
      case 'rejected':
      case 'failed':
        return {
          color: 'bg-red-100 text-red-800',
          outlineColor: 'border-red-200 text-red-800'
        };
      case 'pending':
      case 'in-progress':
        return {
          color: 'bg-yellow-100 text-yellow-800',
          outlineColor: 'border-yellow-200 text-yellow-800'
        };
      case 'late':
        return {
          color: 'bg-orange-100 text-orange-800',
          outlineColor: 'border-orange-200 text-orange-800'
        };
      case 'draft':
      case 'cancelled':
        return {
          color: 'bg-gray-100 text-gray-800',
          outlineColor: 'border-gray-200 text-gray-800'
        };
      default:
        return {
          color: 'bg-blue-100 text-blue-800',
          outlineColor: 'border-blue-200 text-blue-800'
        };
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'lg':
        return 'px-3 py-2 text-sm';
      default:
        return 'px-2 py-1 text-xs';
    }
  };

  const statusConfig = getStatusConfig(status);
  const sizeClasses = getSizeClasses(size);
  
  const baseClasses = `inline-flex items-center font-semibold rounded-full ${sizeClasses}`;
  const colorClasses = variant === 'outline' 
    ? `border ${statusConfig.outlineColor}`
    : statusConfig.color;

  return (
    <span className={`${baseClasses} ${colorClasses}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default HRStatusBadge;
