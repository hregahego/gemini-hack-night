'use client';

import { useState, KeyboardEvent } from 'react';

export default function DietaryRestrictions() {
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setRestrictions([...restrictions, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeRestriction = (indexToRemove: number) => {
    setRestrictions(restrictions.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a dietary restriction and press Enter"
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {restrictions.map((restriction, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full"
          >
            <span>{restriction}</span>
            <button
              onClick={() => removeRestriction(index)}
              className="text-green-600 hover:text-green-800"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}