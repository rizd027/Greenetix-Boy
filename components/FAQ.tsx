"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Apakah produk Greenetix Indonesia benar-benar steril?",
        answer: "Ya, sterilitas adalah prioritas utama kami. Limbah popok melalui proses sterilisasi multi-tahap menggunakan pemanasan suhu tinggi dan bahan penukar ion khusus yang memastikan produk akhir bebas dari kuman, bakteri, dan bau."
    },
    {
        question: "Bagaimana cara menyetor limbah popok?",
        answer: "Kami bekerja sama dengan komunitas pengumpulan sampah lokal dan rumah sakit. Untuk rumah tangga, Anda bisa menghubungi kami untuk titik penjemputan terdekat atau program langganan pickup khusus."
    },
    {
        question: "Apa itu PUPO dan bagaimana cara menggunakannya?",
        answer: "PUPO adalah pupuk organik dari ekstrak limbah popok yang kaya nutrisi. Penggunaannya sama seperti pupuk organik cair atau padat lainnya, namun memiliki daya serap air yang lebih tinggi berkat kandungan polimer yang sudah disterilkan."
    },
    {
        question: "Apakah proses pengolahannya menimbulkan polusi baru?",
        answer: "Tidak. Kami menggunakan sistem pengolahan closed-loop yang meminimalkan residu. Emisi dihitung dan dikelola secara ketat untuk memastikan operasional kami tetap ramah lingkungan."
    },
    {
        question: "Bagaimana kerjasama dengan Shell LiveWire berdampak pada tim?",
        answer: "Shell LiveWire membantu kami mengembangkan skala bisnis dan validasi teknologi. Ini memberikan akses ke mentor ahli dan jaringan industri global untuk mempercepat dampak lingkungan Greenetix Indonesia."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="min-h-screen flex flex-col justify-center py-12 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
            {/* Background Decorations - Optimized for mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Gradient Blobs - Lower blur for mobile performance */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-400/20 rounded-full blur-[60px] md:blur-[120px]"
                />
                
                {/* Large Background Text - static with whileInView opacity */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full text-center">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-[120px] md:text-[240px] font-black text-white/5 tracking-[-0.05em] leading-none uppercase select-none"
                    >
                        ANSWERS
                    </motion.span>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-12 md:mb-20">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-primary-100 text-[10px] md:text-sm font-black mb-6 uppercase tracking-[0.2em] shadow-xl">
                            <HelpCircle size={14} className="text-primary-300" />
                            General Information
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                            Informasi Penting
                        </h2>
                        <div className="w-16 h-1.5 bg-primary-400 rounded-full mb-6"></div>
                        <p className="text-[11px] md:text-xl text-primary-100/80 max-w-2xl mx-auto font-bold uppercase tracking-[0.15em] leading-relaxed">
                            Punya pertanyaan seputar proses dan produk kami?<br className="md:hidden" /> Temukan jawabannya di sini.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-xl md:rounded-2xl transition-all duration-300 border backdrop-blur-xl ${openIndex === index 
                                    ? 'bg-white/10 border-primary-500/50 shadow-lg' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/[0.08]'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left p-4 md:p-6 flex items-center justify-between"
                                >
                                    <span className={`text-[13px] md:text-lg font-bold uppercase tracking-tight transition-colors leading-tight pr-4 ${openIndex === index ? 'text-primary-300' : 'text-white'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-1 md:p-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'bg-primary-500 text-white rotate-180' : 'bg-white/5 text-white/50'
                                        }`}>
                                        <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-4 md:p-6 pt-0 border-t border-white/5 text-primary-100/90 leading-relaxed text-[11px] md:text-base font-medium">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-12 bg-gradient-to-r from-primary-800/50 to-primary-950/50 p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl relative overflow-hidden group border border-white/5">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-base md:text-xl font-black text-white mb-0.5 uppercase tracking-tight">Punya pertanyaan lain?</h3>
                                <p className="text-white/50 text-[9px] md:text-sm font-medium">Tim kami siap membantu menjelaskan secara mendalam.</p>
                            </div>
                            <button className="w-full md:w-auto px-5 py-2 md:px-6 md:py-2.5 bg-white text-primary-800 font-black text-[10px] md:text-sm rounded-full hover:bg-cream-50 transition-all shadow-md active:scale-95 uppercase tracking-wider">
                                Tanya Admin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
