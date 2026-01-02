
import React from 'react';
import { MOCK_TASKS, PROJECT_INFO } from '../constants';
import { Info, CheckCircle2, Target } from 'lucide-react';

interface ProgressProps {
  onImageClick: (url: string) => void;
}

const Progress: React.FC<ProgressProps> = ({ onImageClick }) => {
  // Balanced radius for responsive scaling
  const RADIUS_LARGE = 38;
  const CIRCUMFERENCE_LARGE = 2 * Math.PI * RADIUS_LARGE;
  
  const RADIUS_SMALL = 38;
  const CIRCUMFERENCE_SMALL = 2 * Math.PI * RADIUS_SMALL;

  return (
    <div className="space-y-6">
      {/* Refined Overall Status Header - Elegant Responsive Fonts */}
      <div className="bg-[#25477a] text-white rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden border-b-4 border-[#1a345c]">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 relative z-10">
          <div className="text-center md:text-left flex-1">
            <div className="flex items-center gap-2 mb-2 md:mb-3 opacity-80 justify-center md:justify-start">
              <Target size={16} className="text-[#d4af37] md:w-5 md:h-5" />
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-white">ภาพรวมโครงการ</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight leading-tight text-white">ความคืบหน้า<br className="hidden md:block"/>ปัจจุบันของงาน</h2>
            <div className="px-5 md:px-6 py-2 md:py-2.5 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20 inline-block shadow-inner">
              <p className="text-[11px] md:text-[12px] font-bold text-[#d4af37] tracking-wide">STATUS: ON SCHEDULE</p>
            </div>
          </div>

          <div className="relative w-36 h-36 md:w-44 md:h-44 group shrink-0">
            {/* Main Progress Circle with Premium Gradient */}
            <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="mainProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="50%" stopColor="#f9e29c" />
                  <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r={RADIUS_LARGE} fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="10" />
              <circle 
                cx="50" cy="50" r={RADIUS_LARGE} 
                fill="none" stroke="url(#mainProgressGrad)" strokeWidth="14" 
                strokeDasharray={CIRCUMFERENCE_LARGE} 
                strokeDashoffset={CIRCUMFERENCE_LARGE * (1 - PROJECT_INFO.progress / 100)}
                strokeLinecap="round"
                className="transition-all duration-[1.5s] ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl md:text-6xl font-black text-white drop-shadow-sm tracking-tighter">{PROJECT_INFO.progress}</span>
              <span className="text-base md:text-xl font-black text-[#d4af37] -mt-1 md:-mt-2">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Task List - Sharp and Beautiful */}
      <div className="space-y-4">
        <div className="px-4 flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold text-slate-800 tracking-tight">รายละเอียดงานรายหมวด</h3>
          <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">{MOCK_TASKS.length} ขั้นตอนหลัก</span>
        </div>

        {MOCK_TASKS.map((task) => (
          <div key={task.id} className="bg-white rounded-[28px] p-5 md:p-6 custom-shadow border border-slate-50 transition-all hover:border-[#25477a]/30 group hover:shadow-xl">
            <div className="flex items-center gap-5 md:gap-6">
              {/* Left: Task Progress Circle with Premium Gradient */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id={`grad-${task.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={task.progress === 100 ? '#10b981' : '#25477a'} />
                      <stop offset="100%" stopColor={task.progress === 100 ? '#34d399' : '#4f83cc'} />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r={RADIUS_SMALL} fill="none" stroke="#f8fafc" strokeWidth="10" />
                  <circle 
                    cx="50" cy="50" r={RADIUS_SMALL} 
                    fill="none" 
                    stroke={`url(#grad-${task.id})`}
                    strokeWidth="10" 
                    strokeDasharray={CIRCUMFERENCE_SMALL} 
                    strokeDashoffset={CIRCUMFERENCE_SMALL * (1 - task.progress / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  {task.progress === 100 ? (
                    <CheckCircle2 size={20} className="text-emerald-500 md:w-[22px] md:h-[22px] drop-shadow-sm" />
                  ) : (
                    <span className="text-[10px] md:text-[12px] font-black text-slate-800">{task.progress}%</span>
                  )}
                </div>
              </div>

              {/* Center: Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base truncate tracking-tight">{task.name}</h4>
                  {task.progress === 100 && (
                    <span className="text-[8px] md:text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-black tracking-wider shadow-sm">DONE</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Info size={10} className={task.progress > 0 ? (task.progress === 100 ? 'text-emerald-500' : 'text-[#25477a]') : 'text-slate-300'} />
                  <p className="text-[9px] md:text-[10px] uppercase font-black tracking-widest opacity-70">
                    {task.progress === 100 ? 'เสร็จสิ้นสมบูรณ์' : task.progress > 0 ? `กำลังดำเนินการ ${task.progress}%` : 'รอดำเนินการ'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Gallery Breakdown */}
            {task.images.length > 0 && (
              <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-slate-50">
                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {task.images.map((img, i) => (
                    <div key={i} className="shrink-0 relative group/img">
                      <img 
                        src={img} 
                        alt={task.name} 
                        className="w-20 h-20 md:w-36 md:h-36 object-cover rounded-[18px] md:rounded-[24px] cursor-pointer shadow-md group-hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border border-slate-100" 
                        onClick={() => onImageClick(img)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
