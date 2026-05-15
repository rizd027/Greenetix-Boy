import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientWrapper from "@/components/ClientWrapper";

// Lazy load components below the fold
const BlogSection = dynamic(() => import("@/components/BlogSection"), { ssr: true });
const CircularEconomy = dynamic(() => import("@/components/CircularEconomy"), { ssr: true });
const ImpactCalculator = dynamic(() => import("@/components/ImpactCalculator"), { ssr: true });
const Products = dynamic(() => import("@/components/Products"), { ssr: true });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: true });
const VideoShowcase = dynamic(() => import("@/components/VideoShowcase"), { ssr: true });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
    let heroImages: string[] = [];
    try {
        const heroDir = path.join(process.cwd(), "public", "hero");
        const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];
        const files = fs.readdirSync(heroDir);
        heroImages = files
            .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
            .map((file) => `/hero/${file}`);
    } catch {
        heroImages = [];
    }

    return (
        <ClientWrapper>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-cream-100">
                <Hero images={heroImages} />
                <BlogSection />
                <CircularEconomy />
                <ImpactCalculator />
                <Products />
                <Timeline />
                <VideoShowcase />
                <Stats />
                <Testimonials />
                <FAQ />
                <Contact />
                <Footer />
            </main>
        </ClientWrapper>
    );
}
