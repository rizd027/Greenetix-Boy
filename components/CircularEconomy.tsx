"use client";

import { useState } from "react";
import { Recycle, Droplets, Zap, Truck, BookOpen, Target, Globe } from "lucide-react";

interface Step {
    id: number;
    name: string;
    icon: any;
    description: string;
    color: string;
    angle: number;
}

const steps: Step[] = [
    {
        id: 1,
        name: "PENGUMPULAN",
        icon: Recycle,
        description: "Pengumpulan limbah popok dari titik-titik pickup komunitas dan mitra rumah sakit secara rutin.",
        color: "#339966",
        angle: 0
    },
    {
        id: 2,
        name: "STERILISASI",
        icon: Droplets,
        description: "Proses pembersihan dan sterilisasi tingkat tinggi untuk memastikan bahan baku bebas kuman dan bau.",
        color: "#247a50",
        angle: 72
    },
    {
        id: 3,
        name: "TRANSFORMASI",
        icon: Zap,
        description: "Pengolahan limbah menjadi produk bernilai tinggi seperti pupuk (PUPO) dan bahan bakar (LIPOBAY).",
        color: "#1d6142",
        angle: 144
    },
    {
        id: 4,
        name: "DISTRIBUSI",
        icon: Truck,
        description: "Penyaluran produk ke petani, industri, dan masyarakat luas untuk mendukung keberlanjutan.",
        color: "#16402d",
        angle: 216
    },
    {
        id: 5,
        name: "EDUKASI",
        icon: BookOpen,
        description: "Edukasi berkelanjutan bagi masyarakat tentang pengelolaan limbah dan gaya hidup ekonomi sirkular.",
        color: "#55b582",
        angle: 288
    }
];

