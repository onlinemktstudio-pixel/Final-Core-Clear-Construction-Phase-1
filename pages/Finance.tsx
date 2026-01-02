
import React, { useState, useMemo } from 'react';
import { PROJECT_INFO, MOCK_TRANSACTIONS } from '../constants';
import { Filter, PieChart, Coins, Hammer, Layers, TrendingDown, Wallet } from 'lucide-react';

interface FinanceProps {
  onImageClick: (url: string) => void;
}

const Finance: React.FC<FinanceProps> = ({ onImageClick }) => {
  const uniqueDates = Array.from(new Set(MOCK_TRANSACTIONS.map(tx => tx.date)));
  const [dateFilter, setDateFilter] = useState(uniqueDates[0]);

  const filteredTransactions = useMemo(() => {
    return MOCK_TRANSACTIONS.filter(tx => tx.date === dateFilter);
  }, [dateFilter]);

  const dailyStats = useMemo(() => {
    const total = filteredTransactions.reduce((acc, curr) => acc + curr.amount, 0);
    const material = filteredTransactions
      .filter(tx => tx.category === 'วัสดุ')
      .reduce((acc, curr) => acc + curr.amount, 0);
    const labor = filteredTransactions
      .filter(tx => tx.category === 'แรงงาน')
      .reduce((acc, curr) => acc + curr.amount, 0);
    return { total, material, labor };
  }, [filteredTransactions]);

  return (
    <div className="space-y-6">
      {/* Premium Hero Card - Adjusted Typography for Responsive Fit */}
      <div className="relative overflow-hidden bg-[#25477a] rounded-[32px] p-8 md:p-10 shadow-2xl text-white border-b-8 border-[#1a345c]">
        {/* Finance-themed background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1600&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="finance context"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#25477a]/90 via-[#25477a]/70 to-[#25477a]/90"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-center items-center gap-2 mb-4 md:mb-6 opacity-90">
            <Wallet size={16} className="text-white md:w-5 md:h-5" />
            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white">สรุปค่าใช้จ่ายสะสมโครงการ</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-8 md:mb-10 tracking-tighter text-white drop-shadow-xl">
            <span className="mr-1 md:mr-2 italic opacity-80">฿</span>
            {PROJECT_INFO.cumulativeExpense.toLocaleString()}
          </h2>
          
          <div className="grid grid-cols-2 gap-3 md:gap-5 w-full max-w-xl">
            <div className="bg-white/15 backdrop-blur-xl rounded-[24px] md:rounded-[28px] p-4 md:p-6 border border-white/20 flex flex-col items-center shadow-lg transition-transform hover:scale-[1.02]">
              <span className="text-[9px] md:text-[11px] font-bold opacity-70 uppercase mb-1 md:mb-2 text-white tracking-widest">วัสดุสะสม</span>
              <span className="text-lg md:text-2xl font-black italic text-white">฿{(PROJECT_INFO.cumulativeExpense * 0.65).toLocaleString()}</span>
            </div>
            <div className="bg-white/15 backdrop-blur-xl rounded-[24px] md:rounded-[28px] p-4 md:p-6 border border-white/20 flex flex-col items-center shadow-lg transition-transform hover:scale-[1.02]">
              <span className="text-[9px] md:text-[11px] font-bold opacity-70 uppercase mb-1 md:mb-2 text-white tracking-widest">แรงงานสะสม</span>
              <span className="text-lg md:text-2xl font-black italic text-white">฿{(PROJECT_INFO.cumulativeExpense * 0.35).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Summary - Sleek Hierarchy with Scaled Down Total */}
      <div className="bg-white rounded-[32px] p-6 md:p-8 custom-shadow border border-slate-100">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-[#25477a]/5 rounded-xl shadow-inner">
              <TrendingDown size={18} className="text-[#25477a] md:w-5 md:h-5" />
            </div>
            <h3 className="font-bold text-slate-800 text-base md:text-lg">สรุปรายจ่ายประจำวัน</h3>
          </div>
          <div className="px-4 py-1.5 md:py-2 bg-[#25477a] rounded-full text-[10px] md:text-[12px] font-black text-white shadow-lg tracking-wide">
            {dateFilter}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between bg-slate-50/70 p-6 md:p-8 rounded-[28px] md:rounded-[32px] border border-slate-100">
          <div className="text-center md:text-left flex-1 md:border-r border-slate-200 md:pr-10">
            <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 flex items-center justify-center md:justify-start gap-2">
              <Coins size={14} className="text-[#25477a] md:w-4 md:h-4" />
              ยอดใช้จ่ายรวมวันนี้
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-black text-[#25477a] tracking-tighter">฿{dailyStats.total.toLocaleString()}</p>
          </div>
          
          <div className="flex gap-3 md:gap-4 w-full md:w-auto">
            <div className="flex-1 bg-white rounded-2xl p-4 md:p-5 border border-slate-100 min-w-[120px] md:min-w-[150px] shadow-sm flex flex-col items-center md:items-start transition-all hover:shadow-md">
              <div className="flex items-center gap-1.5 mb-1 md:mb-2">
                <Layers size={12} className="text-blue-600 md:w-3.5 md:h-3.5" />
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">ค่าวัสดุ</span>
              </div>
              <p className="text-base md:text-2xl font-black text-slate-800 tracking-tight italic">฿{dailyStats.material.toLocaleString()}</p>
            </div>
            <div className="flex-1 bg-white rounded-2xl p-4 md:p-5 border border-slate-100 min-w-[120px] md:min-w-[150px] shadow-sm flex flex-col items-center md:items-start transition-all hover:shadow-md">
              <div className="flex items-center gap-1.5 mb-1 md:mb-2">
                <Hammer size={12} className="text-orange-600 md:w-3.5 md:h-3.5" />
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">ค่าแรง</span>
              </div>
              <p className="text-base md:text-2xl font-black text-slate-800 tracking-tight italic">฿{dailyStats.labor.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-white rounded-[32px] overflow-hidden custom-shadow border border-slate-100">
        <div className="px-6 md:px-8 py-5 md:py-7 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
          <h3 className="text-base md:text-lg font-bold text-slate-800 tracking-tight">รายการเดินบัญชี</h3>
          <div className="flex items-center gap-2 bg-white px-3 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl border border-slate-200 shadow-sm">
            <Filter size={14} className="text-slate-400" />
            <select 
              className="bg-transparent text-[12px] md:text-[14px] text-slate-700 focus:outline-none font-bold cursor-pointer"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              {uniqueDates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredTransactions.length > 0 ? filteredTransactions.map((tx) => (
            <div key={tx.id} className="p-6 md:p-10 hover:bg-slate-50/50 transition-all group">
              <div className="flex justify-between items-start mb-4 md:mb-5">
                <div className="flex-1">
                  <div className="mb-2 md:mb-3">
                    <span className={`text-[8px] md:text-[10px] px-3 md:px-4 py-1 md:py-1.5 rounded-full font-black uppercase tracking-[0.1em] shadow-sm ${
                      tx.category === 'วัสดุ' ? 'bg-blue-600 text-white' : 
                      tx.category === 'แรงงาน' ? 'bg-orange-600 text-white' : 
                      'bg-slate-400 text-white'
                    }`}>
                      {tx.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-700 text-sm md:text-lg leading-snug group-hover:text-[#25477a] transition-colors">{tx.description}</h4>
                </div>
                <div className="text-right ml-4">
                  <p className="text-xl md:text-3xl font-black text-red-600 tracking-tighter italic">-{tx.amount.toLocaleString()}</p>
                </div>
              </div>

              {tx.images.length > 0 && (
                <div className="flex gap-3 md:gap-4 mt-4 md:mt-5 overflow-x-auto pb-2 scrollbar-hide">
                  {tx.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-[18px] md:rounded-[24px] overflow-hidden border-2 border-slate-100 cursor-pointer shadow-sm hover:shadow-xl hover:border-[#25477a]/20 transition-all duration-300"
                      onClick={() => onImageClick(img)}
                    >
                      <img src={img} alt="receipt" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )) : (
            <div className="p-16 md:p-24 text-center text-slate-300 italic font-bold bg-slate-50/10 text-xs md:text-sm">ไม่มีรายการบันทึกในวันที่เลือก</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Finance;
