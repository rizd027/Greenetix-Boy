"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Dr. Budi Santoso",
        role: "Kepala Dinas Lingkungan Hidup",
        company: "Pemerintah Kota",
        content: "Greenetix Boy memberikan solusi inovatif untuk masalah limbah popok yang selama ini menjadi tantangan besar. Program ini sangat inspiring dan memberikan dampak positif nyata.",
        rating: 5,
    },
    {
        id: 2,
        name: "Siti Nurhaliza",
        role: "Founder",
        company: "Green Community",
        content: "Kolaborasi dengan Greenetix Boy membuka mata kami tentang potensi ekonomi sirkular. Produk-produk mereka berkualitas tinggi dan ramah lingkungan.",
        rating: 5,
    },
    {
        id: 3,
        name: "Ahmad Hidayat",
        role: "Petani Organik",
        company: "Tani Sejahtera",
        content: "PUPO dari Greenetix Boy sangat membantu meningkatkan hasil panen kami. Media tanam ini kaya nutrisi dan memang terbukti efektif untuk tanaman organik.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-10 md:py-20 bg-gradient-to-b from-white to-cream-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-5xl font-black text-primary-800 mb-2 md:mb-4 uppercase tracking-tight">
                        Kata Mereka
                    </h2>
                    <p className="text-sm md:text-xl text-primary-600 max-w-2xl mx-auto font-medium">
                        Testimoni dari mitra dan pengguna produk Greenetix Boy
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Testimonial Card */}
                    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-12 mb-6 md:mb-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 text-7xl md:text-9xl text-primary-100 font-serif leading-none opacity-50">
                            "
                        </div>

                        <div className="relative z-10">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4 md:mb-6">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="text-yellow-400 fill-current w-4 h-4 md:w-6 md:h-6"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-sm md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 italic font-medium">
                                "{testimonials[activeIndex].content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-lg md:text-2xl font-black uppercase">
                                    {testimonials[activeIndex].name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-black text-primary-800 text-sm md:text-lg uppercase tracking-tight">
                                        {testimonials[activeIndex].name}
                                    </h4>
                                    <p className="text-primary-600 text-[10px] md:text-base font-bold uppercase tracking-wider">
                                        {testimonials[activeIndex].role}
                                    </p>
                                    <p className="text-primary-500 text-[9px] md:text-sm font-medium uppercase">
                                        {testimonials[activeIndex].company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 md:gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-300 rounded-full ${index === activeIndex
                                    ? "w-8 md:w-12 h-2 md:h-3 bg-primary-600"
                                    : "w-2 h-2 md:w-3 md:h-3 bg-primary-300 hover:bg-primary-400"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
                        <button
                            onClick={() =>
                                setActiveIndex((prev) =>
                                    prev === 0 ? testimonials.length - 1 : prev - 1
                                )
                            }
                            className="p-2 md:p-3 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-full transition-all duration-300 transform hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={() =>
                                setActiveIndex((prev) =>
                                    prev === testimonials.length - 1 ? 0 : prev + 1
                                )
                            }
                            className="p-2 md:p-3 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-full transition-all duration-300 transform hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
