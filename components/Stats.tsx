"use client";

import { useEffect, useRef, useState } from "react";
import { Recycle, Package, Users, Leaf } from "lucide-react";

interface Stat {
    id: number;
    value: number;
    label: string;
    suffix: string;
    icon: any;
}

const stats: Stat[] = [
    {
        id: 1,
        value: 1000,
        label: "Kg Limbah Popok Terkelola",
        suffix: "+",
        icon: Recycle,
    },
    {
        id: 2,
        value: 500,
        label: "Kg Produk Dihasilkan",
        suffix: "+",
        icon: Package,
    },
    {
        id: 3,
        value: 50,
        label: "Masyarakat Terdampak",
        suffix: "+",
        icon: Users,
    },
    {
        id: 4,
        value: 80,
        label: "Pengurangan Emisi CO2",
        suffix: "%",
        icon: Leaf,
    },
];

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = stat.value;
                        return newCounts;
                    });
                    clearInterval(timer);
                } else {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.floor(current);
                        return newCounts;
                    });
                }
            }, interval);
        });
    };

    return (
        <section
            id="impact"
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden"
        >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Dampak Kami
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Kontribusi nyata untuk lingkungan dan masyarakat
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="text-center transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="bg-white/10 backdrop-blur-sm p-5 md:p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="flex justify-center mb-4 md:mb-6">
                                    <div className="p-3 md:p-4 bg-white/10 rounded-2xl">
                                        <stat.icon size={32} className="text-white md:hidden" />
                                        <stat.icon size={48} className="text-white hidden md:block" />
                                    </div>
                                </div>
                                <div className="text-4xl md:text-5xl font-bold mb-2">
                                    {counts[index].toLocaleString()}
                                    {stat.suffix}
                                </div>
                                <p className="text-white/90 text-sm md:text-base">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
