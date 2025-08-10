import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-gray-400' : 'text-yellow-500'}`} />
      
      <button
        onClick={toggleDarkMode}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
          isDark ? 'bg-blue-600' : 'bg-gray-300'
        }`}
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition-transform ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      
      <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-blue-400' : 'text-gray-400'}`} />
    </div>
  );
};

export default DarkModeToggle;