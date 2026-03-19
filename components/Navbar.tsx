"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleActivity = (e?: any) => {
            if (e && e.type === "mousemove") {
                if (e.clientY < 80) {
                    setIsVisible(true);
                } else {
                    return; // Ignore mouse movements outside header
                }
            }
            // For scroll events, handleScroll already set the visibility.
            // This function primarily resets the inactivity timer.

            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // Update isScrolled
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            // Hide after 2 seconds of inactivity if scrolled down
            if (currentScrollY > 100 && !isMobileMenuOpen) {
                timeoutId = setTimeout(() => {
                    setIsVisible(false);
                }, 1000);
            }
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY.current) {
                // Scroll Up -> Show
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scroll Down -> Hide Immediately
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
            handleActivity({ type: "scroll" });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleActivity);

        // Initial check
        handleActivity();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleActivity);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { id: "home", label: "Beranda" },
        { id: "blog", label: "Berita", badge: "NEW" },
        { id: "circular-economy", label: "Ekonomi Sirkular" },
        { id: "impact", label: "KALKULATOR DAMPAK" },
        { id: "products", label: "Produk" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled || isMobileMenuOpen
                ? "bg-white/80 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                } ${isVisible ? "translate-y-0" : "-translate-y-full"
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
                                alt="Greenetix Indonesia Logo"
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
                                className={`relative px-4 py-2 rounded-full font-black text-sm uppercase tracking-tight transition-all duration-300 ${isScrolled
                                    ? "text-primary-700 hover:bg-primary-100"
                                    : "text-white hover:bg-white/20"
                                    }`}
                            >
                                {link.label}
                                {link.badge && (
                                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded-full animate-pulse shadow-sm">
                                        {link.badge}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">

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
                                className="relative px-4 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-primary-700 hover:bg-primary-50 transition-all duration-300 text-left border-b border-primary-50/50 last:border-0"
                            >
                                <span className="flex items-center justify-between w-full">
                                    {link.label}
                                    {link.badge && (
                                        <span className="bg-orange-500 text-white text-[8px] px-2 py-0.5 rounded-full animate-pulse">
                                            {link.badge}
                                        </span>
                                    )}
                                </span>
                            </button>
                        ))}
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
