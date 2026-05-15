"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/ChatBot";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            <div className={isLoading ? "h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-1000"}>
                {children}
                {/* Floating Action Buttons */}
                <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-2">
                    <ChatBot />
                    <ScrollToTop />
                </div>
            </div>
        </>
    );
}
