"use client";

import { useState } from "react";
import { Play, X, PlayCircle, Eye } from "lucide-react";
import Image from "next/image";

export default function VideoShowcase() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                        {/* Video Thumbnail Section */}
                        <div className="w-full lg:w-3/5">
                            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
                                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-primary-600 to-primary-400 rounded-2xl md:rounded-[3rem] opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
                                <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[220px] md:h-[450px]">
                                    <Image
                                        src="team-bersama.png"
                                        alt="Documentary Preview"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 relative">
                                            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                                            <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-700 fill-current ml-1" />
                                        </div>
                                    </div>

                                    {/* Bottom Overlay Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className="flex items-center gap-3 md:gap-4 text-white">
                                            <div className="p-2 md:p-3 bg-primary-600 rounded-xl md:rounded-2xl">
                                                <PlayCircle className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black tracking-widest uppercase opacity-70">Tonton Sekarang</p>
                                                <h3 className="text-sm md:text-xl font-black uppercase tracking-tight">Misi Greenetix Boy</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Viewing Count Badge */}
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-black flex items-center gap-2 border border-white/20 uppercase tracking-wider">
                                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                    1.2k+ Terlihat
                                </div>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full lg:w-2/5">
                            <h2 className="text-2xl md:text-5xl font-black text-primary-900 mb-4 md:mb-8 leading-tight uppercase tracking-tight">
                                Melihat Lebih Dekat Transformasi Kami
                            </h2>
                            <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-10 font-medium">
                                Dokumentasi singkat tentang bagaimana tim kami mengumpulkan limbah, memurnikannya, dan mengubahnya menjadi produk bernilai yang memberdayakan masyarakat.
                            </p>

                            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                                {[
                                    "Proses sterilisasi tingkat industri",
                                    "Wawancara dengan mitra petani",
                                    "Visi pengembangan skala massal"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 md:gap-4 text-primary-800 font-black text-xs md:text-base uppercase tracking-tight">
                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-[10px] md:text-xs font-black">
                                            {i + 1}
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setIsOpen(true)}
                                className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-black text-sm md:text-base rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider"
                            >
                                Play Showcase
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Placeholder */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:rotate-90 transition-transform duration-300"
                    >
                        <X className="w-10 h-10 md:w-12 md:h-12" />
                    </button>
                    <div className="w-full max-w-5xl aspect-video bg-white/10 rounded-2xl md:rounded-[2.5rem] flex flex-col items-center justify-center text-white border-2 border-white/20 overflow-hidden relative">
                        <div className="text-center p-8 md:p-12">
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-primary-600 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                            </div>
                            <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 uppercase tracking-tight">Dokumenter Video</h3>
                            <p className="text-white/60 text-sm md:text-xl max-w-md mx-auto font-medium">
                                Media player akan ditampilkan di sini untuk memutar video dokumenter Greenetix Boy.
                            </p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-6 md:mt-8 px-6 py-2 md:px-8 md:py-3 bg-white text-black font-black text-xs md:text-base rounded-full uppercase tracking-wider"
                            >
                                Tutup
                            </button>
                        </div>

                        {/* Simulated Loading Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                            <div className="h-full bg-primary-500 w-1/3"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
