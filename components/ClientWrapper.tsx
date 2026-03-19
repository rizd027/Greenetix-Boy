"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            <div className={isLoading ? "h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-1000"}>
                {children}
                <ScrollToTop />
            </div>
        </>
    );
}
