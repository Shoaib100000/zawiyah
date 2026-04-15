import { Staff, Student, Transaction, Donation, Complaint } from './types';

export const MOCK_STAFF: Staff[] = [
  { id: '1', name: 'Ahmed Khan', role: 'Teacher', salary: 500, attendanceRate: 95, city: 'Karachi' },
  { id: '2', name: 'Fatima Ali', role: 'Accountant', salary: 600, attendanceRate: 98, city: 'Lahore' },
  { id: '3', name: 'Zaid Ahmed', role: 'Teacher', salary: 450, attendanceRate: 92, city: 'Islamabad' },
];

export const MOCK_STUDENTS: Student[] = [
  { id: '1', name: 'Omar Farooq', class: '6A', city: 'Karachi', attendanceRate: 88 },
  { id: '2', name: 'Ayesha Bibi', class: '5B', city: 'Lahore', attendanceRate: 94 },
  { id: '3', name: 'Bilal Hassan', class: '7C', city: 'Quetta', attendanceRate: 85 },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', type: 'income', category: 'Donation', amount: 1000, date: '2026-04-01', description: 'Monthly general donation' },
  { id: '2', type: 'expense', category: 'Utilities', amount: 200, date: '2026-04-05', description: 'Electricity bill' },
  { id: '3', type: 'expense', category: 'Salary', amount: 1500, date: '2026-04-10', description: 'Staff salaries' },
];

export const MOCK_DONATIONS: Donation[] = [
  { id: '1', donorName: 'John Doe', amount: 500, date: '2026-04-02', month: 'April 2026' },
  { id: '2', donorName: 'Jane Smith', amount: 200, date: '2026-04-08', month: 'April 2026' },
];

export const MOCK_COMPLAINTS: Complaint[] = [
  { id: '1', userId: 'u1', userName: 'Ahmed Khan', title: 'Broken Fan', description: 'The fan in Room 3 is not working.', status: 'pending', date: '2026-04-12' },
];

export const COLORS = {
  primary: '#000000',
  accent: '#E7FF4D',
  background: '#F2F2F2',
  text: '#1A1A1A',
};
