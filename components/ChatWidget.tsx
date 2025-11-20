import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/gemini';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi, I'm Eva's AI assistant. Ask me anything about her work or availability." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      // Create a placeholder for the model's response
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);
      
      const stream = sendMessageToGemini(userText);
      let fullResponse = '';

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'model' && lastMessage.isStreaming) {
            lastMessage.text = fullResponse;
          }
          return newMessages;
        });
      }

      // Mark streaming as done
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage.role === 'model') {
          lastMessage.isStreaming = false;
        }
        return newMessages;
      });

    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <div className="relative">
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
        </div>
      </button>

      <div className={`fixed bottom-8 right-8 w-[90vw] md:w-[400px] bg-white rounded-2xl shadow-2xl z-50 transition-all duration-500 origin-bottom-right border border-gray-100 overflow-hidden flex flex-col ${isOpen ? 'scale-100 opacity-100 h-[500px]' : 'scale-0 opacity-0 h-0'}`}>
        {/* Header */}
        <div className="bg-brand-black text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles size={18} className="text-yellow-200" />
            <span className="font-medium">Ask Eva (AI)</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-brand-black text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'}`}>
                {msg.text}
                {msg.isStreaming && <span className="inline-block w-1 h-4 ml-1 bg-gray-400 animate-pulse align-middle"></span>}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects, skills..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isTyping}
            className="p-2 bg-brand-black text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;