"use client";

import { useState } from "react";
import { Calculator, Leaf, Droplets, Zap, Info, Globe } from "lucide-react";

export default function ImpactCalculator() {
    const [diapers, setDiapers] = useState<number>(0);

    // Constants for calculation (estimations based on circular economy metrics)
    const metrics = {
        wasteRemoved: 0.25, // kg per diaper
        co2Saved: 0.5, // kg carbon credit per diaper cycle
        energyGenerated: 0.1, // potential kWh from process per diaper
        waterSaved: 2.0 // liters saved in processing vs traditional
    };

    const results = {
        waste: (diapers * metrics.wasteRemoved).toFixed(1),
        co2: (diapers * metrics.co2Saved).toFixed(1),
        energy: (diapers * metrics.energyGenerated).toFixed(1),
        water: (diapers * metrics.waterSaved).toFixed(1)
    };

    return (
        <section className="py-12 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left Side: Input */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-primary-200 text-[10px] md:text-sm font-bold mb-4 md:mb-6 border border-white/10">
                            <Calculator size={14} className="md:w-4 md:h-4" />
                            KALKULATOR DAMPAK
                        </div>
                        <h2 className="text-xl md:text-5xl font-black mb-3 md:mb-6 leading-tight uppercase tracking-tight">
                            Lihat Seberapa Besar Perubahan Yang Anda Buat
                        </h2>
                        <p className="text-primary-100/80 text-[12px] md:text-lg mb-6 md:mb-10 leading-relaxed font-medium">
                            Setiap popok yang dikelola melalui Greenetix Boy berarti satu langkah menjauh dari pencemaran lingkungan. Hitung kontribusi potensial Anda di bawah ini.
                        </p>

                        <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/20 shadow-2xl">
                            <label className="block text-[10px] md:text-sm font-black tracking-widest uppercase mb-3 md:mb-4 text-primary-200">
                                Jumlah Popok (Per Bulan)
                            </label>
                            <div className="space-y-4 md:space-y-6">
                                <div className="relative group">
                                    <input
                                        type="number"
                                        min="0"
                                        value={diapers || ''}
                                        onChange={(e) => setDiapers(Number(e.target.value))}
                                        placeholder="Contoh: 50"
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 text-xl md:text-4xl font-black focus:outline-none focus:border-primary-400/50 focus:ring-4 focus:ring-primary-500/20 transition-all placeholder:text-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-primary-400 font-black text-sm md:text-xl">
                                        PCS
                                    </div>
                                </div>

                                {/* Range Slider for easier interaction */}
                                <div className="space-y-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        step="10"
                                        value={diapers}
                                        onChange={(e) => setDiapers(Number(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-400"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                        <span>0 Pcs</span>
                                        <span>500 Pcs</span>
                                        <span>1000+ Pcs</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mt-6 md:mt-8 p-3 md:p-4 bg-primary-400/10 rounded-xl md:rounded-2xl text-[11px] md:text-sm border border-primary-400/20">
                                <p className="text-primary-100/70">
                                    Berdasarkan metrik rata-rata pengolahan limbah menjadi produk PUPO (Pupuk) dan LIPOBAY (Bahan Bakar).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Results */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-6">
                        <div className="bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[2.5rem] shadow-xl transform hover:-translate-y-1 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-8 h-8 md:w-14 md:h-14 bg-primary-50 rounded-lg md:rounded-2xl flex items-center justify-center text-primary-600 mb-2 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Leaf size={16} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-xl md:text-5xl font-black text-primary-900 mb-0.5 md:mb-1 tabular-nums">
                                {results.waste}
                            </div>
                            <div className="text-[8px] md:text-xs font-black text-primary-600 uppercase tracking-tight md:tracking-widest">Kg Limbah</div>
                            <div className="h-0.5 w-6 md:h-1.5 md:w-12 bg-primary-600 mt-2 md:mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>

                        <div className="bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[2.5rem] shadow-xl transform hover:-translate-y-1 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-8 h-8 md:w-14 md:h-14 bg-primary-50 rounded-lg md:rounded-2xl flex items-center justify-center text-primary-600 mb-2 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Globe size={16} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-xl md:text-5xl font-black text-primary-900 mb-0.5 md:mb-1 tabular-nums">
                                {results.co2}
                            </div>
                            <div className="text-[8px] md:text-xs font-black text-primary-600 uppercase tracking-tight md:tracking-widest">Kg Emisi CO2</div>
                            <div className="h-0.5 w-6 md:h-1.5 md:w-12 bg-primary-600 mt-2 md:mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>

                        <div className="bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[2.5rem] shadow-xl transform hover:-translate-y-1 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-8 h-8 md:w-14 md:h-14 bg-primary-50 rounded-lg md:rounded-2xl flex items-center justify-center text-primary-600 mb-2 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Zap size={16} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-xl md:text-5xl font-black text-primary-900 mb-0.5 md:mb-1 tabular-nums">
                                {results.energy}
                            </div>
                            <div className="text-[8px] md:text-xs font-black text-primary-600 uppercase tracking-tight md:tracking-widest">Energi (kWh)</div>
                            <div className="h-0.5 w-6 md:h-1.5 md:w-12 bg-primary-600 mt-2 md:mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>

                        <div className="bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[2.5rem] shadow-xl transform hover:-translate-y-1 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-8 h-8 md:w-14 md:h-14 bg-primary-50 rounded-lg md:rounded-2xl flex items-center justify-center text-primary-600 mb-2 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Droplets size={16} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-xl md:text-5xl font-black text-primary-900 mb-0.5 md:mb-1 tabular-nums">
                                {results.water}
                            </div>
                            <div className="text-[8px] md:text-xs font-black text-primary-600 uppercase tracking-tight md:tracking-widest">Air (L)</div>
                            <div className="h-0.5 w-6 md:h-1.5 md:w-12 bg-primary-600 mt-2 md:mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
