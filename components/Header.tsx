import React from 'react';
import { Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-20 bg-[#25477a] flex items-center justify-between px-6 md:px-10 shrink-0 sticky top-0 z-10 shadow-md">
      <div className="md:hidden flex items-center gap-3">
        <img 
          src="https://i.postimg.cc/PqZWmdfT/Core-Clearff-Photoroom.png" 
          alt="Logo" 
          className="w-10 h-10 brightness-0 invert" 
        />
        <div className="leading-none">
          <span className="gold-text text-xl block">Core Clear</span>
          <span className="text-[10px] text-white/70 tracking-widest block font-bold">CONSTRUCTION</span>
        </div>
      </div>
      
      <div className="hidden md:block">
        <h2 className="text-white text-lg font-bold tracking-wide opacity-90">
          ยินดีต้อนรับกลับมา, คุณธิติวัฒน์
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-white/80 hover:text-white">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#25477a]"></span>
        </button>
        <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden shadow-inner">
          <img 
            src="https://picsum.photos/id/64/100/100" 
            alt="User" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;