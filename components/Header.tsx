
import React from 'react';

const FilmReelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
);

const Header: React.FC = () => {
  return (
    <header className="text-center mb-10">
      <div className="flex items-center justify-center gap-4 mb-4">
        <FilmReelIcon />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Cine-Director | Trackfy IA
        </h1>
      </div>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Transforme sua visão musical em uma obra-prima cinematográfica. Descreva sua ideia e receba um briefing criativo completo em segundos.
      </p>
    </header>
  );
};

export default Header;
