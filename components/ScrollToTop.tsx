"use client";

import { useState, useEffect } from "react";
import { ArrowUp, HelpCircle } from "lucide-react";

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

    const scrollToFAQ = () => {
        const faqSection = document.getElementById("faq");
        if (faqSection) {
            faqSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-2 transition-all duration-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}`}>
            {/* FAQ Button */}
            <button
                onClick={scrollToFAQ}
                className="p-2 md:p-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Go to FAQ"
            >
                <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="p-2 md:p-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
            </button>
        </div>
    );
}
