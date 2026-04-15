import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/src/AuthContext';
import { UserRole } from '@/src/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AuthPage = () => {
  const [role, setRole] = useState<UserRole>('superadmin');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-black rounded-full" />
            <span className="text-2xl font-black tracking-tighter uppercase">Zawiyah</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">Welcome Back</h1>
          <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest mt-2">Enter your credentials to continue</p>
        </div>

        <div className="bento-card bg-white">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 rounded-xl border-[1.5px] border-black">
              <TabsTrigger value="login" className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold uppercase text-xs tracking-widest">Login</TabsTrigger>
              <TabsTrigger value="signup" className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold uppercase text-xs tracking-widest">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <span className="bento-label">Email Address</span>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    className="rounded-xl border-[1.5px] border-black focus-visible:ring-0 focus-visible:border-black font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bento-label">Password</span>
                    <Button variant="link" className="px-0 font-bold text-[10px] uppercase tracking-widest h-auto">Forgot?</Button>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    className="rounded-xl border-[1.5px] border-black focus-visible:ring-0 focus-visible:border-black font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <span className="bento-label">Select Role (Demo)</span>
                  <Select value={role} onValueChange={(v) => setRole(v as UserRole)}>
                    <SelectTrigger className="rounded-xl border-[1.5px] border-black focus:ring-0 font-bold">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[1.5px] border-black shadow-none">
                      <SelectItem value="superadmin" className="font-bold uppercase text-[10px] tracking-widest">Super Admin</SelectItem>
                      <SelectItem value="zawiyah_admin" className="font-bold uppercase text-[10px] tracking-widest">Zawiyah Admin</SelectItem>
                      <SelectItem value="staff" className="font-bold uppercase text-[10px] tracking-widest">Staff / Teacher</SelectItem>
                      <SelectItem value="student" className="font-bold uppercase text-[10px] tracking-widest">Student</SelectItem>
                      <SelectItem value="donor" className="font-bold uppercase text-[10px] tracking-widest">Donor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full rounded-xl border-[1.5px] border-black shadow-none font-black uppercase tracking-widest py-6">
                  Sign In
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <span className="bento-label">Full Name</span>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="rounded-xl border-[1.5px] border-black focus-visible:ring-0 focus-visible:border-black font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <span className="bento-label">Email Address</span>
                  <Input 
                    id="signup-email" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    className="rounded-xl border-[1.5px] border-black focus-visible:ring-0 focus-visible:border-black font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <span className="bento-label">Password</span>
                  <Input 
                    id="signup-password" 
                    type="password" 
                    required 
                    className="rounded-xl border-[1.5px] border-black focus-visible:ring-0 focus-visible:border-black font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <span className="bento-label">I am a...</span>
                  <Select value={role} onValueChange={(v) => setRole(v as UserRole)}>
                    <SelectTrigger className="rounded-xl border-[1.5px] border-black focus:ring-0 font-bold">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[1.5px] border-black shadow-none">
                      <SelectItem value="zawiyah_admin" className="font-bold uppercase text-[10px] tracking-widest">Zawiyah Admin</SelectItem>
                      <SelectItem value="staff" className="font-bold uppercase text-[10px] tracking-widest">Staff / Teacher</SelectItem>
                      <SelectItem value="student" className="font-bold uppercase text-[10px] tracking-widest">Student</SelectItem>
                      <SelectItem value="donor" className="font-bold uppercase text-[10px] tracking-widest">Donor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full rounded-xl border-[1.5px] border-black shadow-none font-black uppercase tracking-widest py-6">
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t-[1.5px] border-black opacity-10" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="outline" className="rounded-xl border-[1.5px] border-black shadow-none font-bold uppercase text-[10px] tracking-widest py-4">Google</Button>
              <Button variant="outline" className="rounded-xl border-[1.5px] border-black shadow-none font-bold uppercase text-[10px] tracking-widest py-4">GitHub</Button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">
          By clicking continue, you agree to our <br />
          <a href="#" className="text-black underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-black underline underline-offset-4">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
