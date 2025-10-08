// src/components/Input.tsx
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Utility function to merge Tailwind classes
const cn = (...inputs: any[]) => {
  return twMerge(clsx(inputs));
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  colorVariant?: 'blue' | 'green' | 'red' | 'purple' | 'gray';
  inputSize?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      variant = 'outlined',
      colorVariant = 'blue',
      inputSize = 'md',
      icon,
      helperText,
      className,
      disabled,
      ...rest
    },
    ref
  ) => {
    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-3 text-lg',
    };

    // Color variant classes for focus states
    const colorClasses = {
      blue: {
        focus: 'focus:border-blue-500 focus:ring-blue-500',
        label: 'peer-focus:text-blue-500',
      },
      green: {
        focus: 'focus:border-green-500 focus:ring-green-500',
        label: 'peer-focus:text-green-500',
      },
      red: {
        focus: 'focus:border-red-500 focus:ring-red-500',
        label: 'peer-focus:text-red-500',
      },
      purple: {
        focus: 'focus:border-purple-500 focus:ring-purple-500',
        label: 'peer-focus:text-purple-500',
      },
      gray: {
        focus: 'focus:border-gray-500 focus:ring-gray-500',
        label: 'peer-focus:text-gray-500',
      },
    };

    // Variant-specific classes
    const variantClasses = {
      outlined: cn(
        'border border-gray-300 rounded-lg bg-white',
        !error && colorClasses[colorVariant].focus,
        'focus:outline-none focus:ring-2 focus:ring-opacity-50',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
      ),
      filled: cn(
        'border-0 border-b-2 border-gray-300 rounded-t-lg bg-gray-100',
        !error && colorClasses[colorVariant].focus,
        'focus:outline-none focus:bg-gray-50',
        error && 'border-red-500 focus:border-red-500'
      ),
      standard: cn(
        'border-0 border-b-2 border-gray-300 bg-transparent',
        !error && colorClasses[colorVariant].focus,
        'focus:outline-none',
        error && 'border-red-500 focus:border-red-500'
      ),
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            className={cn(
              'block text-sm font-medium text-gray-700 mb-1.5',
              disabled && 'text-gray-400'
            )}
          >
            {label}
          </label>
        )}

        {/* Input wrapper with icon support */}
        <div className="relative">
          {/* Icon */}
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          {/* Input field */}
          <input
            ref={ref}
            className={cn(
              'peer w-full transition-all duration-200',
              sizeClasses[inputSize],
              variantClasses[variant],
              icon && 'pl-10',
              disabled && 'bg-gray-100 cursor-not-allowed opacity-60',
              'placeholder:text-gray-400',
              className
            )}
            disabled={disabled}
            {...rest}
          />
        </div>

        {/* Helper text or error message */}
        {(helperText || error) && (
          <p
            className={cn(
              'mt-1.5 text-sm',
              error ? 'text-red-500' : 'text-gray-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
