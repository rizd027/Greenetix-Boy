"use client";

import { ArrowRight, Calendar, User, Tag, ChevronRight, X, Clock, Share2, ChevronLeft, Images } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { beritaData } from "@/lib/data/posts";
const posts = beritaData.items.slice(0, 3);
import Link from "next/link";

export default function BlogSection() {
    const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost) return;
        const currentIndex = posts.findIndex(p => p.id === selectedPost.id);
        const nextIndex = (currentIndex + 1) % posts.length;
        setSelectedPost(posts[nextIndex]);
        setCurrentImageIndex(0);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost) return;
        const currentIndex = posts.findIndex(p => p.id === selectedPost.id);
        const prevIndex = (currentIndex - 1 + posts.length) % posts.length;
        setSelectedPost(posts[prevIndex]);
        setCurrentImageIndex(0);
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost || !selectedPost.images) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedPost.images.length);
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost || !selectedPost.images) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedPost.images.length) % selectedPost.images.length);
    };

    // Stop body scroll when modal is open
    useEffect(() => {
        if (selectedPost || fullscreenImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPost, fullscreenImageIndex]);

    // Auto slider for hero image
    useEffect(() => {
        if (!selectedPost || !selectedPost.images || selectedPost.images.length <= 1 || fullscreenImageIndex !== null) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % selectedPost.images!.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [selectedPost, fullscreenImageIndex]);

    const handleNextFullscreenImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost || !selectedPost.images || fullscreenImageIndex === null) return;
        setFullscreenImageIndex((prev) => prev !== null ? (prev + 1) % selectedPost.images!.length : null);
    };

    const handlePrevFullscreenImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost || !selectedPost.images || fullscreenImageIndex === null) return;
        setFullscreenImageIndex((prev) => prev !== null ? (prev - 1 + selectedPost.images!.length) % selectedPost.images!.length : null);
    };

    return (
        <>
            <section id="blog" className="py-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6 gap-6">
                        <div className="max-w-2xl px-2 md:px-0">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-[10px] md:text-xs font-bold mb-0 uppercase tracking-widest">
                                <Tag size={12} />
                                {beritaData.sectionTag}
                            </div>
                        </div>
                        <Link href={beritaData.viewAllLink} className="flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition-all border-b-2 border-primary-200 pb-1 text-sm md:text-base cursor-pointer">
                            {beritaData.viewAllText}
                            <ChevronRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {posts.map((post, index) => (
                            <div
                                key={index}
                                className={`group cursor-pointer ${index === 2 ? 'hidden lg:block' : ''}`}
                                onClick={() => setSelectedPost(post)}
                            >
                                {/* Image Container */}
                                <div className="relative h-40 md:h-64 rounded-[1.5rem] md:rounded-[2.2rem] overflow-hidden shadow-lg mb-3 md:mb-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                                    <div className="absolute top-3 left-3 md:top-6 md:left-6">
                                        <span className="px-3 py-0.5 md:px-4 md:py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-bold text-primary-700 shadow-md">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-2 md:gap-6 text-[10px] md:text-xs text-gray-500 mb-1.5 md:mb-2 font-medium">
                                    <div className="flex items-center gap-1.5 md:gap-2">
                                        <Calendar size={12} className="md:w-[14px] md:h-[14px] text-primary-500" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5 md:gap-2">
                                        <User size={12} className="md:w-[14px] md:h-[14px] text-primary-500" />
                                        {post.author}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-sm md:text-2xl font-bold text-primary-900 mb-1.5 md:mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="hidden md:block text-gray-600 leading-relaxed mb-4 line-clamp-3 text-sm md:text-base">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-2 md:gap-3 text-primary-700 font-extrabold text-[10px] md:text-sm uppercase tracking-wider group-hover:gap-5 transition-all">
                                    {/* Baca Selengkapnya text is hidden on mobile to avoid overlap */}
                                    <span className="hidden md:inline">Baca Selengkapnya</span>
                                    <span className="md:hidden">Detail</span>
                                    <ArrowRight size={14} className="md:w-[18px] md:h-[18px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedPost && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedPost(null)}
                                className="absolute inset-0 bg-primary-950/80 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1 }}
                                className="relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col"
                            >
                                {/* Top Right Controls */}
                                <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-[60] flex items-center gap-3">
                                    {/* Navigation Buttons (Desktop) */}
                                    <div className="hidden md:flex items-center gap-3">
                                        <button
                                            onClick={handlePrev}
                                            className="p-3 bg-primary-900/10 hover:bg-primary-900/20 backdrop-blur-md rounded-full text-primary-900 border border-primary-900/10 transition-all group"
                                            aria-label="Previous post"
                                        >
                                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="p-3 bg-primary-900/10 hover:bg-primary-900/20 backdrop-blur-md rounded-full text-primary-900 border border-primary-900/10 transition-all group"
                                            aria-label="Next post"
                                        >
                                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    {/* Exit Button */}
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="p-3 bg-primary-900/10 hover:bg-primary-900/20 backdrop-blur-md rounded-full text-primary-900 border border-primary-900/10 transition-all group"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                                    </button>
                                </div>

                                <div id="modal-scroll-container" className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
                                    {/* Hero Header */}
                                    <div
                                        className="relative h-[40vh] md:h-[50vh] w-full group/slider cursor-pointer"
                                        onClick={() => {
                                            if (selectedPost.images && selectedPost.images.length > 0) {
                                                setFullscreenImageIndex(currentImageIndex);
                                            }
                                        }}
                                    >
                                        <Image
                                            src={selectedPost.images ? selectedPost.images[currentImageIndex] : selectedPost.image}
                                            alt={selectedPost.title}
                                            fill
                                            className="object-cover transition-opacity duration-500"
                                        />

                                        {/* Image Slider Controls */}
                                        {selectedPost.images && selectedPost.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={handlePrevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white border border-white/30 transition-all opacity-0 group-hover/slider:opacity-100"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={handleNextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white border border-white/30 transition-all opacity-0 group-hover/slider:opacity-100"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>

                                                {/* Image Indicators */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                                                    {selectedPost.images.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCurrentImageIndex(idx);
                                                            }}
                                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex
                                                                ? "bg-white w-4"
                                                                : "bg-white/50 hover:bg-white/80"
                                                                }`}
                                                            aria-label={`Go to image ${idx + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                                        <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                                            <span className="inline-block px-4 py-1.5 bg-primary-600 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest shadow-lg">
                                                {selectedPost.category}
                                            </span>
                                            <h2 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight uppercase drop-shadow-lg">
                                                {selectedPost.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 md:p-12">
                                        <div className="flex flex-wrap items-center gap-6 mb-10 pb-6 border-b border-primary-100">
                                            <div className="flex items-center gap-2 text-primary-600 font-bold">
                                                <Calendar className="w-5 h-5" />
                                                <span>{selectedPost.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-primary-600 font-bold">
                                                <User className="w-5 h-5" />
                                                <span>{selectedPost.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-primary-600 font-bold">
                                                <Clock className="w-5 h-5" />
                                                <span>{selectedPost.readTime}</span>
                                            </div>
                                            <button className="ml-auto p-2 hover:bg-primary-50 rounded-full transition-colors text-primary-600">
                                                <Share2 className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="prose prose-lg max-w-none text-primary-800 font-medium leading-relaxed">
                                            {selectedPost.content.split('\n\n').map((paragraph, i) => (
                                                <p key={i} className="mb-6 last:mb-0">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Dokumentasi / Gallery */}
                                        {selectedPost.images && selectedPost.images.length > 1 && (
                                            <div className="mt-16 pt-10 border-t border-primary-100">
                                                <div className="flex items-center gap-3 mb-8">
                                                    <div className="p-3 bg-primary-100 text-primary-600 rounded-xl">
                                                        <Images size={24} />
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-black text-primary-900 uppercase tracking-tight">
                                                        Galeri Dokumentasi
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-3 gap-3 md:gap-4">
                                                    {selectedPost.images.map((img, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer h-28 md:h-40"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setFullscreenImageIndex(idx);
                                                            }}
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={`Dokumentasi ${idx + 1}`}
                                                                fill
                                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center bg-primary-900/0 group-hover:bg-primary-900/20 transition-all duration-300">
                                                                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                                                    <Images className="w-6 h-6 text-primary-900" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-16 p-8 bg-primary-50 rounded-3xl border border-primary-100 mb-12">
                                            <h4 className="text-primary-900 font-black uppercase tracking-tight mb-2">Tertarik dengan program ini?</h4>
                                            <p className="text-primary-600 font-medium mb-6">Mari berkolaborasi membangun masa depan energi yang lebih hijau dan berkelanjutan.</p>
                                            <div className="flex flex-wrap gap-4 items-center justify-between">
                                                <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-black rounded-full transition-all transform hover:scale-105 uppercase tracking-wider text-sm shadow-md">
                                                    Hubungi Kami
                                                </button>
                                                <div className="flex md:hidden gap-2">
                                                    <button
                                                        onClick={handlePrev}
                                                        className="p-3 bg-primary-600 text-white rounded-full border border-primary-700 shadow-sm transition-all"
                                                    >
                                                        <ChevronLeft className="w-6 h-6" />
                                                    </button>
                                                    <button
                                                        onClick={handleNext}
                                                        className="p-3 bg-primary-600 text-white rounded-full border border-primary-700 shadow-sm transition-all"
                                                    >
                                                        <ChevronRight className="w-6 h-6" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </section>

            {/* Fullscreen Image Overlay */}
            <AnimatePresence>
                {fullscreenImageIndex !== null && selectedPost && selectedPost.images && (
                    <div className="fixed inset-0 z-[120] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setFullscreenImageIndex(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />

                        <div className="absolute top-6 right-6 z-50">
                            <button
                                onClick={() => setFullscreenImageIndex(null)}
                                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all group"
                            >
                                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                            </button>
                        </div>

                        {selectedPost.images.length > 1 && (
                            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 pointer-events-none z-40">
                                <button
                                    onClick={handlePrevFullscreenImage}
                                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110 pointer-events-auto"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={handleNextFullscreenImage}
                                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110 pointer-events-auto"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-[90vw] h-[85vh] z-30 flex items-center justify-center"
                        >
                            <Image
                                src={selectedPost.images[fullscreenImageIndex]}
                                alt="Fullscreen image"
                                fill
                                className="object-contain"
                                priority
                                sizes="100vw"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
