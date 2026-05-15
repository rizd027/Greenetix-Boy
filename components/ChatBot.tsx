"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User, Sparkles } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            // Lock body scroll on mobile when chat is open
            if (window.innerWidth < 640) {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [messages, isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            const data = await response.json();
            if (data.choices?.[0]?.message) {
                setMessages((prev) => [...prev, { role: "assistant", content: data.choices[0].message.content }]);
            } else {
                throw new Error("Invalid response");
            }
        } catch (error) {
            setMessages((prev) => [...prev, { role: "assistant", content: "Maaf, sedang ada gangguan teknis. Silakan coba lagi nanti." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative">
            <AnimatePresence>
                {isOpen && (
                    <div
                        className="fixed sm:absolute inset-0 sm:inset-auto sm:right-0 sm:bottom-16 md:sm:bottom-20 w-full sm:w-[380px] h-full sm:h-[500px] bg-white rounded-none sm:rounded-[2rem] shadow-2xl border-0 sm:border sm:border-primary-100 flex flex-col overflow-hidden z-[9999] sm:z-auto"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                    <Bot className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-lg leading-none mb-1 uppercase tracking-wider">Greeny AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Online Now</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-4 bg-slate-50/50 custom-scrollbar">
                            {messages.length === 0 && (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-primary-50 rounded-3xl flex items-center justify-center mx-auto mb-4">
                                        <Sparkles className="text-primary-500 w-8 h-8" />
                                    </div>
                                    <h4 className="font-black text-primary-900 uppercase mb-2">Halo! Saya Greeny</h4>
                                    <p className="text-gray-500 text-xs font-medium leading-relaxed px-10">
                                        Ada yang bisa saya bantu terkait pengolahan limbah popok atau Greenetix Indonesia?
                                    </p>
                                </div>
                            )}
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                                        msg.role === "user" 
                                            ? "bg-primary-600 text-white rounded-tr-none shadow-lg shadow-primary-600/20" 
                                            : "bg-white text-gray-800 rounded-tl-none shadow-md border border-slate-100"
                                    }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-md">
                                        <Loader2 className="w-5 h-5 text-primary-500 animate-spin" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Tulis pertanyaan..."
                                className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="bg-primary-600 text-white p-3 rounded-xl shadow-lg hover:bg-primary-700 transition-all disabled:opacity-50 disabled:scale-95 active:scale-90"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-red-500 text-white rotate-90" : "bg-primary-600 text-white"
                }`}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                
                {/* Notification Badge */}
                {!isOpen && messages.length === 0 && (
                    <span className="absolute top-0 right-0 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-500"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
