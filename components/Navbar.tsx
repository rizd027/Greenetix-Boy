"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Languages, ChevronDown, ArrowUp } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [language, setLanguage] = useState<"ID" | "EN">("ID");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowScrollToTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { id: "home", label: "Beranda" },
        { id: "circular-economy", label: "Ekonomi Sirkular" },
        { id: "products", label: "Produk" },
        { id: "impact", label: "Dampak" },
        { id: "team", label: "Tim" },
        { id: "contact", label: "Kontak" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="relative w-28 md:w-40 transform group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/logo.png"
                                alt="Greenetix Boy Logo"
                                width={140}
                                height={50}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${isScrolled
                                    ? "text-primary-700 hover:bg-primary-100 hover:text-primary-800"
                                    : "text-white hover:bg-white/20"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA & Language */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
                            className={`flex items-center gap-2 px-3 py-2 rounded-full font-bold text-sm transition-all ${isScrolled ? "text-primary-800 hover:bg-primary-50" : "text-white hover:bg-white/20"
                                }`}
                        >
                            <Languages size={18} />
                            {language}
                            <ChevronDown size={14} className="opacity-50" />
                        </button>

                        <button
                            onClick={() => scrollToSection("contact")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${isScrolled
                                ? "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl"
                                : "bg-white text-primary-700 hover:bg-primary-50"
                                }`}
                        >
                            Hubungi Kami
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? "bg-primary-700" : "bg-white"
                                    } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                            ></span>
                            <span
                                className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? "bg-primary-700" : "bg-white"
                                    } ${isMobileMenuOpen ? "opacity-0" : ""}`}
                            ></span>
                            <span
                                className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? "bg-primary-700" : "bg-white"
                                    } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-2 pt-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-4 py-3 rounded-xl font-medium text-left transition-all duration-300 ${isScrolled
                                    ? "text-primary-700 hover:bg-primary-100"
                                    : "text-white hover:bg-white/20"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100 mt-2">
                            <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                                <Languages size={18} />
                                Bahasa
                            </span>
                            <button
                                onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
                                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-bold text-sm"
                            >
                                {language}
                            </button>
                        </div>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="mt-2 px-4 py-4 rounded-xl font-bold bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                        >
                            Hubungi Kami
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollToTop && (
                <button
                    onClick={scrollToTop} // Changed to scrollToTop
                    className="fixed bottom-6 right-6 z-40 p-2 md:p-4 bg-primary-600 text-white rounded-full shadow-2xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-110 active:scale-95 group border-2 border-white/20 backdrop-blur-sm"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} className="md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
                </button>
            )}
        </nav>
    );
}
