
import React, { useState, useMemo } from 'react';
import { PROJECT_INFO, MOCK_TRANSACTIONS } from '../constants.tsx';
import { Wallet, Layers, Hammer, Calendar, Coins, ChevronDown } from 'lucide-react';

interface FinanceProps {
  onImageClick: (url: string) => void;
}

const Finance: React.FC<FinanceProps> = ({ onImageClick }) => {
  // ดึงวันที่ทั้งหมดที่มีข้อมูล
  const uniqueDates = useMemo(() => {
    const dates = Array.from(new Set(MOCK_TRANSACTIONS.map(tx => tx.date)));
    return dates.sort((a, b) => {
      const dayA = parseInt(a.split(' ')[0]);
      const dayB = parseInt(b.split(' ')[0]);
      return dayB - dayA;
    });
  }, []);

  const [selectedDate, setSelectedDate] = useState(uniqueDates[0]);

  // คำนวณข้อมูลสำหรับวันที่เลือก
  const dailyTransactions = useMemo(() => {
    return MOCK_TRANSACTIONS.filter(tx => tx.date === selectedDate);
  }, [selectedDate]);

  const dailyStats = useMemo(() => {
    const total = dailyTransactions.reduce((acc, curr) => acc + curr.amount, 0);
    const materials = dailyTransactions.filter(tx => tx.category === 'วัสดุ').reduce((acc, curr) => acc + curr.amount, 0);
    const labor = dailyTransactions.filter(tx => tx.category === 'แรงงาน').reduce((acc, curr) => acc + curr.amount, 0);
    return { total, materials, labor };
  }, [dailyTransactions]);

  // คำนวณยอดสะสมแยกหมวด (จำลองสัดส่วนตามมาตรฐาน)
  const cumulativeMaterials = PROJECT_INFO.cumulativeExpense * 0.6;
  const cumulativeLabor = PROJECT_INFO.cumulativeExpense * 0.4;

  return (
    <div className="space-y-6 page-enter pb-10">
      {/* บับเบิ้ลที่ 1: ค่าใช้จ่ายสะสม (สี #25477a - จัดตรงกลาง) */}
      <div className="bg-[#25477a] text-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden border-b-8 border-[#1a345c]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4 opacity-70">
            <Wallet size={16} className="text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">งบประมาณสะสมทั้งหมด</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            <span className="text-xl md:text-2xl mr-2 opacity-50 font-light italic">฿</span>
            {PROJECT_INFO.cumulativeExpense.toLocaleString()}
          </h2>

          <div className="w-full max-w-md grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#d4af37] mb-2">
                <Layers size={14} />
                <p className="text-[10px] font-black uppercase tracking-widest">วัสดุสะสม</p>
              </div>
              <p className="text-xl md:text-2xl font-black tracking-tight text-white">฿{cumulativeMaterials.toLocaleString()}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#d4af37] mb-2">
                <Hammer size={14} />
                <p className="text-[10px] font-black uppercase tracking-widest">ค่าแรงสะสม</p>
              </div>
              <p className="text-xl md:text-2xl font-black tracking-tight text-white">฿{cumulativeLabor.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* บับเบิ้ลที่ 2: สรุปค่าใช้จ่ายประจำวัน (สีขาว - จัดตรงกลาง + Dropdown มุมขวา) */}
      <div className="bg-white rounded-[35px] p-8 shadow-sm border border-slate-100 relative overflow-hidden group">
        {/* Dropdown Filter มุมขวาบน */}
        <div className="absolute top-6 right-6 z-20">
          <div className="relative">
            <select 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-black py-2 pl-4 pr-9 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25477a]/20 transition-all cursor-pointer shadow-sm hover:border-[#25477a]/30 uppercase tracking-widest"
            >
              {uniqueDates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* เนื้อหาหลักประจำวัน - จัดตรงกลาง */}
        <div className="flex flex-col items-center text-center mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={14} className="text-[#25477a]" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">สรุปค่าใช้จ่ายประจำวัน</p>
          </div>
          <h3 className="text-4xl font-black text-[#25477a] tracking-tighter mb-8">฿{dailyStats.total.toLocaleString()}</h3>
          
          <div className="w-full max-w-sm grid grid-cols-2 gap-4">
            <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-50 transition-colors group-hover:bg-white group-hover:shadow-md">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">วัสดุวันนี้</p>
              <p className="text-lg font-bold text-slate-700">฿{dailyStats.materials.toLocaleString()}</p>
            </div>
            <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-50 transition-colors group-hover:bg-white group-hover:shadow-md">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">ค่าแรงวันนี้</p>
              <p className="text-lg font-bold text-slate-700">฿{dailyStats.labor.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* รายการประจำวัน (ห้ามเปลี่ยน) */}
      <div className="bg-white rounded-[30px] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Coins size={18} className="text-[#d4af37]" />
            รายการธุรกรรม
          </h3>
          <span className="text-[10px] font-black text-[#25477a] bg-[#25477a]/5 px-3 py-1 rounded-full uppercase tracking-widest">{selectedDate}</span>
        </div>
        
        <div className="divide-y divide-slate-50">
          {dailyTransactions.length > 0 ? dailyTransactions.map((tx) => (
            <div key={tx.id} className="p-6 hover:bg-slate-50/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider text-white ${
                      tx.category === 'วัสดุ' ? 'bg-blue-500' : 
                      tx.category === 'แรงงาน' ? 'bg-orange-500' : 'bg-slate-400'
                    }`}>
                      {tx.category}
                    </span>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-slate-700 leading-tight">{tx.description}</h4>
                </div>
                <div className="text-right ml-4">
                  <p className="text-lg md:text-xl font-black text-red-500 tracking-tighter">-฿{tx.amount.toLocaleString()}</p>
                </div>
              </div>

              {tx.images.length > 0 && (
                <div className="flex gap-3 mt-2 overflow-x-auto pb-1 scrollbar-hide mask-linear-fade">
                  {tx.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-slate-100 cursor-pointer hover:scale-105 transition-transform shadow-sm flex-shrink-0"
                      onClick={() => onImageClick(img)}
                    >
                      <img src={img} alt="receipt" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )) : (
            <div className="py-12 text-center text-slate-400 italic text-sm">
              ไม่พบรายการในวันที่เลือก
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Finance;
