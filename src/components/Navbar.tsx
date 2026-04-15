import React from 'react';
import { Bell, Search, Menu, User } from 'lucide-react';
import { useAuth } from '@/src/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// I need to add dropdown-menu component from shadcn
// I'll do that in a moment.

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-20 px-4 bg-background/80 backdrop-blur-md border-b-[1.5px] border-black lg:px-8">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-4 lg:hidden border-[1.5px] border-black rounded-xl" onClick={onMenuClick}>
          <Menu className="w-5 h-5" />
        </Button>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 text-sm bg-white rounded-xl border-[1.5px] border-black focus:ring-0 focus:border-black w-64 font-bold"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative border-[1.5px] border-black rounded-xl">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-[1.5px] border-black" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-auto px-2 rounded-xl border-[1.5px] border-black flex items-center space-x-2">
              <Avatar className="h-6 w-6 border-[1.5px] border-black">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback className="text-[10px] font-bold">{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-xs font-black uppercase tracking-tighter hidden sm:block">{user?.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 rounded-2xl border-[1.5px] border-black shadow-none mt-2" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-black leading-none uppercase tracking-tighter">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground font-bold italic">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-black" />
            <DropdownMenuItem className="rounded-lg focus:bg-secondary focus:text-black font-bold uppercase text-xs tracking-widest" onClick={() => window.location.href = '/settings'}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg focus:bg-secondary focus:text-black font-bold uppercase text-xs tracking-widest" onClick={() => window.location.href = '/settings'}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-black" />
            <DropdownMenuItem className="rounded-lg focus:bg-destructive/10 focus:text-destructive font-bold uppercase text-xs tracking-widest" onClick={logout}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
