// src/App.tsx
import React, { useState } from 'react';
import Input from './shared/Input';
import { Mail, Lock, User, Search } from 'lucide-react'; // or any icon library

const Test = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Input Variants</h1>

      {/* Outlined variant with blue color */}
      <Input
        label="Email Address"
        type="email"
        variant="outlined"
        colorVariant="blue"
        inputSize="md"
        placeholder="john@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail size={20} />}
        helperText="We'll never share your email"
      />

      {/* Outlined variant with error */}
      <Input
        label="Password"
        type="password"
        variant="outlined"
        colorVariant="red"
        inputSize="md"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Lock size={20} />}
        error="Password must be at least 8 characters"
      />

      {/* Filled variant with green color */}
      <Input
        label="Username"
        type="text"
        variant="filled"
        colorVariant="green"
        inputSize="lg"
        placeholder="johndoe"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon={<User size={20} />}
      />

      {/* Standard variant with purple color */}
      <Input
        label="Search"
        type="text"
        variant="standard"
        colorVariant="purple"
        inputSize="sm"
        placeholder="Type to search..."
        icon={<Search size={18} />}
      />

      {/* Different color variants - Outlined */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Blue Input"
          variant="outlined"
          colorVariant="blue"
          placeholder="Blue focus"
        />
        <Input
          label="Green Input"
          variant="outlined"
          colorVariant="green"
          placeholder="Green focus"
        />
        <Input
          label="Purple Input"
          variant="outlined"
          colorVariant="purple"
          placeholder="Purple focus"
        />
        <Input
          label="Gray Input"
          variant="outlined"
          colorVariant="gray"
          placeholder="Gray focus"
        />
      </div>

      {/* Disabled state */}
      <Input
        label="Disabled Input"
        variant="outlined"
        colorVariant="blue"
        placeholder="Disabled field"
        disabled
        value="Cannot edit"
      />

      {/* All sizes */}
      <div className="space-y-4">
        <Input
          label="Small Size"
          variant="outlined"
          inputSize="sm"
          placeholder="Small input"
        />
        <Input
          label="Medium Size"
          variant="outlined"
          inputSize="md"
          placeholder="Medium input"
        />
        <Input
          label="Large Size"
          variant="outlined"
          inputSize="lg"
          placeholder="Large input"
        />
      </div>
    </div>
  );
};

export default Test;
