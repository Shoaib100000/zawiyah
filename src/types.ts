export type UserRole = 'superadmin' | 'zawiyah_admin' | 'staff' | 'student' | 'donor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  salary: number;
  attendanceRate: number;
  city: string;
}

export interface Student {
  id: string;
  name: string;
  class: string;
  city: string;
  attendanceRate: number;
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
  description: string;
}

export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  date: string;
  month: string;
  receiptUrl?: string;
}

export interface Complaint {
  id: string;
  userId: string;
  userName: string;
  title: string;
  description: string;
  status: 'pending' | 'resolved';
  date: string;
  reply?: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: string;
}
