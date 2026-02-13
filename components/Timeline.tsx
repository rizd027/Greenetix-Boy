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
        <section id="journey" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">Perjalanan Kami</h2>
                    <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                        Dari keresahan menjadi solusi nyata untuk bumi yang lebih hijau.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 md:px-0">
                    {/* Vertical Line - Left on mobile, Center on desktop */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600/20 via-primary-600 to-primary-600/20"></div>

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Card */}
                                <div className="w-full md:w-5/12">
                                    <div className={`p-8 rounded-3xl shadow-xl transition-all duration-500 border-2 ${item.status === 'current'
                                        ? 'bg-primary-50 border-primary-300 scale-105 shadow-primary-100'
                                        : item.status === 'completed'
                                            ? 'bg-white border-transparent'
                                            : 'bg-gray-50 border-gray-100 opacity-70'
                                        }`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'current'
                                                ? 'bg-primary-600 text-white animate-pulse'
                                                : item.status === 'completed'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-gray-200 text-gray-500'
                                                }`}>
                                                {item.year}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="z-10 flex items-center justify-center my-6 md:my-0">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${item.status === 'current'
                                        ? 'bg-primary-600 text-white scale-125 ring-4 ring-primary-100'
                                        : item.status === 'completed'
                                            ? 'bg-primary-800 text-white'
                                            : 'bg-gray-200 text-gray-500'
                                        }`}>
                                        <item.icon size={20} />
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
