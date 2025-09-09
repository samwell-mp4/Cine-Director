
import React from 'react';

interface CreativeInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const CreativeInput: React.FC<CreativeInputProps> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg">
      <label htmlFor="idea-input" className="block text-lg font-semibold mb-3 text-gray-300">
        Sua Ideia ou Roteiro Curto
      </label>
      <textarea
        id="idea-input"
        value={value}
        onChange={onChange}
        placeholder="Ex: Uma canção sobre se sentir perdido em uma cidade grande à noite, com luzes de neon e uma sensação de solidão e esperança..."
        className="w-full h-32 p-4 bg-gray-900 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 text-gray-200 resize-none placeholder-gray-500"
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Gerando Conceito...
          </>
        ) : (
          '✨ Gerar Conceito Cinematográfico'
        )}
      </button>
    </div>
  );
};

export default CreativeInput;
