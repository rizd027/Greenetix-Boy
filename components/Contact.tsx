"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Alamat Kami",
            details: ["Sukoharjo, Jawa Tengah", "Indonesia"],
        },
        {
            icon: Phone,
            title: "Telepon",
            details: ["+62 812-3456-7890", "Tersedia jam 08:00 - 17:00"],
        },
        {
            icon: Mail,
            title: "Email",
            details: ["hello@greenetixboy.com", "info@greenetixboy.com"],
        },
    ];

    return (
        <section id="contact" className="py-12 md:py-24 bg-cream-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-100/50 skew-x-12 translate-x-1/2 -z-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">

                        {/* Left Side: Info & Map Placeholder */}
                        <div>
                            <h2 className="text-2xl md:text-5xl font-black text-primary-800 mb-3 md:mb-6 uppercase tracking-tight">
                                Hubungi Kami
                            </h2>
                            <p className="text-sm md:text-xl text-primary-600 mb-6 md:mb-12 font-medium leading-relaxed">
                                Punya pertanyaan tentang produk kami atau ingin berkolaborasi?
                                Kami siap membantu Anda mewujudkan lingkungan yang lebih hijau.
                            </p>

                            <div className="grid gap-5 md:gap-8 mb-8 md:mb-12">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex gap-4 md:gap-6 group">
                                        <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl shadow-md flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300 transform group-hover:rotate-6">
                                            <info.icon className="w-5 h-5 md:w-7 md:h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-800 text-sm md:text-lg mb-0.5 md:mb-1 uppercase tracking-tight">{info.title}</h4>
                                            {info.details.map((detail, i) => (
                                                <p key={i} className="text-[11px] md:text-base text-gray-600 font-medium">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl h-48 md:h-64 bg-gray-200 relative group border-2 md:border-4 border-white">
                                <div className="absolute inset-0 bg-primary-800/20 group-hover:bg-primary-800/10 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center flex-col text-primary-900 z-10 pointer-events-none">
                                    <MapPin className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                                    <p className="font-black text-sm md:text-base uppercase tracking-tight">Sukoharjo, Jawa Tengah</p>
                                    <p className="text-[10px] md:text-sm font-bold opacity-80 uppercase tracking-wider">Lihat di Google Maps</p>
                                </div>
                                {/* Real Map iframe could go here */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126588.42398551944!2d110.7410!3d-7.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1628e932ff49%3A0xc3bba4d6199bd815!2sSukoharjo%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, opacity: 0.6 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="bg-white p-5 sm:p-10 md:p-12 rounded-2xl md:rounded-[2.5rem] shadow-2xl relative">
                            <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-24 sm:h-24 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-xl transform rotate-12">
                                <Mail className="w-6 h-6 sm:w-10 sm:h-10" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-[10px] md:text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">Nama Lengkap</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 text-sm md:text-base focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-[10px] md:text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 text-sm md:text-base focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[10px] md:text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">Subjek</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        placeholder="Kerja Sama / Pertanyaan Produk"
                                        className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 text-sm md:text-base focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[10px] md:text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">Pesan</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tuliskan pesan Anda di sini..."
                                        className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 text-sm md:text-base focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all resize-none font-medium"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitStatus === "success"}
                                    className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 uppercase tracking-wider ${submitStatus === "success"
                                        ? "bg-green-500 text-white"
                                        : "bg-primary-600 text-white hover:bg-primary-700"
                                        } disabled:opacity-70 disabled:transform-none`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                                            Mengirim...
                                        </>
                                    ) : submitStatus === "success" ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                                            Berhasil!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 md:w-6 md:h-6" />
                                            Kirim Pesan
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
