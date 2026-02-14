"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 p-2 md:p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    );
}
