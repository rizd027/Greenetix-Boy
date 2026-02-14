"use client";

import { CheckCircle2, Circle, Flag, Lightbulb, Rocket, Target } from "lucide-react";

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
        <section id="journey" className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="text-2xl md:text-5xl font-black text-primary-800 mb-2 md:mb-3 uppercase tracking-tight">Perjalanan Kami</h2>
                    <p className="text-xs md:text-xl text-primary-600 max-w-2xl mx-auto px-2 md:px-4 font-medium leading-relaxed">
                        Dari keresahan menjadi solusi nyata untuk bumi yang lebih hijau.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto px-2 md:px-0">
                    {/* Vertical Line - Left on mobile, Center on desktop */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 md:w-1 bg-gradient-to-b from-primary-600/20 via-primary-600 to-primary-600/20"></div>

                    <div className="space-y-8 md:space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className={`relative flex flex-row md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Card */}
                                <div className="w-full md:w-5/12 ml-10 md:ml-0">
                                    <div className={`p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl transition-all duration-500 border-2 ${item.status === 'current'
                                        ? 'bg-primary-50 border-primary-300 scale-[1.02] md:scale-105 shadow-primary-100'
                                        : item.status === 'completed'
                                            ? 'bg-white border-transparent'
                                            : 'bg-gray-50 border-gray-100 opacity-70'
                                        }`}>
                                        <div className="flex items-center gap-3 mb-2 md:mb-4">
                                            <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider ${item.status === 'current'
                                                ? 'bg-primary-600 text-white animate-pulse'
                                                : item.status === 'completed'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-gray-200 text-gray-500'
                                                }`}>
                                                {item.year}
                                            </span>
                                        </div>
                                        <h3 className="text-sm md:text-2xl font-black text-primary-900 mb-1.5 md:mb-3 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-[11px] md:text-base font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon - Absolutely positioned on mobile to stay on the line */}
                                <div className="absolute left-6 md:relative md:left-0 z-10 flex items-center justify-center transform -translate-x-1/2 md:translate-x-0">
                                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md md:shadow-lg transition-all duration-500 ${item.status === 'current'
                                        ? 'bg-primary-600 text-white scale-110 md:scale-125 ring-4 ring-primary-100'
                                        : item.status === 'completed'
                                            ? 'bg-primary-800 text-white'
                                            : 'bg-gray-200 text-gray-500'
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
