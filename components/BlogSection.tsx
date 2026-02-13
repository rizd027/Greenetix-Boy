"use client";

import { ArrowRight, Calendar, User, Tag, ChevronRight } from "lucide-react";
import Image from "next/image";

const posts = [
    {
        id: 1,
        title: "Inovasi Popok: Dari Limbah Menjadi Berkah Berharga",
        excerpt: "Menelusuri bagaimana limbah popok yang terbelenggu masalah dapat diubah menjadi pupuk berkualitas tinggi...",
        category: "Inovasi",
        date: "12 Feb 2025",
        author: "Tim Riset",
        image: "/products-1.jpg"
    },
    {
        id: 2,
        title: "Perjalanan Menuju Shell LiveWire 2025",
        excerpt: "Kisah di balik layar tim Greenetix Boy dalam mempersiapkan diri menghadapi kompetisi startup paling bergengsi...",
        category: "Update",
        date: "10 Feb 2025",
        author: "Arief F",
        image: "/team-bersama.png"
    },
    {
        id: 3,
        title: "Tips Mengelola Sampah Rumah Tangga Mandiri",
        excerpt: "Langkah-langkah praktis bagi keluarga untuk mulai memilah sampah dari dapur hingga ke pusat daur ulang...",
        category: "Edukasi",
        date: "08 Feb 2025",
        author: "Rohman",
        image: "/product-display.jpg"
    }
];

export default function BlogSection() {
    return (
        <section id="blog" className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6">
                    <div className="max-w-2xl px-2 md:px-0">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-[10px] md:text-xs font-bold mb-3 md:mb-4 uppercase tracking-widest">
                            <Tag size={12} />
                            BERITA TERBARU
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-0">Wawasan & Inovasi</h2>
                    </div>
                    <button className="flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition-all border-b-2 border-primary-200 pb-1 text-sm md:text-base">
                        Lihat Semua Artikel
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {posts.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative h-64 rounded-[2.2rem] overflow-hidden shadow-lg mb-8">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary-700 shadow-md">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center gap-6 text-xs text-gray-500 mb-4 font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-primary-500" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={14} className="text-primary-500" />
                                    {post.author}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-3 md:mb-4 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 line-clamp-3 text-sm md:text-base">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center gap-3 text-primary-700 font-extrabold text-sm uppercase tracking-wider group-hover:gap-5 transition-all">
                                Baca Selengkapnya
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
