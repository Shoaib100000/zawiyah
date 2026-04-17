import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, 
  UserSquare2, 
  Wallet, 
  HeartHandshake, 
  MessageSquare, 
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const features = [
    { name: 'Staff Management', icon: Users, desc: 'Manage staff records, salaries, and attendance with ease.' },
    { name: 'Student Tracking', icon: UserSquare2, desc: 'Keep track of student progress, classes, and attendance.' },
    { name: 'Finance Control', icon: Wallet, desc: 'Monitor income and expenses with detailed reports.' },
    { name: 'Donation System', icon: HeartHandshake, desc: 'Manage donor relations and track contributions.' },
    { name: 'Communication', icon: MessageSquare, desc: 'Integrated chat and complaint management system.' },
    { name: 'Secure & Reliable', icon: ShieldCheck, desc: 'Role-based access control and secure data storage.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar (Newsletter) */}
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#1A6FB3] py-3 px-4 shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-white">
            <Mail className="w-4 h-4 text-[#F4C430]" />
            <span className="text-sm font-medium tracking-wide">Subscribe to our newsletter for the latest updates on "Fruits of Knowledge"</span>
          </div>
          <div className="flex w-full md:w-auto items-center bg-white/10 rounded-full p-1 border border-white/20">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none focus:ring-0 text-white text-sm px-4 py-1 w-full md:w-64 placeholder:text-white/60"
            />
            <motion.button 
              whileHover={{ y: -2, scale: 1.02, boxShadow: "0 0 20px rgba(244,196,48,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F4C430] text-[#0B0F19] px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center"
            >
              Subscribe <Send className="ml-2 w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-[1.5px] border-black rounded-2xl mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-black rounded-full" />
            <span className="text-xl font-black tracking-tighter uppercase">Zawiyah</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-black transition-colors">
              <a href="/login">Login</a>
            </Button>
            <Button asChild className="rounded-xl border-[1.5px] border-black shadow-none font-bold uppercase tracking-widest text-xs">
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-accent border-[1.5px] border-black rounded-[32px] p-8 md:p-16 lg:flex lg:items-center lg:space-x-12 mb-8">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bento-pill bg-black text-white mb-6"
            >
              New Release v2.0
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black tracking-tighter text-black md:text-7xl leading-[0.9] flex flex-col"
            >
              <span className="flex items-center gap-4">
                <Sparkles className="w-10 h-10 md:w-16 md:h-16 text-black opacity-20" />
                Manage Your
              </span>
              Zawiyah <span className="opacity-40">Smartly</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-lg font-bold text-black/70 max-w-xl leading-tight"
            >
              The all-in-one management platform for educational institutions. 
              Streamline your operations, track finances, and engage with your community.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" className="px-8 rounded-2xl border-[1.5px] border-black shadow-none font-black uppercase tracking-widest" asChild>
                <Link to="/login">Start Free Trial <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 rounded-2xl border-[1.5px] border-black shadow-none font-black uppercase tracking-widest bg-white">View Demo</Button>
            </motion.div>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-black/5 rounded-[40px] blur-2xl group-hover:bg-black/10 transition-all duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1542751110-97646af1f56d?q=80&w=1200&auto=format&fit=crop" 
                alt="Zawiyah Institution Landscape" 
                className="relative rounded-[32px] border-[1.5px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full object-cover aspect-[4/3] lg:aspect-square"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bento-card bg-white p-4 hidden md:block w-48 shadow-lg border-black">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-tighter">System Online</span>
                </div>
                <div className="text-xl font-black tracking-tighter">2.4k+</div>
                <div className="text-[8px] font-bold uppercase opacity-60">Active Students</div>
              </div>
              <div className="absolute top-4 right-4 bento-pill bg-white/90 backdrop-blur-md text-black border-black font-black uppercase text-[10px] tracking-widest">
                Established 1998
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bento-card bg-white flex flex-col justify-center sm:col-span-2 lg:col-span-1">
              <span className="bento-label">Features</span>
              <h2 className="text-4xl font-black tracking-tighter leading-none">Everything you need to succeed</h2>
            </div>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bento-card bg-white"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-black tracking-tight mb-2 uppercase">{feature.name}</h3>
                <p className="text-muted-foreground font-medium leading-tight">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="grid gap-6 md:grid-cols-3 mb-8">
          {[
            { step: '01', title: 'Create Account', desc: 'Sign up and set up your institution profile in minutes.' },
            { step: '02', title: 'Add Your Data', desc: 'Import staff, students, and financial records easily.' },
            { step: '03', title: 'Start Managing', desc: 'Get real-time insights and manage everything from one place.' },
          ].map((item, idx) => (
            <div key={idx} className="bento-card bg-white relative overflow-hidden">
              <span className="text-8xl font-black text-black/5 absolute -bottom-4 -right-4 leading-none">{item.step}</span>
              <span className="bento-label">Step {item.step}</span>
              <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase relative z-10">{item.title}</h3>
              <p className="text-muted-foreground font-medium relative z-10">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-black rounded-[32px] p-12 text-center text-white relative overflow-hidden mb-8">
          <h2 className="text-4xl font-black md:text-6xl tracking-tighter leading-none mb-6">Ready to transform <br />your Zawiyah?</h2>
          <p className="text-white/60 font-bold max-w-2xl mx-auto mb-10">
            Join hundreds of institutions already using Zawiyah to streamline their operations.
          </p>
          <Button size="lg" className="px-10 rounded-2xl bg-accent text-black hover:bg-accent/90 border-none font-black uppercase tracking-widest" asChild>
            <Link to="/login">Get Started Now</Link>
          </Button>
        </section>
      </div>

      {/* Three-Tier Footer */}
      <footer className="bg-[#0B0F19] text-white pt-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {/* About Column */}
            <div className="space-y-6">
              <h3 className="text-[#F4C430] font-bold uppercase tracking-[0.2em] text-sm">About Zawiyah</h3>
              <p className="text-white/70 leading-[1.8] text-sm">
                Zawiyah is a modern management platform dedicated to empowering educational institutions. 
                We believe in the <span className="text-[#F4C430] font-bold">"Fruits of Knowledge"</span> and strive to provide 
                the tools necessary for spiritual and academic growth.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#F4C430] rounded-full" />
                <span className="font-black uppercase tracking-tighter text-lg">Zawiyah</span>
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h3 className="text-[#F4C430] font-bold uppercase tracking-[0.2em] text-sm">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-[#F4C430] shrink-0 mt-1" />
                  <span className="text-white/70 text-sm leading-[1.8] group-hover:text-white transition-colors">
                    123 Knowledge Way, Spiritual District<br />Karachi, Pakistan
                  </span>
                </li>
                <li className="flex items-center space-x-3 group cursor-pointer">
                  <Phone className="w-5 h-5 text-[#F4C430] shrink-0" />
                  <span className="text-white/70 text-sm leading-[1.8] group-hover:text-white transition-colors">
                    03007770975
                  </span>
                </li>
                <li className="flex items-center space-x-3 group cursor-pointer">
                  <Mail className="w-5 h-5 text-[#F4C430] shrink-0" />
                  <span className="text-white/70 text-sm leading-[1.8] group-hover:text-white transition-colors">
                    hello@zawiyah.app
                  </span>
                </li>
              </ul>
            </div>

            {/* Useful Links Column */}
            <div className="space-y-6">
              <h3 className="text-[#F4C430] font-bold uppercase tracking-[0.2em] text-sm">Useful Links</h3>
              <ul className="space-y-3">
                {['Dashboard', 'Staff Portal', 'Student Resources', 'Donation Center', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <motion.a 
                      href="#"
                      whileHover={{ x: 5, color: "#F4C430" }}
                      className="text-white/70 text-sm leading-[1.8] block transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: "#F4C430", color: "#0B0F19" }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              © 2026 Zawiyah. All rights reserved. <span className="mx-2">|</span> Built for the <span className="text-[#F4C430]">Ummah</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
