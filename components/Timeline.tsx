"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Flag, Lightbulb, Rocket, Target, History, Route, Milestone, Map, MapPin, Compass, Timer, Award, LineChart, Globe, Zap, Leaf, Sprout, Wind, Mountain, Footprints, Hourglass } from "lucide-react";

const milestones = [
    {
        year: "2023",
        title: "Ideasi & Riset Dasar",
        description: "Penelitian awal tentang potensi pemanfaatan limbah popok bayi dan pengembangan formula awal pupuk.",
        icon: Lightbulb,
        status: "completed"
    },
    {
        year: "2024 (Awal)",
        title: "Prototipe & Uji Coba",
        description: "Pembuatan prototipe mesin sterilisasi dan pengolahan tahap pertama dengan skala laboratorium.",
        icon: Target,
        status: "completed"
    },
    {
        year: "2024 (Akhir)",
        title: "Pilot Project Sukoharjo",
        description: "Implementasi titik pengumpulan pertama dan distribusi produk PUPO ke petani lokal.",
        icon: CheckCircle2,
        status: "completed"
    },
    {
        year: "2025",
        title: "Shell LiveWire Bootcamp",
        description: "Terpilih sebagai salah satu inovasi berkelanjutan terbaik untuk mengikuti akselerasi bisnis nasional.",
        icon: Flag,
        status: "current"
    },
    {
        year: "Masa Depan",
        title: "Ekspansi Nasional",
        description: "Membangun pusat transformasi limbah di berbagai kota untuk dampak lingkungan yang lebih luas.",
        icon: Rocket,
        status: "future"
    }
];

export default function Timeline() {
    return (
        <section id="journey" className="min-h-screen flex flex-col justify-center py-12 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Gradient Blobs - Optimized for mobile */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -left-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-400/20 rounded-full blur-[60px] md:blur-[120px]"
                />
                
                {/* Large Background Text - static with whileInView opacity */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full text-center">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-[120px] md:text-[240px] font-black text-white/5 tracking-[-0.05em] leading-none uppercase select-none"
                    >
                        JOURNEY
                    </motion.span>
                </div>

                {/* Floating Icons (Hidden on mobile for performance) */}
                <div className="hidden md:block absolute inset-0 opacity-[0.06]">
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[10%] left-[10%]"><History size={120} /></motion.div>
                    <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-[40%] right-[5%]"><Route size={100} /></motion.div>
                    <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 14, repeat: Infinity }} className="absolute bottom-[20%] left-[15%]"><Globe size={110} /></motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[10%] right-[10%]"><Milestone size={90} /></motion.div>
                </div>
            </div>

            {/* Header */}
            <div className="relative z-10 pt-4 pb-12 md:pt-12 md:pb-20 text-center">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-primary-100 text-[10px] md:text-sm font-black mb-6 uppercase tracking-[0.2em] shadow-xl">
                        <Route size={14} className="text-primary-300" />
                        Our Roadmap
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                        Perjalanan Kami
                    </h2>
                    <div className="w-16 h-1.5 bg-primary-400 rounded-full mb-6"></div>
                    <p className="text-[11px] md:text-xl text-primary-100/80 max-w-2xl mx-auto font-bold uppercase tracking-[0.15em] leading-relaxed">
                        Dari keresahan menjadi solusi nyata<br className="md:hidden" /> untuk bumi yang lebih hijau.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-0">

                <div className="relative max-w-5xl mx-auto px-2 md:px-0">
                    {/* Vertical Line - Left on mobile, Center on desktop */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 md:w-1 bg-gradient-to-b from-primary-400/20 via-primary-400 to-primary-400/20"></div>

                    <div className="space-y-8 md:space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className={`relative flex flex-row md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Card */}
                                <div className="w-full md:w-5/12 ml-10 md:ml-0">
                                    <div className={`p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl backdrop-blur-xl transition-all duration-500 border-2 ${item.status === 'current'
                                        ? 'bg-white/20 border-primary-400 scale-[1.02] md:scale-105 shadow-primary-500/20'
                                        : item.status === 'completed'
                                            ? 'bg-white/10 border-white/10'
                                            : 'bg-white/5 border-white/5 opacity-50'
                                        }`}>
                                        <div className="flex items-center gap-3 mb-2 md:mb-4">
                                            <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider ${item.status === 'current'
                                                ? 'bg-primary-500 text-white animate-pulse'
                                                : item.status === 'completed'
                                                    ? 'bg-primary-800 text-primary-100'
                                                    : 'bg-white/10 text-white/40'
                                                }`}>
                                                {item.year}
                                            </span>
                                        </div>
                                        <h3 className="text-sm md:text-2xl font-black text-white mb-1.5 md:mb-3 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-primary-100/80 leading-relaxed text-[11px] md:text-base font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon - Absolutely positioned on mobile to stay on the line */}
                                <div className="absolute left-6 md:relative md:left-0 z-10 flex items-center justify-center transform -translate-x-1/2 md:translate-x-0">
                                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md md:shadow-lg transition-all duration-500 ${item.status === 'current'
                                        ? 'bg-primary-500 text-white scale-110 md:scale-125 ring-4 ring-primary-500/30'
                                        : item.status === 'completed'
                                            ? 'bg-primary-400 text-primary-900 shadow-xl'
                                            : 'bg-primary-900 border-2 border-primary-800 text-primary-700'
                                        }`}>
                                        <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                </div>

                                {/* Placeholder for balance */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
