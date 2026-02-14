"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const assets = [
        "/logo.png",
        "/product-display.jpg",
        "/products-1.jpg",
        "/products-2.jpg",
        "/team-bersama.png",
        "/yafet.png",
        "/rohman.png",
        "/arief.png"
    ];

    useEffect(() => {
        let loadedCount = 0;
        const totalAssets = assets.length;

        if (totalAssets === 0) {
            setProgress(100);
            return;
        }

        const updateProgress = () => {
            loadedCount++;
            const newProgress = Math.round((loadedCount / totalAssets) * 100);
            setProgress(newProgress);

            if (loadedCount === totalAssets) {
                setTimeout(() => {
                    setIsExiting(true);
                    setTimeout(onComplete, 800); // Wait for exit animation
                }, 500);
            }
        };

        assets.forEach((src) => {
            const img = new window.Image();
            img.src = getAssetPath(src);
            img.onload = updateProgress;
            img.onerror = updateProgress; // Count as loaded even if error to prevent stuck preloader
        });
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary-900 transition-opacity duration-700 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4">
                {/* Logo Animation */}
                <div className="mb-8 relative w-32 md:w-48 overflow-hidden group">
                    <div className="animate-reveal-up">
                        <Image
                            src={getAssetPath("/logo.png")}
                            alt="Greenetix Boy Logo"
                            width={200}
                            height={80}
                            className="brightness-0 invert opacity-40"
                        />
                    </div>
                    {/* Progress Fill Logo */}
                    <div
                        className="absolute top-0 left-0 w-full h-full overflow-hidden transition-all duration-300"
                        style={{ height: `${progress}%`, top: `${100 - progress}%` }}
                    >
                        <Image
                            src={getAssetPath("/logo.png")}
                            alt="Greenetix Boy Logo"
                            width={200}
                            height={80}
                            className="brightness-0 invert absolute bottom-0"
                            style={{ height: '80px', objectFit: 'contain' }}
                        />
                    </div>
                </div>

                {/* Percentage Text */}
                <h2 className="text-4xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                    {progress}%
                </h2>

                <p className="text-xs md:text-sm font-bold text-primary-300 uppercase tracking-[0.3em] mb-8 animate-pulse">
                    Mempersiapkan Transformasi Hijau
                </p>

                {/* Progress Bar Container */}
                <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                    <div
                        className="h-full bg-primary-400 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Dynamic Status Text */}
                <div className="mt-6 h-4 overflow-hidden">
                    <p className="text-[10px] md:text-xs text-white/40 font-medium uppercase tracking-widest transition-all duration-300">
                        {progress < 30 && "Inisialisasi Sistem..."}
                        {progress >= 30 && progress < 70 && "Memuat Aset Visual..."}
                        {progress >= 70 && progress < 100 && "Optimasi Tampilan..."}
                        {progress === 100 && "Siap!"}
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes reveal-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-reveal-up {
                    animation: reveal-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
            `}</style>
        </div>
    );
}
