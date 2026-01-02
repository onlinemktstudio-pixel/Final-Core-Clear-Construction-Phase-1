
import React from 'react';
import { Page } from '../types';
import { LayoutDashboard, Wallet, BarChart3, CalendarRange, UserCircle } from 'lucide-react';

interface BottomNavProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onPageChange }) => {
  const items = [
    { id: Page.Dashboard, icon: LayoutDashboard, label: 'สรุป' },
    { id: Page.Finance, icon: Wallet, label: 'การเงิน' },
    { id: Page.Progress, icon: BarChart3, label: 'งาน' },
    { id: Page.Roadmap, icon: CalendarRange, label: 'แผน' },
    { id: Page.Profile, icon: UserCircle, label: 'ฉัน' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-200 px-2 py-3 flex justify-around items-center z-50 rounded-t-3xl shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activePage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`flex flex-col items-center gap-1 min-w-[64px] transition-all ${
              isActive ? 'text-[#25477a]' : 'text-slate-400'
            }`}
          >
            <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-[#25477a]/10' : ''}`}>
              <Icon size={24} />
            </div>
            <span className={`text-[11px] font-medium ${isActive ? 'opacity-100' : 'opacity-80'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
