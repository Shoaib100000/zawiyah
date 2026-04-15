import React, { useState, useEffect, useRef } from 'react';
import { Send, User, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/src/AuthContext';
import socket from '@/src/lib/socket';
import { ChatMessage, Complaint } from '@/src/types';
import { MOCK_COMPLAINTS } from '@/src/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const ChatPage = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on('message', (message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !user) return;

    const newMessage: ChatMessage = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user.id,
      userName: user.name,
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    socket.emit('message', newMessage);
    setInputText('');
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <Tabs defaultValue="chat" className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="chat">Community Chat</TabsTrigger>
            <TabsTrigger value="complaints">Complaints</TabsTrigger>
          </TabsList>
          {user?.role !== 'superadmin' && user?.role !== 'zawiyah_admin' && (
            <Button size="sm">
              <AlertCircle className="w-4 h-4 mr-2" /> New Complaint
            </Button>
          )}
        </div>

        <TabsContent value="chat" className="flex-1 min-h-0">
          <Card className="h-full flex flex-col border-none shadow-sm overflow-hidden">
            <CardHeader className="border-b bg-white py-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Zawiyah Community</CardTitle>
                  <CardDescription>Real-time discussion with staff and students</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center py-10 text-muted-foreground">
                      <p>No messages yet. Start the conversation!</p>
                    </div>
                  )}
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.userId === user?.id ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex max-w-[80%] ${msg.userId === user?.id ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{msg.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className={`p-3 rounded-2xl text-sm ${
                          msg.userId === user?.id 
                            ? 'bg-primary text-white rounded-br-none' 
                            : 'bg-secondary text-foreground rounded-bl-none'
                        }`}>
                          {msg.userId !== user?.id && (
                            <p className="font-bold text-xs mb-1 opacity-70">{msg.userName}</p>
                          )}
                          <p>{msg.text}</p>
                          <p className={`text-[10px] mt-1 text-right ${
                            msg.userId === user?.id ? 'text-white/70' : 'text-muted-foreground'
                          }`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <form onSubmit={handleSendMessage} className="p-4 border-t bg-white flex space-x-2">
                <Input 
                  placeholder="Type your message..." 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complaints" className="flex-1 min-h-0">
          <Card className="h-full border-none shadow-sm overflow-hidden">
            <CardHeader className="border-b bg-white">
              <CardTitle>Complaints & Feedback</CardTitle>
              <CardDescription>Track and manage issues reported by the community.</CardDescription>
            </CardHeader>
            <ScrollArea className="h-full">
              <CardContent className="p-4 space-y-4">
                {MOCK_COMPLAINTS.map((complaint) => (
                  <div key={complaint.id} className="p-4 border rounded-xl hover:bg-secondary/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold">{complaint.title}</h4>
                          <Badge variant={complaint.status === 'resolved' ? 'secondary' : 'outline'} className="capitalize">
                            {complaint.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{complaint.description}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{complaint.date}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback>{complaint.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">{complaint.userName}</span>
                      </div>
                      {(user?.role === 'superadmin' || user?.role === 'zawiyah_admin') && complaint.status === 'pending' && (
                        <Button size="sm" variant="outline" className="h-8">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Mark Resolved
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </ScrollArea>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChatPage;