export default function CircularEconomy() {
    const [activeStep, setActiveStep] = useState<Step>(steps[0]);
    const [hoveredStep, setHoveredStep] = useState<Step | null>(null);

    const displayStep = hoveredStep || activeStep;

    return (
        <section id="circular-economy" className="py-24 bg-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream-50 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
                        Ekonomi Sirkular
                    </h2>
                    <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                        Siklus tertutup yang mengubah masalah limbah menjadi solusi keberlanjutan
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Interactive Diagram Side */}
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            {/* Central Rotating Border */}
                            <div
                                className="absolute inset-4 rounded-full border-[3px] border-dashed border-primary-200 animate-spin-slow pointer-events-none"
                                style={{ animationDuration: '30s' }}
                            ></div>

                            {/* Active Segment Arc */}
                            {/* Background Circle Arc */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-20" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    fill="none"
                                    stroke="#339966"
                                    strokeWidth="1"
                                    strokeDasharray="289"
                                    strokeDashoffset="0"
                                />
                            </svg>

                            {/* Active Segment Arc */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    fill="none"
                                    stroke="#339966"
                                    strokeWidth="3"
                                    strokeDasharray="57.8 231.2"
                                    strokeLinecap="round"
                                    className="transition-all duration-1000 ease-in-out"
                                    style={{
                                        transform: `rotate(${activeStep.angle}deg)`,
                                        transformOrigin: 'center'
                                    }}
                                />
                            </svg>

                            {/* Steps Icons */}
                            {steps.map((step) => {
                                const isActive = activeStep.id === step.id;
                                const isHovered = hoveredStep?.id === step.id;

                                return (
                                    <button
                                        key={step.id}
                                        onMouseEnter={() => setHoveredStep(step)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                        onClick={() => setActiveStep(step)}
                                        className="absolute z-20 transition-all duration-500 group"
                                        style={{
                                            transform: `rotate(${step.angle - 90}deg) translate(var(--radius, 220px)) rotate(${-(step.angle - 90)}deg)`,
                                            left: 'calc(50% - 20px)',
                                            top: 'calc(50% - 20px)',
                                            '--radius': '90px'
                                        } as any}
                                    >
                                        <div className={`w-10 h-10 md:w-20 md:h-20 rounded-[1.2rem] md:rounded-[2rem] flex items-center justify-center text-3xl md:text-4xl transition-all duration-500 shadow-xl md:[--radius:220px] ${isActive || isHovered
                                            ? 'bg-primary-600 text-white scale-110 -translate-y-1'
                                            : 'bg-white text-primary-600 hover:bg-primary-50 ring-1 ring-primary-100'
                                            }`}>
                                            <step.icon className={`w-4 h-4 md:w-10 md:h-10 transition-all duration-500 ${isActive || isHovered ? 'text-white' : 'text-primary-600'}`} />
                                        </div>
                                    </button>
                                );
                            })}

                            {/* Central Core */}
                            <div className="relative w-24 h-24 md:w-64 md:h-64 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center p-3 md:p-10 border-[3px] md:border-8 border-primary-50">
                                {/* Floating Active Label */}
                                <div className="absolute -top-10 md:-top-36 animate-bounce-slow z-30">
                                    <span className="text-[7px] md:text-xs font-black text-primary-600 tracking-[0.1em] md:tracking-[0.3em] uppercase bg-white px-2.5 py-1 md:px-5 md:py-2.5 rounded-full shadow-lg border border-primary-100 whitespace-nowrap">
                                        {displayStep.name}
                                    </span>
                                </div>

                                <div className="absolute inset-0 rounded-full bg-primary-500/5 animate-ping"></div>

                                <div className={`w-12 h-12 md:w-36 md:h-36 rounded-full bg-primary-700 flex items-center justify-center text-white mb-1 md:mb-4 shadow-2xl transform transition-all duration-500 ${hoveredStep ? 'scale-110' : 'scale-100'}`}>
                                    <displayStep.icon className="w-6 h-6 md:w-18 md:h-18" />
                                </div>

                                <h4 className="text-primary-800 font-black text-[9px] md:text-2xl leading-tight tracking-[0.05em] md:tracking-widest">
                                    SIRKULAR
                                </h4>
                                <p className="text-[5px] md:text-[12px] text-primary-500 font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase">EKONOMI</p>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="bg-gradient-to-br from-white to-primary-50 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-primary-100 relative min-h-[250px] md:min-h-[350px] flex flex-col transition-all duration-500">
                                <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-10 h-10 md:w-16 md:h-16 bg-primary-600 rounded-lg md:rounded-2xl flex items-center justify-center text-white shadow-xl animate-bounce-slow">
                                    <displayStep.icon size={20} className="md:w-8 md:h-8" />
                                </div>

                                <div className="mb-3 md:mb-8">
                                    <span className="text-[9px] md:text-sm font-black text-primary-500 tracking-[0.15em] uppercase mb-1.5 md:mb-4 block">
                                        Tahap {displayStep.id} dari 5
                                    </span>
                                    <h3 className="text-xl md:text-5xl font-black text-primary-800 mb-2 md:mb-6 drop-shadow-sm transition-all duration-300 uppercase">
                                        {displayStep.name}
                                    </h3>
                                    <div className="w-10 md:w-24 h-1 md:h-2 bg-primary-600 rounded-full mb-3 md:mb-8 shadow-sm"></div>
                                </div>

                                <p className="text-xs md:text-xl text-gray-700 leading-relaxed font-medium transition-all duration-500 opacity-90">
                                    {displayStep.description}
                                </p>

                                <div className="mt-auto pt-5 md:pt-10 flex flex-wrap gap-1.5 md:gap-4">
                                    <div className="px-2.5 py-1 md:px-4 md:py-2 bg-white rounded-full text-[9px] md:text-xs font-bold text-primary-700 shadow-sm border border-primary-100">
                                        Sustainable
                                    </div>
                                    <div className="px-2.5 py-1 md:px-4 md:py-2 bg-white rounded-full text-[9px] md:text-xs font-bold text-primary-700 shadow-sm border border-primary-100">
                                        Eco-Friendly
                                    </div>
                                    <div className="px-2.5 py-1 md:px-4 md:py-2 bg-white rounded-full text-[9px] md:text-xs font-bold text-primary-700 shadow-sm border border-primary-100">
                                        Closed Loop
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Impact Cards */}
                    <div className="grid grid-cols-2 gap-3 md:gap-10 mt-12 md:mt-20">
                        <div className="group bg-gradient-to-br from-primary-50 to-primary-100 p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-lg border-2 border-primary-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-primary-600 mb-4 md:mb-6 shadow-md group-hover:rotate-12 transition-transform">
                                <Target className="w-5 h-5 md:w-7 md:h-7" />
                            </div>
                            <h3 className="text-sm md:text-2xl font-bold text-primary-800 mb-2 md:mb-4 uppercase tracking-tight">
                                Misi Kami
                            </h3>
                            <p className="text-primary-700 text-[10px] md:text-lg leading-relaxed font-medium">
                                Mengubah limbah popok menjadi produk bernilai ekonomi tinggi.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-lg border-2 border-cream-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-primary-600 mb-4 md:mb-6 shadow-md group-hover:-rotate-12 transition-transform">
                                <Globe className="w-5 h-5 md:w-7 md:h-7" />
                            </div>
                            <h3 className="text-sm md:text-2xl font-bold text-primary-800 mb-2 md:mb-4 uppercase tracking-tight">
                                Dampak
                            </h3>
                            <p className="text-primary-700 text-[10px] md:text-lg leading-relaxed font-medium">
                                Mengurangi pencemaran lingkungan & edukasi gaya hidup sirkular.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}
