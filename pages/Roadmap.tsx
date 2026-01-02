
import React from 'react';
import { ROADMAP_DATA } from '../constants';
import { Clock, Calendar } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#25477a] text-white rounded-[28px] p-7 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
        <h2 className="text-xl md:text-2xl font-black mb-1 md:mb-2 text-white">แผนการดำเนินการ</h2>
        <p className="text-white/60 text-xs md:text-sm font-medium tracking-wide">ติดตามระยะเวลาและขั้นตอนการก่อสร้างทั้งหมด</p>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
        {ROADMAP_DATA.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Status Dot */}
            <div className={`absolute -left-[22px] top-1.5 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 ${
              item.status === 'COMPLETED' ? 'bg-emerald-500' : 
              item.status === 'IN_PROGRESS' ? 'bg-amber-500 animate-pulse-orange' : 
              'bg-slate-300'
            }`}></div>

            <div className="bg-white rounded-[24px] p-5 md:p-6 custom-shadow border border-slate-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[9px] md:text-[10px] px-2.5 py-1 rounded-full font-black text-white shadow-sm ${
                      item.status === 'COMPLETED' ? 'bg-emerald-500' : 
                      item.status === 'IN_PROGRESS' ? 'bg-amber-500' : 
                      'bg-slate-400'
                    }`}>
                      {item.status === 'COMPLETED' ? 'เสร็จแล้ว' : item.status === 'IN_PROGRESS' ? 'กำลังดำเนินการ' : 'ยังไม่เริ่ม'}
                    </span>
                    <span className="text-[10px] md:text-xs text-slate-400 font-bold tracking-tight">ลำดับที่ {index + 1}</span>
                  </div>
                  <h4 className="text-base md:text-lg font-black text-slate-800 mb-4 tracking-tight">{item.task}</h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <div className="flex items-center gap-2.5 text-slate-500">
                      <div className="p-1.5 bg-slate-50 rounded-lg text-slate-400"><Clock size={14} /></div>
                      <div>
                        <p className="font-bold text-slate-700 text-xs md:text-sm leading-none mb-0.5">{item.days} วัน</p>
                        <p className="text-[9px] md:text-[10px] font-medium opacity-60 uppercase tracking-tighter leading-none">ระยะเวลา</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-500">
                      <div className="p-1.5 bg-slate-50 rounded-lg text-slate-400"><Calendar size={14} /></div>
                      <div>
                        <p className="font-bold text-slate-700 text-xs md:text-sm leading-none mb-0.5">{item.start}</p>
                        <p className="text-[9px] md:text-[10px] font-medium opacity-60 uppercase tracking-tighter leading-none">วันเริ่ม</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-500 col-span-2 md:col-span-1">
                      <div className="p-1.5 bg-slate-50 rounded-lg text-slate-400"><Calendar size={14} /></div>
                      <div>
                        <p className="font-bold text-slate-700 text-xs md:text-sm leading-none mb-0.5">{item.end}</p>
                        <p className="text-[9px] md:text-[10px] font-medium opacity-60 uppercase tracking-tighter leading-none">วันสิ้นสุด</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
