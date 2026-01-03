
import { Transaction, ProjectTask, RoadmapItem } from './types';

export const COLORS = {
  primary: '#25477a',
  secondary: '#d4af37',
  background: '#f8fafc',
  card: '#ffffff'
};

export const PROJECT_INFO = {
  name: 'The Grand Residence Ratchapruek',
  value: 12500000,
  cumulativeExpense: 4850000,
  progress: 45,
  startDate: '1 มกราคม 2568',
  endDate: '30 ธันวาคม 2569'
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  // --- 30 ธันวาคม ---
  {
    id: 'tx-30-1',
    date: '30 ธันวาคม 2568',
    description: 'ค่าวัสดุก่อสร้างเบื้องต้น (ท่อ PVC และข้อต่อ)',
    amount: 9525,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/90cg2L5r/1767332517752.jpg']
  },
  {
    id: 'tx-30-2',
    date: '30 ธันวาคม 2568',
    description: 'ค่าไฟฟ้าประจำหน่วยงานและน้ำประปาชั่วคราว',
    amount: 20000,
    category: 'อื่นๆ',
    images: ['https://i.postimg.cc/gJVt1f7M/1767332482116.jpg']
  },
  {
    id: 'tx-30-3',
    date: '30 ธันวาคม 2568',
    description: 'ชุดสุขภัณฑ์และอุปกรณ์ติดตั้งห้องน้ำ (Home Pro)',
    amount: 7592.98,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/pXGcNQss/1767332517555.jpg']
  },
  // --- 29 ธันวาคม ---
  {
    id: 'tx-29-1',
    date: '29 ธันวาคม 2568',
    description: 'เหล็กเส้นกลมและเหล็กข้ออ้อย (มอก.)',
    amount: 32400,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/63fzMC2s/1767332488296.jpg']
  },
  // --- 28 ธันวาคม ---
  {
    id: 'tx-28-1',
    date: '28 ธันวาคม 2568',
    description: 'งวดงานค่าแรงเทพื้นชั้น 1 (พื้นที่ 120 ตร.ม.)',
    amount: 55000,
    category: 'แรงงาน',
    images: ['https://i.postimg.cc/rmNgf5d3/1767332487930.jpg']
  },
  // --- 27 ธันวาคม ---
  {
    id: 'tx-27-1',
    date: '27 ธันวาคม 2568',
    description: 'คอนกรีตผสมเสร็จ (ซีแพค) 240 ksc',
    amount: 18900,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/d1jn5G7x/1767332492717.jpg']
  },
  // --- 26 ธันวาคม ---
  {
    id: 'tx-26-1',
    date: '26 ธันวาคม 2568',
    description: 'ค่ารถแม็คโครขุดหลุมฐานราก (2 วัน)',
    amount: 12000,
    category: 'อื่นๆ',
    images: ['https://i.postimg.cc/k4vwTWVZ/1767332492897.jpg']
  },
  // --- 25 ธันวาคม ---
  {
    id: 'tx-25-1',
    date: '25 ธันวาคม 2568',
    description: 'ค่าแรงจัดเตรียมแคมป์ที่พักและผังโครงการ',
    amount: 8500,
    category: 'แรงงาน',
    images: ['https://i.postimg.cc/0NmVJT9K/1767332531666.jpg']
  }
];

export const MOCK_TASKS: ProjectTask[] = [
  {
    id: 't1',
    name: 'งานเสาเข็ม',
    progress: 100,
    images: ['https://i.postimg.cc/0NmVJT9K/1767332531666.jpg', 'https://i.postimg.cc/d1jn5G7g/1767332488132.jpg']
  },
  {
    id: 't2',
    name: 'งานโครงสร้าง',
    progress: 85,
    images: ['https://i.postimg.cc/63fzMC2s/1767332488296.jpg', 'https://i.postimg.cc/rmNgf5d3/1767332487930.jpg']
  }
];

export const ROADMAP_DATA: RoadmapItem[] = [
  { id: 'r1', task: 'งานปรับพื้นที่และเสาเข็ม', days: 45, start: '01/01/2568', end: '15/02/2568', status: 'COMPLETED' },
  { id: 'r2', task: 'งานฐานรากและคานคอดิน', days: 30, start: '16/02/2568', end: '18/03/2568', status: 'COMPLETED' },
  { id: 'r3', task: 'งานโครงสร้างเสาและคานชั้น 1', days: 60, start: '19/03/2568', end: '19/05/2568', status: 'IN_PROGRESS' }
];
