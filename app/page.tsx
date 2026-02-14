"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CircularEconomy from "@/components/CircularEconomy";
import ImpactCalculator from "@/components/ImpactCalculator";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import VideoShowcase from "@/components/VideoShowcase";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

            <div className={isLoading ? "h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-1000"}>
                <Navbar />
                <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-cream-100">
                    <Hero />
                    <CircularEconomy />
                    <ImpactCalculator />
                    <Products />
                    <Gallery />
                    <Timeline />
                    <VideoShowcase />
                    <Stats />
                    <Testimonials />
                    <BlogSection />
                    <FAQ />
                    <Newsletter />
                    <Contact />
                    <Footer />
                </main>
                <ScrollToTop />
            </div>
        </>
    );
}
