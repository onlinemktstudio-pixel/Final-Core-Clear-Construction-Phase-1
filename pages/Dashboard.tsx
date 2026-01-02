
import React from 'react';
import { PROJECT_INFO, MOCK_TASKS } from '../constants';
import { Video, Youtube, TrendingUp, Target, Box } from 'lucide-react';

interface DashboardProps {
  onImageClick: (url: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onImageClick }) => {
  const latestImages = MOCK_TASKS.flatMap(t => t.images).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="px-2">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">{PROJECT_INFO.name}</h1>
        <p className="text-slate-400 text-xs md:text-sm">รายงานสถานะโครงการประจำสัปดาห์</p>
      </div>

      {/* Hero Row: Cumulative Expense & Progress Together */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cumulative Expense Bubble */}
        <div className="bg-[#25477a] text-white rounded-[28px] p-6 md:p-7 shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute top-6 right-6 opacity-20"><Box size={32} className="md:w-10 md:h-10" /></div>
          
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">ค่าใช้จ่ายสะสม</p>
          <h2 className="text-2xl md:text-3xl font-black mb-1">฿{PROJECT_INFO.cumulativeExpense.toLocaleString()} บาท</h2>
          <p className="text-white/40 text-[10px] md:text-[11px] mb-4 font-medium">จากมูลค่าโครงการรวม ฿{PROJECT_INFO.value.toLocaleString()} บาท</p>
          
          <div className="bg-white/10 rounded-full h-2 w-full overflow-hidden border border-white/5">
            <div 
              className="bg-gradient-to-r from-[#d4af37] to-[#f9e29c] h-full rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]" 
              style={{ width: `${(PROJECT_INFO.cumulativeExpense / PROJECT_INFO.value) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-[10px] text-white/50 font-medium">เบิกจ่ายแล้ว {((PROJECT_INFO.cumulativeExpense / PROJECT_INFO.value) * 100).toFixed(1)}%</p>
            <TrendingUp size={14} className="text-[#d4af37]" />
          </div>
        </div>

        {/* Overall Progress Bubble */}
        <div className="bg-white rounded-[28px] p-6 md:p-7 custom-shadow border border-slate-50 relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-slate-50 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute top-6 right-6 text-[#25477a]/10"><Target size={32} className="md:w-10 md:h-10" /></div>
          
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">ความก้าวหน้าโครงการ</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#25477a] mb-1">{PROJECT_INFO.progress}%</h2>
          <p className="text-slate-400 text-[10px] md:text-[11px] mb-4 italic font-medium">On Schedule • ตามแผนงานโครงการ</p>
          
          <div className="bg-slate-100 rounded-full h-2 w-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all duration-1000" 
              style={{ width: `${PROJECT_INFO.progress}%` }}
            ></div>
          </div>
          <p className="text-[9px] text-slate-300 mt-3 font-medium uppercase tracking-tight">อัปเดตล่าสุด: 30 ธันวาคม 2568</p>
        </div>
      </div>

      {/* Latest Photos */}
      <div className="bg-white rounded-[28px] p-6 custom-shadow border border-slate-50">
        <h3 className="text-base md:text-lg font-bold mb-4 text-slate-800">รูปภาพความคืบหน้าล่าสุด</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {latestImages.map((img, i) => (
            <div key={i} className="shrink-0">
              <img 
                src={img} 
                alt="Recent" 
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-[20px] cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => onImageClick(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Bubbles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-[28px] p-5 md:p-6 custom-shadow flex items-center gap-4 md:gap-5 border border-slate-50 hover:border-[#25477a]/10 transition-colors">
          <div className="p-3 md:p-4 bg-blue-50 text-[#25477a] rounded-[18px] md:rounded-[20px] shadow-inner">
            <Video size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800 text-xs md:text-sm">กล้องวงจรปิด (Live)</h4>
            <p className="text-[10px] text-slate-400 mb-1 font-medium">Account ID: CCC-RES-0942</p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.yoosee" 
              target="_blank" 
              className="text-[10px] font-bold text-[#25477a] underline hover:text-[#1a345c]"
            >
              เปิดแอปเพื่อเข้าดูภาพสด
            </a>
          </div>
        </div>

        <div className="bg-white rounded-[28px] p-5 md:p-6 custom-shadow flex items-center gap-4 md:gap-5 border border-slate-50 hover:border-red-100 transition-colors">
          <div className="p-3 md:p-4 bg-red-50 text-red-600 rounded-[18px] md:rounded-[20px] shadow-inner">
            <Youtube size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800 text-xs md:text-sm">เกร็ดความรู้ (Tips)</h4>
            <p className="text-[10px] text-slate-400 mb-1 font-medium">เทคนิคสร้างบ้านประหยัดพลังงาน</p>
            <a 
              href="https://www.youtube.com/results?search_query=tips+for+building+a+house" 
              target="_blank" 
              className="text-[10px] font-bold text-red-600 underline hover:text-red-800"
            >
              ดูวิดีโอแนะนำจากเรา
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
