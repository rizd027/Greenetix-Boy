"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Apakah produk Greenetix Boy benar-benar steril?",
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
        answer: "Shell LiveWire membantu kami mengembangkan skala bisnis dan validasi teknologi. Ini memberikan akses ke mentor ahli dan jaringan industri global untuk mempercepat dampak lingkungan Greenetix Boy."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-12 md:py-24 bg-cream-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary-100 rounded-full text-primary-700 text-[10px] md:text-xs font-black uppercase tracking-wider mb-3 md:mb-4">
                            <HelpCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            FAQ
                        </div>
                        <h2 className="text-2xl md:text-5xl font-black text-primary-900 mb-2 md:mb-6 uppercase tracking-tight">Informasi Penting</h2>
                        <p className="text-xs md:text-lg text-primary-700 px-2 md:px-4 font-medium leading-relaxed">Punya pertanyaan seputar proses dan produk kami? Temukan jawabannya di sini.</p>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl md:rounded-3xl transition-all duration-300 border-2 ${openIndex === index ? 'border-primary-500 shadow-xl' : 'border-transparent shadow-sm'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left p-5 md:p-8 flex items-center justify-between"
                                >
                                    <span className={`text-sm md:text-xl font-black uppercase tracking-tight transition-colors leading-tight pr-4 ${openIndex === index ? 'text-primary-700' : 'text-gray-800'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-1.5 md:p-2 rounded-full transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'bg-primary-600 text-white rotate-180' : 'bg-primary-50 text-primary-600'
                                        }`}>
                                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-5 md:p-8 pt-0 border-t border-gray-50 text-gray-600 leading-relaxed text-[11px] md:text-lg font-medium">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-16 bg-gradient-to-r from-primary-600 to-primary-800 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-2xl font-black text-white mb-1 md:mb-2 uppercase tracking-tight">Punya pertanyaan lain?</h3>
                                <p className="text-white/80 text-[10px] md:text-base font-medium">Tim kami siap membantu menjelaskan secara mendalam.</p>
                            </div>
                            <button className="w-full md:w-auto px-6 py-2.5 md:px-8 md:py-3.5 bg-white text-primary-700 font-black text-xs md:text-base rounded-full hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 uppercase tracking-wider">
                                Tanya Admin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
