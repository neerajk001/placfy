import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Eye, EyeOff } from 'lucide-react';

interface SignInFormProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onClose, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    businessEmail: 'info@onxt.in',
    password: '..........'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission here
      console.log('Sign in submitted:', formData);
      // You can add API call here
      alert('Sign in successful!');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
          <p className="text-gray-600 text-sm">
            Get started in seconds. Don't have an account?{' '}
            <button 
              onClick={onSwitchToSignUp}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Business Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Enter your Business Email*
            </label>
            <input
              type="email"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 bg-blue-50 ${
                errors.businessEmail ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.businessEmail && (
              <p className="text-red-500 text-xs mt-1">{errors.businessEmail}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Enter your password*
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 bg-blue-50 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Sign In
          </Button>

          {/* Or Separator */}
          <div className="flex items-center justify-center my-4">
            <span className="text-gray-500 text-sm">or</span>
          </div>

          {/* Additional sign-in options can be added here */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Additional sign-in options would go here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
