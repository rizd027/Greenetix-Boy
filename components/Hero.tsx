"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Recycle, RefreshCw } from "lucide-react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "product-display.jpg",
    "products-1.jpg",
    "products-2.jpg",
    "team-bersama.png"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark/Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Decorative Pattern Overlay (Moved on top of images) */}
      <div className="absolute inset-0 opacity-20 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(51, 153, 102, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(239, 230, 156, 0.25) 0%, transparent 50%),
                            radial-gradient(circle at 40% 90%, rgba(51, 153, 102, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      {/* Animated background elements (Moved on top) */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cream-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Circular Economy Symbols */}
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <Recycle size={120} className="text-white animate-spin-slow" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-10">
          <RefreshCw size={100} className="text-white animate-spin-reverse" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="text-center relative">
          <h1
            ref={textRef}
            className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.2] mb-4 md:mb-6 tracking-tight drop-shadow-2xl uppercase"
          >
            Ubah Limbah Jadi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">
              Berkah Berharga
            </span>
          </h1>

          <p className="text-sm md:text-2xl text-white max-w-2xl mx-auto font-medium leading-relaxed opacity-0 animate-fade-in-delay-1 drop-shadow-lg px-6">
            Inovasi ekonomi sirkular pertama di dunia yang mengubah limbah popok bayi menjadi produk bernilai tinggi.
          </p>

          <div className="mt-8 md:mt-16 flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center animate-fade-in-delay-2 opacity-0 px-10 md:px-0">
            <button
              onClick={() => scrollToSection("products")}
              className="group relative px-6 py-3.5 md:px-10 md:py-5 bg-primary-600 text-white text-sm md:text-base font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 w-full md:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Pelajari Lebih Lanjut
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 md:px-10 md:py-5 bg-white/10 backdrop-blur-md text-white text-sm md:text-base font-bold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg w-full md:w-auto"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s forwards;
          opacity: 0;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
