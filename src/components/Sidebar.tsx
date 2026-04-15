import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  CalendarCheck, 
  FileText, 
  Wallet, 
  HeartHandshake, 
  MessageSquare, 
  Files, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '@/src/AuthContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', roles: ['superadmin', 'zawiyah_admin', 'staff', 'student', 'donor'] },
    { name: 'Staff', icon: Users, path: '/staff', roles: ['superadmin', 'zawiyah_admin'] },
    { name: 'Students', icon: UserSquare2, path: '/students', roles: ['superadmin', 'zawiyah_admin', 'staff'] },
    { name: 'Attendance', icon: CalendarCheck, path: '/attendance', roles: ['superadmin', 'zawiyah_admin', 'staff', 'student'] },
    { name: 'Leaves', icon: FileText, path: '/leaves', roles: ['superadmin', 'zawiyah_admin', 'staff', 'student'] },
    { name: 'Finance', icon: Wallet, path: '/finance', roles: ['superadmin', 'zawiyah_admin'] },
    { name: 'Donations', icon: HeartHandshake, path: '/donations', roles: ['superadmin', 'zawiyah_admin', 'donor'] },
    { name: 'Chat & Complaints', icon: MessageSquare, path: '/chat', roles: ['superadmin', 'zawiyah_admin', 'staff', 'student', 'donor'] },
    { name: 'Files', icon: Files, path: '/files', roles: ['superadmin', 'zawiyah_admin', 'donor'] },
    { name: 'Settings', icon: Settings, path: '/settings', roles: ['superadmin', 'zawiyah_admin', 'staff', 'student', 'donor'] },
  ];

  const filteredNavItems = navItems.filter(item => user && item.roles.includes(user.role));

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r-[1.5px] border-black transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-20 px-6 border-b-[1.5px] border-black">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-black rounded-full" />
              <span className="text-xl font-black tracking-tighter uppercase">Zawiyah</span>
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 px-4 py-6">
            <nav className="space-y-2">
              {filteredNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "flex items-center px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl transition-all border-[1.5px] border-transparent",
                    isActive 
                      ? "bg-secondary text-black border-black" 
                      : "text-muted-foreground hover:bg-black/5 hover:text-black"
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </ScrollArea>

          <div className="p-4 border-t">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={logout}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
