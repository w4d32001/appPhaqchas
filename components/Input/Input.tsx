import React, { useState } from 'react'
import { InputProps } from './Input.type'
import { Eye, EyeOff } from 'lucide-react';

export default function Input(props: InputProps) {
    const { type, name, placeholder, value, onChange, label, required } = props;
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="flex flex-col gap-4 relative">
        <label htmlFor={name}>{label}<span className='ml-1 text-red-600 text-lg'>{
            required ? '*' : ''
          }</span></label>
        <div className="relative">
          <input
            type={type === "password" && showPassword ? "text" : type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="py-2 px-4 outline-none rounded-lg text-gray-800 w-full"
          />
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      </div>
    );
}
