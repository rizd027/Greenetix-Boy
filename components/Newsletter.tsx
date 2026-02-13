"use client";

import { useState } from "react";
import { Mail, Loader2, Check } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6 text-white">
                            <Mail size={48} />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Bergabung dengan Gerakan Hijau Kami
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Dapatkan update terbaru tentang inovasi, tips lingkungan, dan berita
                        seputar Greenetix Boy langsung ke email Anda
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan email Anda"
                                required
                                disabled={status === "loading" || status === "success"}
                                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                {status === "loading" && <Loader2 size={20} className="animate-spin" />}
                                {status === "success" && <Check size={20} />}
                                {status === "idle" && "Berlangganan"}
                                {status === "loading" && "Memproses..."}
                                {status === "success" && "Berhasil!"}
                            </button>
                        </div>

                        {status === "success" && (
                            <p className="mt-4 text-white/90 animate-fade-in">
                                ✅ Terima kasih! Anda telah berlangganan newsletter kami.
                            </p>
                        )}
                    </form>

                    <p className="mt-6 text-sm text-white/70">
                        Kami menghargai privasi Anda. Unsubscribe kapan saja.
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
        </section>
    );
}
