import React from 'react';
import { Plus, Search, TrendingUp, TrendingDown, Download } from 'lucide-react';
import { MOCK_TRANSACTIONS } from '@/src/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const FinancePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="bento-label">Finance</span>
          <h1 className="text-5xl font-black tracking-tighter text-primary leading-none">Management</h1>
          <p className="text-muted-foreground mt-2 font-medium">Track income, expenses, and financial health.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="rounded-xl border-[1.5px] border-black shadow-none font-bold uppercase text-xs tracking-widest">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button className="rounded-xl border-[1.5px] border-black shadow-none font-bold uppercase text-xs tracking-widest">
            <Plus className="w-4 h-4 mr-2" /> Add Transaction
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bento-card">
          <div className="flex items-center justify-between mb-4">
            <span className="bento-label">Total Income</span>
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp className="text-green-600 w-5 h-5" />
            </div>
          </div>
          <div className="text-4xl font-black tracking-tighter">$15,450</div>
          <p className="text-[10px] font-bold text-green-600 mt-2 uppercase tracking-widest">+12% from last month</p>
        </div>

        <div className="bento-card">
          <div className="flex items-center justify-between mb-4">
            <span className="bento-label">Total Expenses</span>
            <div className="bg-red-100 p-2 rounded-lg">
              <TrendingDown className="text-red-600 w-5 h-5" />
            </div>
          </div>
          <div className="text-4xl font-black tracking-tighter">$4,200</div>
          <p className="text-[10px] font-bold text-red-600 mt-2 uppercase tracking-widest">+5% from last month</p>
        </div>

        <div className="bento-card bento-card-hero">
          <div className="flex items-center justify-between mb-4">
            <span className="bento-label text-black/60">Net Balance</span>
            <div className="bg-black/10 p-2 rounded-lg">
              <TrendingUp className="text-black w-5 h-5" />
            </div>
          </div>
          <div className="text-4xl font-black tracking-tighter">$11,250</div>
          <p className="text-[10px] font-bold text-black/60 mt-2 uppercase tracking-widest">Healthy</p>
        </div>
      </div>

      <div className="bento-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="bento-label">Recent Transactions</span>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">A list of your recent income and expenses.</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-10 rounded-xl border-[1.5px] border-black focus-visible:ring-0 font-bold" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b-[1.5px] border-black hover:bg-transparent">
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-black">Date</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-black">Type</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-black">Category</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-black">Description</TableHead>
                <TableHead className="text-right text-[10px] font-black uppercase tracking-widest text-black">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_TRANSACTIONS.map((tx) => (
                <TableRow key={tx.id} className="border-b-[1.5px] border-black/5 hover:bg-muted/30 transition-colors">
                  <TableCell className="text-xs font-bold opacity-60">{tx.date}</TableCell>
                  <TableCell>
                    <Badge variant={tx.type === 'income' ? 'secondary' : 'destructive'} className="rounded-lg border-[1.5px] border-black shadow-none font-bold uppercase text-[9px] tracking-widest px-2">
                      {tx.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs font-bold uppercase tracking-tight">{tx.category}</TableCell>
                  <TableCell className="text-xs font-medium opacity-80">{tx.description}</TableCell>
                  <TableCell className={`text-right font-black tracking-tighter text-lg ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;
