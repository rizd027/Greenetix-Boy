import fs from "fs";
import path from "path";
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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";

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
