"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Languages, ChevronDown } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState<"ID" | "EN">("ID");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? "bg-white shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="flex items-center gap-2 md:gap-3 group cursor-pointer"
                    >
                        <div className="relative w-24 md:w-40 transform group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src={getAssetPath("/logo.png")}
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
                                className={`px-4 py-2 rounded-full font-black text-sm uppercase tracking-tight transition-all duration-300 ${isScrolled
                                    ? "text-primary-700 hover:bg-primary-100"
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
                            className={`flex items-center gap-2 px-3 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${isScrolled ? "text-primary-800 hover:bg-primary-50" : "text-white hover:bg-white/20"
                                }`}
                        >
                            <Languages size={16} />
                            {language}
                            <ChevronDown size={12} className="opacity-50" />
                        </button>

                        <button
                            onClick={() => scrollToSection("contact")}
                            className={`px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${isScrolled
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
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <span
                                className={`h-0.5 w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-primary-700" : "bg-white"
                                    } ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                            ></span>
                            <span
                                className={`h-0.5 w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-primary-700" : "bg-white"
                                    } ${isMobileMenuOpen ? "opacity-0" : ""}`}
                            ></span>
                            <span
                                className={`h-0.5 w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-primary-700" : "bg-white"
                                    } ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-[80vh] opacity-100 pb-8" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-1.5 pt-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="px-4 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-primary-700 hover:bg-primary-50 transition-all duration-300 text-left border-b border-primary-50/50 last:border-0"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="px-4 py-4 flex items-center justify-between border-t border-primary-50 mt-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400 flex items-center gap-2">
                                <Languages size={14} />
                                Bahasa / Language
                            </span>
                            <button
                                onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
                                className="px-4 py-1.5 bg-primary-600 text-white rounded-full font-black text-[10px] uppercase tracking-widest"
                            >
                                {language}
                            </button>
                        </div>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="mt-2 px-4 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest bg-primary-600 text-white shadow-lg shadow-primary-200 active:scale-95 transition-all"
                        >
                            Hubungi Kami
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
