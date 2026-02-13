"use client";

import { Box, Globe, Shield, Zap, Award, Star } from "lucide-react";

const partners = [
    { name: "Shell LiveWire", icon: Award, label: "Program Akselerasi 2025" },
    { name: "Kemenkop UKM", icon: Shield, label: "Pendampingan Bisnis" },
    { name: "DLH Sukoharjo", icon: Globe, label: "Mitra Pengelolaan Limbah" },
    { name: "Universitas Indonesia", icon: Box, label: "Riset & Pengembangan" },
    { name: "Green Energy Tech", icon: Zap, label: "Integrasi Teknologi" },
    { name: "Sustainable ID", icon: Star, label: "Aliansi Ekonomi Sirkular" },
];

export default function Partners() {
    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-2">Didukung & Dipercaya Oleh</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group cursor-default"
                        >
                            <div className="flex items-center gap-3 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
                                <partner.icon size={24} className="text-primary-700 md:w-8 md:h-8" />
                                <span className="text-lg md:text-xl font-bold text-primary-900 tracking-tight">{partner.name}</span>
                            </div>
                            <p className="text-[10px] font-medium text-primary-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {partner.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
