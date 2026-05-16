"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Send, Bot, Sparkles, Zap, DollarSign, HelpCircle, X } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const QUICK_ACTIONS = [
    { icon: <HelpCircle size={15} />, text: "Apa itu Greenetix?" },
    { icon: <Zap size={15} />, text: "Cara olah limbah popok" },
    { icon: <DollarSign size={15} />, text: "Harga layanan?" },
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Parse markdown sederhana jadi JSX bersih (hapus #, **, *, dll.)
    const formatMessage = (text: string): React.ReactNode[] => {
        const lines = text.split("\n");
        return lines.map((line, i) => {
            // Hapus heading markdown (#, ##, ###)
            let clean = line.replace(/^#{1,6}\s+/, "");
            // Ubah **bold** → <strong>
            const parts = clean.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
            const rendered = parts.map((part, j) => {
                if (/^\*\*(.+)\*\*$/.test(part)) return <strong key={j}>{part.slice(2, -2)}</strong>;
                if (/^\*(.+)\*$/.test(part)) return <em key={j}>{part.slice(1, -1)}</em>;
                // Hapus sisa simbol * tunggal
                return part.replace(/\*/g, "");
            });
            return (
                <span key={i} className={i > 0 ? "block mt-1" : ""}>{rendered}</span>
            );
        });
    };

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
                // Tidak auto-focus agar keyboard mobile tidak langsung muncul
            }, 50);
        }
    }, [messages, isLoading, isOpen]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;
        const userMessage: Message = { role: "user", content: text };
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
            } else throw new Error("Invalid response");
        } catch {
            setMessages((prev) => [...prev, { role: "assistant", content: "Maaf, sedang ada gangguan teknis. Silakan coba lagi nanti." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(input);
    };

    // ─── Chat Window (Portal ke document.body) ────────────────────────────────
    const chatWindow = (
        <>
            {isOpen && (
                /*
                 * MOBILE: full-screen menggunakan style inline agar tunduk pada
                 * window.innerHeight yang akurat (bukan 100dvh / 100vh CSS).
                 * DESKTOP (sm+): panel samping kanan bawah 420×600 px.
                 */
                <div
                    className="fixed z-[99999] flex flex-col bg-slate-50
                               inset-0 sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[400px] sm:shadow-2xl sm:border-l sm:border-slate-200"
                >
                    {/* ── Header ─────────────────────────────────────── */}
                    <div className="shrink-0 flex items-center justify-between px-5 py-4 bg-white border-b border-slate-100 shadow-sm relative overflow-hidden">
                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none opacity-60" />

                        <div className="flex items-center gap-3 relative z-10">
                            <div className="relative shrink-0">
                                <div className="w-11 h-11 bg-gradient-to-tr from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-md shadow-primary-500/20">
                                    <Bot className="text-white w-6 h-6" />
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white block shadow-sm" />
                            </div>
                            <div>
                                <h3 className="text-slate-800 font-extrabold text-[17px] leading-tight tracking-tight">Greeny AI</h3>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                                        <span className="text-green-600 text-[10px] font-black tracking-widest uppercase">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tombol tutup */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 active:bg-slate-200 text-slate-500 transition-colors"
                        >
                            <X size={18} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* ── Area Pesan ─────────────────────────────────── */}
                    <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 space-y-4">
                        {/* State kosong */}
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center text-center pt-6 pb-4">
                                <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center mb-5 border border-primary-100">
                                    <Sparkles className="text-primary-500 w-10 h-10" />
                                </div>
                                <h4 className="font-black text-slate-800 text-xl mb-2">Halo! Saya Greeny 👋</h4>
                                <p className="text-slate-500 text-sm leading-relaxed px-2 mb-8">
                                    Saya siap membantu Anda terkait pengolahan limbah popok dan layanan Greenetix Indonesia.
                                </p>

                                {/* Quick actions */}
                                <div className="w-full space-y-2">
                                    {QUICK_ACTIONS.map((action, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSendMessage(action.text)}
                                            className="w-full flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm hover:border-primary-300 hover:bg-primary-50 active:scale-[0.98] transition-all text-left"
                                        >
                                            <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                                {action.icon}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-700">{action.text}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Bubble pesan */}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[82%] px-4 py-3 text-[15px] leading-relaxed rounded-2xl ${msg.role === "user"
                                        ? "bg-primary-600 text-white rounded-tr-sm font-medium shadow-sm"
                                        : "bg-white text-slate-800 rounded-tl-sm border border-slate-100 shadow-sm"
                                    }`}>
                                    {msg.role === "assistant" ? formatMessage(msg.content) : msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Indikator mengetik */}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                                    {[0, 0.2, 0.4].map((delay, i) => (
                                        <span
                                            key={i}
                                            className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
                                            style={{ animationDelay: `${delay}s` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* ── Input ──────────────────────────────────────── */}
                    <div
                        className="shrink-0 bg-white border-t border-slate-100 px-3 py-3"
                        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
                    >
                        <form onSubmit={onSubmit} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ketik pesan..."
                                className="flex-1 bg-transparent text-[15px] text-slate-800 placeholder:text-slate-400 focus:outline-none font-medium py-1"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="w-10 h-10 bg-primary-600 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl flex items-center justify-center shrink-0 active:scale-95 transition-all"
                            >
                                <Send size={16} className="translate-x-[1px]" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );

    return (
        <div className="relative">
            {mounted && createPortal(chatWindow, document.body)}

            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center transition-all active:scale-95 relative ${isOpen
                        ? "bg-slate-800 text-white"
                        : "bg-gradient-to-tr from-primary-600 to-primary-500 text-white"
                    }`}
            >
                <Bot size={26} strokeWidth={2} />
                {!isOpen && messages.length === 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white" />
                    </span>
                )}
            </button>
        </div>
    );
}
