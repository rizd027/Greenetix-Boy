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
        <section id="impact" className="py-12 md:py-24 bg-primary-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
                    {/* Left Side: Input Card */}
                    <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-primary-200 text-sm font-bold mb-6 border border-white/10">
                            <Calculator size={16} />
                            KALKULATOR DAMPAK
                        </div>
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                            Lihat Seberapa Besar Perubahan Yang Anda Buat
                        </h2>
                        <p className="text-primary-100/80 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed">
                            Setiap popok yang dikelola melalui Greenetix Boy berarti satu langkah menjauh dari pencemaran lingkungan. Hitung kontribusi potensial Anda di bawah ini.
                        </p>

                        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl">
                            <label className="block text-[10px] md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4 text-primary-200">
                                Jumlah Popok (Per Bulan)
                            </label>
                            <div className="space-y-6">
                                <div className="relative group">
                                    <input
                                        type="number"
                                        min="0"
                                        value={diapers || ''}
                                        onChange={(e) => setDiapers(Number(e.target.value))}
                                        placeholder="Contoh: 50"
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-3 md:py-4 px-5 md:px-6 text-xl md:text-4xl font-black focus:outline-none focus:border-primary-400/50 focus:ring-4 focus:ring-primary-500/20 transition-all placeholder:text-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-primary-400 font-black text-base md:text-xl">
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

                            <div className="flex items-start gap-4 mt-8 p-4 bg-primary-400/10 rounded-2xl text-sm border border-primary-400/20">
                                <Info size={20} className="text-primary-300 flex-shrink-0 mt-0.5" />
                                <p className="text-primary-100/70">
                                    Berdasarkan metrik rata-rata pengolahan limbah menjadi produk PUPO (Pupuk) dan LIPOBAY (Bahan Bakar).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Results */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl transform hover:-translate-y-2 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Leaf size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-2xl md:text-5xl font-black text-primary-900 mb-1 tabular-nums">
                                {results.waste}
                            </div>
                            <div className="text-[10px] md:text-xs font-bold text-primary-600 uppercase tracking-widest">Kg Limbah Terkelola</div>
                            <div className="h-1.5 w-12 bg-primary-600 mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>

                        <div className="mt-8 bg-white p-8 rounded-[2.5rem] shadow-xl transform hover:-translate-y-2 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Globe size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-2xl md:text-5xl font-black text-primary-900 mb-1 tabular-nums">
                                {results.co2}
                            </div>
                            <div className="text-[10px] md:text-xs font-bold text-primary-600 uppercase tracking-widest">Kg Emisi CO2 Berkurang</div>
                            <div className="h-1.5 w-12 bg-primary-600 mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>

                        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl transform hover:-translate-y-2 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Zap size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-2xl md:text-5xl font-black text-primary-900 mb-1 tabular-nums">
                                {results.energy}
                            </div>
                            <div className="text-[10px] md:text-xs font-bold text-primary-600 uppercase tracking-widest">Potensi Energi (kWh)</div>
                            <div className="h-1.5 w-12 bg-primary-600 mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>

                        <div className="mt-8 bg-white p-8 rounded-[2.5rem] shadow-xl transform hover:-translate-y-2 transition-all duration-500 group text-center lg:text-left">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4 md:mb-6 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <Droplets size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div className="text-2xl md:text-5xl font-black text-primary-900 mb-1 tabular-nums">
                                {results.water}
                            </div>
                            <div className="text-[10px] md:text-xs font-bold text-primary-600 uppercase tracking-widest">Liter Air Bersih Terjaga</div>
                            <div className="h-1.5 w-12 bg-primary-600 mt-6 rounded-full opacity-30 mx-auto lg:mx-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
