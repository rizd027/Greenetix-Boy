"use client";

import { useState } from "react";
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
        <section id="faq" className="py-8 md:py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-[9px] md:text-xs font-black uppercase tracking-widest mb-2 md:mb-3">
                            <HelpCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-500" />
                            FAQ
                        </div>
                        <h2 className="text-xl md:text-3xl font-black text-white mb-1.5 md:mb-3 uppercase tracking-tight">Informasi Penting</h2>
                        <p className="text-[10px] md:text-base text-primary-100/60 px-2 md:px-4 font-medium leading-relaxed">Punya pertanyaan seputar proses dan produk kami? Temukan jawabannya di sini.</p>
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
