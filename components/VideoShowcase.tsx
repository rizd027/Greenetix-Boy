"use client";

import { useState } from "react";
import { Play, X, PlayCircle, Eye } from "lucide-react";
import Image from "next/image";

export default function VideoShowcase() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Video Thumbnail Section */}
                        <div className="w-full lg:w-3/5">
                            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary-600 to-primary-400 rounded-[3rem] opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[300px] md:h-[450px]">
                                    <Image
                                        src="/team-bersama.png"
                                        alt="Documentary Preview"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75"
                                    />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 relative">
                                            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                                            <Play size={32} className="text-primary-700 fill-current ml-1" />
                                        </div>
                                    </div>

                                    {/* Bottom Overlay Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className="flex items-center gap-4 text-white">
                                            <div className="p-3 bg-primary-600 rounded-2xl">
                                                <PlayCircle size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold tracking-widest uppercase opacity-70">Tonton Sekarang</p>
                                                <h3 className="text-xl font-bold">Misi Greenetix Boy: Dokumenter 2024</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Viewing Count Badge */}
                                <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold flex items-center gap-2 border border-white/20">
                                    <Eye size={14} />
                                    1.2k+ Terlihat
                                </div>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full lg:w-2/5">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-8 leading-tight">
                                Melihat Lebih Dekat Transformasi Kami
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                                Dokumentasi singkat tentang bagaimana tim kami mengumpulkan limbah, memurnikannya, dan mengubahnya menjadi produk bernilai yang memberdayakan masyarakat.
                            </p>

                            <ul className="space-y-6 mb-10">
                                {[
                                    "Proses sterilisasi tingkat industri",
                                    "Wawancara dengan mitra petani (PUPO)",
                                    "Visi pengembangan skala massal"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-primary-800 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs">
                                            {i + 1}
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setIsOpen(true)}
                                className="px-10 py-5 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
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
                        className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"
                    >
                        <X size={48} />
                    </button>
                    <div className="w-full max-w-5xl aspect-video bg-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-white border-2 border-white/20 overflow-hidden relative">
                        <div className="text-center p-12">
                            <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Play size={40} className="fill-current" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Video Player Placeholder</h3>
                            <p className="text-white/60 text-xl max-w-md mx-auto">
                                Di sini nantinya akan dipasang embed YouTube atau file video showcase Anda.
                            </p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full"
                            >
                                Selesai Menonton
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
