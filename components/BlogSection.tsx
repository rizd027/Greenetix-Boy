"use client";

import { Calendar, User, ArrowRight, Tag, ChevronLeft, ChevronRight, X, Maximize2, Newspaper, Megaphone, Globe, Search, Clock, Share2, Images } from "lucide-react";
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
    const [activeMobileIndex, setActiveMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);


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
            <section id="blog" className="min-h-screen flex flex-col justify-center py-12 md:py-24 bg-cream-50/30 relative overflow-hidden">
                {/* Background Decorations - Optimized for performance */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated Gradient Blobs - Reduced blur on mobile */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-100/20 rounded-full blur-[60px] md:blur-[120px] will-change-transform hidden md:block"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.15, 0.1],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-40 -right-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-50/40 rounded-full blur-[80px] md:blur-[150px] will-change-transform hidden md:block"
                    />

                    {/* Decorative Background Text - static on mobile, animated whileInView */}
                    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-[100px] md:text-[180px] font-black text-primary-900/10 tracking-[-0.05em] leading-none uppercase"
                        >
                            BERITA
                        </motion.span>
                    </div>

                    {/* Floating Icons - Hidden on mobile for performance */}
                    <div className="hidden md:block absolute inset-0 opacity-[0.05]">
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[12%] left-[8%]"
                        >
                            <Newspaper size={80} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[20%] right-[10%]"
                        >
                            <Megaphone size={70} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                            className="absolute bottom-[15%] left-[12%]"
                        >
                            <Globe size={110} />
                        </motion.div>
                        <motion.div
                            animate={{ x: [0, 15, 0], rotate: [0, 3, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-[25%] right-[8%]"
                        >
                            <Search size={90} />
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center mb-10 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-sm border border-primary-100 rounded-full text-primary-700 text-[10px] md:text-sm font-black mb-4 uppercase tracking-[0.2em]">
                            <Tag size={14} className="text-primary-500" />
                            {beritaData.sectionTag}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-primary-900 mb-3 uppercase tracking-tight leading-tight">
                            {beritaData.pageTitle}
                        </h2>
                        <div className="w-16 h-1.5 bg-primary-600 rounded-full mb-4"></div>
                        <p className="text-[11px] md:text-lg text-primary-600 font-bold uppercase tracking-[0.25em] max-w-2xl">
                            Menelusuri Jejak Inovasi Berkelanjutan
                        </p>
                    </div>

                    <div className="relative overflow-hidden md:overflow-visible group/carousel">
                        <motion.div
                            animate={{ x: isMobile ? `calc(-${activeMobileIndex * 100}% - ${activeMobileIndex * 24}px)` : 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 120 }}
                            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 md:w-auto md:flex-shrink-1 group cursor-pointer"
                                    onClick={() => setSelectedPost(post)}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-60 md:h-72 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-900/10 mb-6 md:mb-8 group/img bg-slate-100">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute top-6 left-6">
                                            <span className="px-5 py-2 bg-white/95 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-black text-primary-700 shadow-xl uppercase tracking-wider border border-white/20">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex items-center gap-6 text-[10px] md:text-xs text-primary-400 mb-4 font-black uppercase tracking-widest">
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
                                    <h3 className="text-lg md:text-2xl font-black text-primary-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight uppercase tracking-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-[11px] md:text-base font-medium opacity-80">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-4 text-primary-700 font-black text-xs md:text-base uppercase tracking-wider group-hover:gap-6 transition-all">
                                        BACA SELENGKAPNYA
                                        <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Navigation Dots (Mobile only) */}
                        <div className="flex md:hidden justify-center items-center gap-6 mt-12 mb-10">
                            <button
                                onClick={() => setActiveMobileIndex((prev) => Math.max(0, prev - 1))}
                                className={`p-3 bg-white shadow-xl rounded-full text-primary-600 border border-primary-100 transition-all active:scale-90 ${activeMobileIndex === 0 ? "opacity-20 cursor-not-allowed" : "opacity-100"}`}
                                disabled={activeMobileIndex === 0}
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="flex items-center gap-4">
                                {posts.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveMobileIndex(idx)}
                                        className={`transition-all duration-700 rounded-full ${idx === activeMobileIndex
                                            ? "w-12 h-2.5 bg-primary-600 shadow-xl shadow-primary-600/30"
                                            : "w-2.5 h-2.5 bg-primary-200 hover:bg-primary-300"
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setActiveMobileIndex((prev) => Math.min(posts.length - 1, prev + 1))}
                                className={`p-3 bg-white shadow-xl rounded-full text-primary-600 border border-primary-100 transition-all active:scale-90 ${activeMobileIndex === posts.length - 1 ? "opacity-20 cursor-not-allowed" : "opacity-100"}`}
                                disabled={activeMobileIndex === posts.length - 1}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Desktop & Mobile View All Link */}
                        <div className="flex flex-col items-center gap-8 mt-12 md:mt-20">
                            <Link
                                href="/berita"
                                className="group flex items-center gap-4 px-8 py-3.5 bg-primary-600 text-white rounded-full font-black text-xs md:text-base transition-all hover:bg-primary-700 shadow-2xl shadow-primary-600/20 active:scale-95 uppercase tracking-[0.15em]"
                            >
                                Lihat Semua Artikel
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1.5" />
                            </Link>

                            {/* Mobile Impact Footer (Fills bottom space) */}
                            <div className="flex md:hidden flex-col items-center mt-4 text-center">
                                <p className="text-[10px] text-primary-600/50 font-black uppercase tracking-[0.3em] leading-relaxed max-w-[300px]">
                                    Setiap artikel adalah langkah nyata<br />menuju masa depan berkelanjutan.
                                </p>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="mt-6 text-primary-200"
                                >
                                    <div className="w-1 h-12 bg-gradient-to-b from-primary-200 to-transparent rounded-full"></div>
                                </motion.div>
                            </div>
                        </div>
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
