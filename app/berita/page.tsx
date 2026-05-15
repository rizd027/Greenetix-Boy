"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { beritaData } from "@/lib/data/posts";
const posts = beritaData.items;
import Image from "next/image";
import { Calendar, User, ArrowRight, Tag, X, ChevronLeft, ChevronRight, Share2, Images, Home, Search, Filter, LayoutGrid, List, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function BeritaPage() {
    const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = useState("");


    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

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


    // Article Navigation Handlers
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

    // Share functionality
    const handleShare = async (e: React.MouseEvent, post: typeof posts[0]) => {
        e.stopPropagation();
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (error) {
                console.log("Error sharing", error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert("Tautan disalin ke clipboard!");
        }
    };

    // Pagination for Main Modal Images
    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost || !selectedPost.images) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedPost.images!.length);
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedPost || !selectedPost.images) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedPost.images!.length) % selectedPost.images!.length);
    };

    // Fullscreen Image Handlers
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
        <main className="min-h-screen bg-[#FDFCF9]">
            {/* Professional Sticky Header */}
            <div className="sticky top-0 z-50 w-full px-2 md:px-4 py-3 bg-white/80 backdrop-blur-xl border-b border-primary-100/50 shadow-sm transition-all duration-300">
                <div className="container mx-auto flex items-center justify-between gap-4 pointer-events-auto">
                    <div className="flex items-center gap-3">
                        {/* Back Button - Icon Only */}
                        <Link
                            href="/"
                            className="group flex items-center justify-center w-10 h-10 bg-white border border-primary-200 rounded-xl text-primary-950 shadow-lg shadow-primary-900/10 hover:shadow-primary-900/20 hover:border-primary-300 transition-all active:scale-95"
                            title="Kembali ke Beranda"
                        >
                            <Home size={18} className="text-primary-700 group-hover:text-primary-600 transition-colors" />
                        </Link>

                        {/* Header Title - Adjacent to Home */}
                        <h1 className="hidden sm:block text-[11px] md:text-sm font-black text-primary-950 uppercase tracking-widest border-l border-primary-100 pl-4 py-1">
                            {beritaData.pageTitle} <span className="text-primary-600">{beritaData.pageTitleHighlight}</span>
                        </h1>
                    </div>

                    {/* Right Section: Search Bar & View Toggle */}
                    <div className="flex items-center gap-3 flex-grow md:flex-grow-0 justify-end">
                        {/* Search Bar - Premium Standalone */}
                        <motion.div 
                            whileHover={{ scale: 1.01 }}
                            className="flex items-center bg-white border border-primary-200 pl-4 pr-2 py-1.5 rounded-full shadow-xl shadow-primary-900/10 focus-within:border-primary-400 focus-within:ring-4 focus-within:ring-primary-500/5 transition-all w-full md:w-auto min-w-[200px] sm:min-w-[280px] lg:min-w-[320px] group"
                        >
                            <Search size={16} className="text-primary-400 group-focus-within:text-primary-600 transition-colors mr-3" />
                            <input
                                type="text"
                                placeholder="Cari artikel..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-[13px] font-bold text-primary-950 placeholder:text-primary-300 placeholder:font-medium py-1"
                            />
                            <AnimatePresence>
                                {searchQuery && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        onClick={() => setSearchQuery("")}
                                        className="p-1.5 hover:bg-primary-50 rounded-full text-primary-400 hover:text-primary-600 transition-colors ml-1"
                                        title="Bersihkan pencarian"
                                    >
                                        <X size={12} />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-1 bg-white border border-primary-200 p-1 rounded-xl shadow-lg shadow-primary-900/5">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-primary-600 text-white shadow-md shadow-primary-600/20" : "text-primary-400 hover:text-primary-600 hover:bg-primary-50"}`}
                                title="Grid View"
                            >
                                <LayoutGrid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-1.5 rounded-lg transition-all ${viewMode === "list" ? "bg-primary-600 text-white shadow-md shadow-primary-600/20" : "text-primary-400 hover:text-primary-600 hover:bg-primary-50"}`}
                                title="List View"
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-6 mb-16">
                <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-6"}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-[2.5rem] p-2 shadow-xl shadow-primary-900/5 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 group cursor-pointer border border-primary-100/50 flex ${viewMode === "grid" ? "flex-col h-full" : "flex-col md:flex-row gap-6 h-auto md:h-72"}`}
                                onClick={() => setSelectedPost(post)}
                            >
                                {/* Image Container */}
                                <div className={`relative rounded-[2rem] overflow-hidden ${viewMode === "grid" ? "h-60 mb-3" : "h-60 md:h-full md:w-96 flex-shrink-0"}`}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                    {/* Top Badges */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                        <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-primary-700 shadow-lg uppercase">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`px-2 flex-grow flex flex-col ${viewMode === "list" ? "py-4 md:pr-6" : ""}`}>
                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-[11px] font-bold tracking-wider text-primary-400 mb-1.5 uppercase">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-primary-500" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <User size={14} className="text-primary-500" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h3 className={`font-black text-primary-950 group-hover:text-primary-600 transition-colors leading-snug ${viewMode === "grid" ? "text-xl mb-1.5" : "text-2xl md:text-3xl mb-3"}`}>
                                        {post.title}
                                    </h3>

                                    <p className={`text-gray-500 leading-relaxed font-medium flex-grow ${viewMode === "grid" ? "text-sm mb-3" : "text-base mb-6"}`}>
                                        {post.excerpt}
                                    </p>

                                    {/* Footer of Card */}
                                    <div className="flex items-center justify-between pt-3 border-t border-primary-100/50 mt-auto">
                                        <div className="flex items-center gap-2 text-primary-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                                            Baca Artikel
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center">
                            <div className="w-16 h-16 bg-primary-50 text-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-primary-900 mb-2 uppercase">Artikel Tidak Ditemukan</h3>
                            <p className="text-gray-500 font-medium">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
                            <button
                                onClick={() => { setSearchQuery(""); }}
                                className="mt-6 px-8 py-3 bg-primary-600 text-white font-black rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-widest text-sm"
                            >
                                Reset Pencarian
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />

            {/* Modal - Mirrored from BlogSection.tsx */}
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
                                        <button 
                                            onClick={(e) => handleShare(e, selectedPost)}
                                            className="ml-auto p-2 hover:bg-primary-50 rounded-full transition-colors text-primary-600"
                                            title="Bagikan"
                                        >
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="prose prose-lg max-w-none text-primary-800 font-medium leading-relaxed">
                                        {selectedPost.content.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className="mb-6 last:mb-0 text-justify">
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

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(51, 153, 102, 0.2);
                    border-radius: 20px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background-color: rgba(51, 153, 102, 0.4);
                }
            `}</style>
        </main>
    );
}
