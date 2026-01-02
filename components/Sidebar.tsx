import React from 'react';
import { Page } from '../types';
import { LayoutDashboard, Wallet, BarChart3, CalendarRange, UserCircle } from 'lucide-react';

interface SidebarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
  const navItems = [
    { id: Page.Dashboard, label: 'ภาพรวม', icon: LayoutDashboard },
    { id: Page.Finance, label: 'การเงิน', icon: Wallet },
    { id: Page.Progress, label: 'ความคืบหน้า', icon: BarChart3 },
    { id: Page.Roadmap, label: 'แผนการดำเนินการ', icon: CalendarRange },
    { id: Page.Profile, label: 'โปรไฟล์ & เอกสาร', icon: UserCircle },
  ];

  return (
    <div className="w-72 h-full bg-[#25477a] flex flex-col p-6 text-white shrink-0">
      <div className="mb-10 flex items-center gap-3">
        <img 
          src="https://i.postimg.cc/PqZWmdfT/Core-Clearff-Photoroom.png" 
          alt="Logo" 
          className="w-12 h-12 brightness-0 invert" 
        />
        <div className="leading-tight">
          <div className="gold-text text-2xl tracking-tight">Core Clear</div>
          <div className="text-[11px] font-bold tracking-[0.25em] opacity-80">CONSTRUCTION</div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${
                isActive 
                  ? 'bg-white/10 shadow-lg text-white font-medium' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={24} />
              <span className="text-lg">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="mt-auto pt-6 border-t border-white/10 opacity-50 text-sm">
        <p>© 2025 Core Clear Construction</p>
      </div>
    </div>
  );
};

export default Sidebar;