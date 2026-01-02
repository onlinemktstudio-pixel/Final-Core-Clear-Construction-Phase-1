
import React from 'react';
import { User, MapPin, Phone, Mail, FileText, Download, ShieldCheck, Briefcase } from 'lucide-react';
import { PROJECT_INFO } from '../constants';

const Profile: React.FC = () => {
  const documents = [
    { name: 'สัญญาจ้างก่อสร้าง (PDF)', type: 'PDF', size: '2.4 MB' },
    { name: 'แบบก่อสร้างอาคาร (PDF)', type: 'PDF', size: '18.7 MB' },
    { name: 'แปลนชั้น 1 และ 2 (2D/3D)', type: 'JPEG', size: '5.1 MB' },
    { name: 'เอกสารขออนุญาตปลูกสร้าง', type: 'DOCX', size: '1.2 MB' }
  ];

  return (
    <div className="space-y-6">
      {/* Bubble 1: Customer & Project Information */}
      <div className="bg-white rounded-[32px] p-7 md:p-10 shadow-xl border border-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#25477a]/5 rounded-full -mr-16 -mt-16"></div>
        
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#25477a]/10 overflow-hidden mb-4 shadow-lg">
            <img src="https://picsum.photos/id/64/200/200" alt="Client" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">คุณธิติวัฒน์ สิริวรกุล</h2>
          <div className="mt-2 inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100 shadow-sm">
            <ShieldCheck size={12} className="md:w-[14px] md:h-[14px]" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">บัญชีได้รับการยืนยันแล้ว</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 border-t border-slate-100 pt-8">
          <div className="space-y-5">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">ข้อมูลส่วนตัว</h3>
            <div className="flex items-start gap-4">
              <div className="p-2 md:p-2.5 bg-slate-50 text-slate-400 rounded-xl"><Phone size={16} className="md:w-[18px] md:h-[18px]" /></div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">เบอร์โทรศัพท์</p>
                <p className="text-sm font-bold text-slate-700">089-XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 md:p-2.5 bg-slate-50 text-slate-400 rounded-xl"><Mail size={16} className="md:w-[18px] md:h-[18px]" /></div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">อีเมล</p>
                <p className="text-sm font-bold text-slate-700">thitiwat.s@example.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">ข้อมูลโครงการ</h3>
            <div className="flex items-start gap-4">
              <div className="p-2 md:p-2.5 bg-slate-50 text-slate-400 rounded-xl"><Briefcase size={16} className="md:w-[18px] md:h-[18px]" /></div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">โครงการ</p>
                <p className="text-sm font-bold text-slate-700">{PROJECT_INFO.name}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 md:p-2.5 bg-slate-50 text-slate-400 rounded-xl"><MapPin size={16} className="md:w-[18px] md:h-[18px]" /></div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">ที่อยู่</p>
                <p className="text-sm font-bold text-slate-700 truncate max-w-[200px] md:max-w-none">123/4 หมู่บ้านแกรนด์วิลล์ ถ.ราชพฤกษ์</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bubble 2: Related Documents */}
      <div className="bg-white rounded-[32px] p-7 md:p-10 shadow-xl border border-slate-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg md:text-xl font-black text-slate-800 tracking-tight">เอกสารที่เกี่ยวข้อง</h3>
          <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">4 ฉบับ</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {documents.map((doc, i) => (
            <div key={i} className="flex items-center justify-between p-4 md:p-5 bg-slate-50 rounded-2xl md:rounded-[24px] border border-slate-100 hover:border-[#25477a]/30 transition-all group hover:bg-white hover:shadow-lg">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-sm flex items-center justify-center rounded-[14px] md:rounded-[18px] text-[#25477a] border border-slate-100">
                  <FileText size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-snug">{doc.name}</p>
                  <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-black tracking-widest mt-0.5">{doc.type} • {doc.size}</p>
                </div>
              </div>
              <button className="p-2.5 text-slate-300 group-hover:text-[#25477a] transition-colors rounded-xl hover:bg-[#25477a]/5">
                <Download size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
