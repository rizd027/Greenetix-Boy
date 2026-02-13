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
                            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    fill="none"
                                    stroke="#339966"
                                    strokeWidth="2"
                                    strokeDasharray="57.8 231.2"
                                    className="transition-all duration-700 ease-in-out"
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
                                            transform: `rotate(${step.angle - 90}deg) translate(var(--radius, 180px)) rotate(${-(step.angle - 90)}deg)`,
                                            left: 'calc(50% - 32px)',
                                            top: 'calc(50% - 32px)',
                                            '--radius': '130px'
                                        } as any}
                                    >
                                        <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl transition-all duration-500 shadow-lg md:[--radius:180px] ${isActive || isHovered
                                            ? 'bg-primary-600 text-white scale-125 -translate-y-2'
                                            : 'bg-white text-primary-600 hover:bg-primary-50'
                                            }`}>
                                            <step.icon className={`w-6 h-6 md:w-10 md:h-10 transition-all duration-500 ${isActive || isHovered ? 'text-white' : 'text-primary-600'}`} />

                                            {/* Label on desktop */}
                                            <span className={`absolute -bottom-8 whitespace-nowrap text-[10px] font-bold tracking-widest uppercase transition-opacity duration-300 px-2 ${isActive || isHovered ? 'text-primary-800 opacity-100' : 'text-gray-400 opacity-0 md:group-hover:opacity-100'
                                                }`}>
                                                {step.name}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}

                            {/* Central Core */}
                            <div className="relative w-28 h-28 md:w-56 md:h-56 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center p-4 md:p-6 border-4 md:border-8 border-primary-50">
                                <div className="absolute inset-0 rounded-full bg-primary-500/5 animate-ping"></div>
                                <h4 className="text-primary-800 font-black text-[10px] md:text-xl leading-tight">
                                    SIRKULAR<br />EKONOMI
                                </h4>
                                <div className="w-6 md:w-12 h-0.5 md:h-1 bg-primary-200 my-1.5 md:my-3 rounded-full"></div>
                                <p className="text-[7px] md:text-[10px] text-primary-600 font-bold tracking-widest">GREENETIX BOY</p>
                            </div>
                        </div>

                        {/* Detail Card Side */}
                        <div className="flex-1 w-full">
                            <div className="bg-gradient-to-br from-white to-primary-50 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-primary-100 relative min-h-[350px] flex flex-col transition-all duration-500">
                                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl animate-bounce-slow">
                                    <displayStep.icon size={32} />
                                </div>

                                <div className="mb-8">
                                    <span className="text-sm font-black text-primary-500 tracking-[0.2em] uppercase mb-4 block">
                                        Tahap {displayStep.id} dari 5
                                    </span>
                                    <h3 className="text-4xl font-black text-primary-800 mb-6 drop-shadow-sm transition-all duration-300">
                                        {displayStep.name}
                                    </h3>
                                    <div className="w-20 h-2 bg-primary-600 rounded-full mb-8"></div>
                                </div>

                                <p className="text-xl text-gray-700 leading-relaxed font-medium transition-all duration-500 opacity-90">
                                    {displayStep.description}
                                </p>

                                <div className="mt-auto pt-10 flex flex-wrap gap-4">
                                    <div className="px-4 py-2 bg-white rounded-full text-xs font-bold text-primary-700 shadow-sm border border-primary-100">
                                        Sustainable
                                    </div>
                                    <div className="px-4 py-2 bg-white rounded-full text-xs font-bold text-primary-700 shadow-sm border border-primary-100">
                                        Eco-Friendly
                                    </div>
                                    <div className="px-4 py-2 bg-white rounded-full text-xs font-bold text-primary-700 shadow-sm border border-primary-100">
                                        Closed Loop
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Impact Cards */}
                    <div className="grid md:grid-cols-2 gap-10 mt-20">
                        <div className="group bg-gradient-to-br from-primary-50 to-primary-100 p-10 rounded-3xl shadow-lg border-2 border-primary-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-md group-hover:rotate-12 transition-transform">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-4 uppercase tracking-tight">
                                Misi Kami
                            </h3>
                            <p className="text-primary-700 text-lg leading-relaxed font-medium">
                                Mengubah limbah popok yang selama ini dibuang menjadi produk bernilai ekonomi tinggi, sambil mengedukasi masyarakat tentang pengelolaan sampah yang bertanggung jawab.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-cream-50 to-cream-100 p-10 rounded-3xl shadow-lg border-2 border-cream-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-md group-hover:-rotate-12 transition-transform">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-4 uppercase tracking-tight">
                                Dampak Lingkungan
                            </h3>
                            <p className="text-primary-700 text-lg leading-relaxed font-medium">
                                Mengurangi pencemaran lingkungan dari tumpukan popok bekas, sekaligus menciptakan solusi energi terbarukan dan media pertanian ramah lingkungan.
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
