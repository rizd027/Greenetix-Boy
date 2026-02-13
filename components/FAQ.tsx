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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-xs font-bold mb-4">
                            <HelpCircle size={14} />
                            FREQUENTLY ASKED QUESTIONS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4 md:mb-6">Informasi Penting</h2>
                        <p className="text-base md:text-lg text-primary-700 px-4">Punya pertanyaan seputar proses dan produk kami? Temukan jawabannya di sini.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-3xl transition-all duration-300 border-2 ${openIndex === index ? 'border-primary-500 shadow-xl' : 'border-transparent shadow-sm'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between"
                                >
                                    <span className={`text-base md:text-xl font-bold transition-colors ${openIndex === index ? 'text-primary-700' : 'text-gray-800'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-primary-600 text-white rotate-180' : 'bg-primary-50 text-primary-600'
                                        }`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 md:p-8 pt-0 border-t border-gray-50 text-gray-600 leading-relaxed text-sm md:text-lg">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary-600 to-primary-800 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Masih punya pertanyaan lain?</h3>
                                <p className="text-white/80 text-sm md:text-base">Tim kami siap membantu menjelaskan secara mendalam.</p>
                            </div>
                            <button className="w-full md:w-auto px-8 py-3.5 bg-white text-primary-700 font-bold rounded-full hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                                Tanya Admin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
