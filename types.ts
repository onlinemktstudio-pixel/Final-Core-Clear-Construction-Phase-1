
export enum Page {
  Dashboard = 'DASHBOARD',
  Finance = 'FINANCE',
  Progress = 'PROGRESS',
  Roadmap = 'ROADMAP',
  Profile = 'PROFILE'
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: 'วัสดุ' | 'แรงงาน' | 'อื่นๆ';
  images: string[];
}

export interface ProjectTask {
  id: string;
  name: string;
  progress: number;
  images: string[];
}

export interface RoadmapItem {
  id: string;
  task: string;
  days: number;
  start: string;
  end: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING';
}
