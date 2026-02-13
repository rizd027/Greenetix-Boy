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
        <section className="py-20 bg-gradient-to-b from-white to-cream-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
                        Kata Mereka
                    </h2>
                    <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                        Testimoni dari mitra dan pengguna produk Greenetix Boy
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Testimonial Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 text-9xl text-primary-100 font-serif leading-none">
                            "
                        </div>

                        <div className="relative z-10">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={24}
                                        className="text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                                "{testimonials[activeIndex].content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                    {testimonials[activeIndex].name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-800 text-lg">
                                        {testimonials[activeIndex].name}
                                    </h4>
                                    <p className="text-primary-600">
                                        {testimonials[activeIndex].role}
                                    </p>
                                    <p className="text-primary-500 text-sm">
                                        {testimonials[activeIndex].company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-300 rounded-full ${index === activeIndex
                                    ? "w-12 h-3 bg-primary-600"
                                    : "w-3 h-3 bg-primary-300 hover:bg-primary-400"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() =>
                                setActiveIndex((prev) =>
                                    prev === 0 ? testimonials.length - 1 : prev - 1
                                )
                            }
                            className="p-3 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-full transition-all duration-300 transform hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() =>
                                setActiveIndex((prev) =>
                                    prev === testimonials.length - 1 ? 0 : prev + 1
                                )
                            }
                            className="p-3 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-full transition-all duration-300 transform hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
