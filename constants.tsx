
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
  {
    id: '1',
    date: '30 ธันวาคม 2568',
    description: 'ค่าวัสดุก่อสร้างเบื้องต้น',
    amount: 9525,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/90cg2L5r/1767332517752.jpg']
  },
  {
    id: '2',
    date: '30 ธันวาคม 2568',
    description: 'ค่าไฟฟ้าประจำหน่วยงาน',
    amount: 20000,
    category: 'อื่นๆ',
    images: ['https://i.postimg.cc/gJVt1f7M/1767332482116.jpg']
  },
  {
    id: '3',
    date: '30 ธันวาคม 2568',
    description: 'ค่าวัสดุจาก Home Pro (ชุดที่ 1)',
    amount: 454.93,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/rFnZ6Gfg/1767332517397.jpg']
  },
  {
    id: '4',
    date: '30 ธันวาคม 2568',
    description: 'ค่าวัสดุจาก Home Pro (ชุดที่ 2)',
    amount: 7592.98,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/pXGcNQss/1767332517555.jpg', 'https://i.postimg.cc/zXt2mwx7/1767332517652.jpg']
  },
  {
    id: '5',
    date: '30 ธันวาคม 2568',
    description: 'ค่าวัสดุจิปาถะ',
    amount: 500,
    category: 'วัสดุ',
    images: ['https://i.postimg.cc/tCSv0dB2/1767332517923.jpg']
  },
  {
    id: '6',
    date: '29 ธันวาคม 2568',
    description: 'ค่าปูนซีเมนต์ถุง',
    amount: 12000,
    category: 'วัสดุ',
    images: []
  },
  {
    id: '7',
    date: '28 ธันวาคม 2568',
    description: 'ค่าแรงช่างรายวัน (ชุดฐานราก)',
    amount: 5500,
    category: 'แรงงาน',
    images: []
  }
];

export const MOCK_TASKS: ProjectTask[] = [
  {
    id: 't1',
    name: 'งานเสาเข็ม',
    progress: 100,
    images: ['https://i.postimg.cc/0NmVJT9K/1767332531666.jpg', 'https://i.postimg.cc/d1jn5G7g/1767332488132.jpg', 'https://i.postimg.cc/k4vwTWVZ/1767332492897.jpg']
  },
  {
    id: 't2',
    name: 'งานโครงสร้าง',
    progress: 85,
    images: ['https://i.postimg.cc/63fzMC2s/1767332488296.jpg', 'https://i.postimg.cc/rmNgf5d3/1767332487930.jpg', 'https://i.postimg.cc/d1jn5G7x/1767332492717.jpg']
  },
  { id: 't3', name: 'งานหลังคา', progress: 0, images: [] },
  { id: 't4', name: 'งานก่ออิฐฉาบปูน', progress: 0, images: [] },
  { id: 't5', name: 'งานไฟ', progress: 0, images: [] },
  { id: 't6', name: 'งานสุขาภิบาล', progress: 0, images: [] }
];

export const ROADMAP_DATA: RoadmapItem[] = [
  { id: 'r1', task: 'งานปรับพื้นที่และเสาเข็ม', days: 45, start: '01/01/2568', end: '15/02/2568', status: 'COMPLETED' },
  { id: 'r2', task: 'งานฐานรากและคานคอดิน', days: 30, start: '16/02/2568', end: '18/03/2568', status: 'COMPLETED' },
  { id: 'r3', task: 'งานโครงสร้างเสาและคานชั้น 1', days: 60, start: '19/03/2568', end: '19/05/2568', status: 'IN_PROGRESS' },
  { id: 'r4', task: 'งานโครงสร้างชั้น 2', days: 60, start: '20/05/2568', end: '20/07/2568', status: 'PENDING' },
  { id: 'r5', task: 'งานหลังคาและผนัง', days: 90, start: '21/07/2568', end: '21/10/2568', status: 'PENDING' }
];
