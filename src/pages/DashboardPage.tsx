import React from 'react';
import { 
  Users, 
  UserSquare2, 
  Wallet, 
  HeartHandshake, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  MessageSquare
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  AreaChart,
  Area
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/src/AuthContext';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
];

const donationData = [
  { name: 'Mon', amount: 400 },
  { name: 'Tue', amount: 300 },
  { name: 'Wed', amount: 600 },
  { name: 'Thu', amount: 800 },
  { name: 'Fri', amount: 500 },
  { name: 'Sat', amount: 900 },
  { name: 'Sun', amount: 700 },
];

const DashboardPage = () => {
  const { user } = useAuth();

  const stats = [
    { name: 'Total Students', value: '1,234', icon: UserSquare2, change: '+12%', trend: 'up', color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Total Staff', value: '56', icon: Users, change: '+2', trend: 'up', color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Total Donations', value: '$12,450', icon: HeartHandshake, change: '+8%', trend: 'up', color: 'text-accent', bg: 'bg-accent/10' },
    { name: 'Monthly Expenses', value: '$4,200', icon: Wallet, change: '-5%', trend: 'down', color: 'text-red-600', bg: 'bg-red-100' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <span className="bento-label">Overview</span>
          <h1 className="text-5xl font-extrabold tracking-tighter text-primary">Welcome, {user?.name}</h1>
          <p className="text-muted-foreground mt-2">Here's what's happening at your Zawiyah today.</p>
        </div>
        <div className="hidden md:block">
          <div className="bento-pill">Live Updates</div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-rows-3">
        {/* Hero Card */}
        <div className="bento-card bento-card-hero md:col-span-2 md:row-span-2 flex flex-col justify-between">
          <div>
            <span className="bento-label text-black/60">Current Sprint</span>
            <h2 className="text-4xl font-black leading-none tracking-tighter mb-4">Revamp Mobile Core Onboarding Flow</h2>
            <div className="bento-pill bg-black text-white">Priority: High</div>
          </div>
          <div className="flex justify-between items-end mt-8">
            <div>
              <span className="bento-label text-black/60">Completion</span>
              <div className="text-7xl font-black tracking-tighter">68%</div>
            </div>
            <div className="w-32 h-2 bg-black/10 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-black w-[68%]" />
            </div>
          </div>
        </div>

        {/* Stats Cards as Bento Items */}
        {stats.map((stat, idx) => (
          <div key={idx} className="bento-card flex flex-col justify-between">
            <div>
              <span className="bento-label">{stat.name}</span>
              <div className="text-3xl font-black tracking-tighter">{stat.value}</div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className={stat.bg + " p-2 rounded-lg"}>
                <stat.icon className={stat.color + " w-5 h-5"} />
              </div>
              <div className={`flex items-center text-xs font-bold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="ml-1 w-3 h-3" /> : <ArrowDownRight className="ml-1 w-3 h-3" />}
              </div>
            </div>
          </div>
        ))}

        {/* Financial Overview */}
        <div className="bento-card md:col-span-2">
          <span className="bento-label">Financial Overview</span>
          <div className="h-[200px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700 }} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1.5px solid #000', boxShadow: 'none' }}
                />
                <Bar dataKey="income" fill="#000" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expense" fill="#E7FF4D" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bento-card md:col-span-2 md:row-span-2">
          <span className="bento-label">Recent Activity</span>
          <div className="space-y-4 mt-4">
            {[
              { user: 'Omar Farooq', action: 'registered', time: '2h ago', icon: UserSquare2, color: 'bg-blue-100 text-blue-600' },
              { user: 'John Doe', action: 'donated $500', time: '5h ago', icon: HeartHandshake, color: 'bg-accent/10 text-accent' },
              { user: 'Ahmed Khan', action: 'complaint', time: '1d ago', icon: MessageSquare, color: 'bg-red-100 text-red-600' },
              { user: 'Fatima Ali', action: 'report updated', time: '1d ago', icon: Wallet, color: 'bg-green-100 text-green-600' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl border-[1.5px] border-transparent hover:border-black transition-all">
                <div className={item.color + " p-2 rounded-lg"}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">
                    {item.user} <span className="font-normal opacity-60">{item.action}</span>
                  </p>
                  <p className="text-[10px] uppercase font-bold opacity-40">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donation Trends */}
        <div className="bento-card md:col-span-2">
          <span className="bento-label">Donation Trends</span>
          <div className="h-[150px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={donationData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1.5px solid #000', boxShadow: 'none' }}
                />
                <Area type="monotone" dataKey="amount" stroke="#000" fillOpacity={1} fill="url(#colorAmount)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
