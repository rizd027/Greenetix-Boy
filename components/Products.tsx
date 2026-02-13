"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";

interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    benefits: string[];
    color: string;
    image: string;
}

const products: Product[] = [
    {
        id: "pupo",
        name: "PUPO",
        tagline: "Pupuk Organik Padat",
        description: "Media tanam premium yang diolah dari serat popok pilihan, diperkaya dengan nutrisi esensial untuk kesuburan tanah maksimal.",
        benefits: [
            "Kaya bahan organik",
            "Menjaga kelembapan tanah",
            "Memperbaiki struktur tanah",
            "Bebas patogen berbahaya"
        ],
        color: "from-green-500 to-emerald-700",
        image: "/product-display.jpg"
    },
    {
        id: "lipobay",
        name: "LIPOBAY",
        tagline: "Limbah Popok Bayi",
        description: "Bahan baku hasil pengolahan limbah popok bayi yang telah melalui proses sterilisasi dan dekomposisi untuk kebutuhan industri kreatif.",
        benefits: [
            "Tersterilisasi sempurna",
            "Ramah lingkungan",
            "Multifungsi untuk produk turunan",
            "Mendukung ekonomi sirkular"
        ],
        color: "from-emerald-500 to-teal-700",
        image: "/products-1.jpg"
    },
    {
        id: "lf-oil",
        name: "LF OIL",
        tagline: "Alternative Fuel",
        description: "Produk turunan berupa bahan bakar cair hasil pirolisis limbah yang dapat digunakan untuk kebutuhan energi industri skala kecil.",
        benefits: [
            "Nilai kalor stabil",
            "Reduksi limbah cair",
            "Solusi energi alternatif",
            "Emisi terkontrol"
        ],
        color: "from-teal-500 to-cyan-700",
        image: "/products-2.jpg"
    },
];

export default function Products() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section id="products" className="py-12 md:py-24 bg-cream-50 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
                        Produk Unggulan
                    </h2>
                    <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                        Solusi inovatif dari transformasi limbah untuk keberlanjutan lingkungan
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`group bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col ${expandedId === product.id ? "ring-2 ring-primary-500" : ""
                                }`}
                        >
                            {/* Product Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 transition-opacity duration-500 group-hover:opacity-40`}></div>
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-primary-800 shadow-lg">
                                        {product.tagline}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-3xl font-bold text-primary-800 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-2 italic">
                                    "{product.tagline}"
                                </p>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {product.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}>
                                                <Check size={12} className="text-white" strokeWidth={4} />
                                            </div>
                                            {benefit}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                                        className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${expandedId === product.id
                                            ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            : `bg-gradient-to-r ${product.color} text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]`
                                            }`}
                                    >
                                        {expandedId === product.id ? "Tutup Detail" : "Selengkapnya"}
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-300 ${expandedId === product.id ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === product.id ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
                                    }`}
                            >
                                <div className="p-8 bg-gray-50/50">
                                    <h4 className="font-bold text-primary-800 mb-4 uppercase tracking-wider text-sm">Informasi Teknis</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        Produk ini diproses melalui tahapan sterilisasi tinggi (uap panas/ozonisasi) untuk memastikan keamanan penggunaan. Kami berkomitmen pada standar kualitas yang ketat dalam setiap batch produksi untuk memberikan hasil terbaik bagi konsumen dan lingkungan.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                                            <p className="text-xs text-gray-500 mb-1">Status Produk</p>
                                            <p className="text-primary-700 font-bold">Siap Pakai</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                                            <p className="text-xs text-gray-500 mb-1">Standardisasi</p>
                                            <p className="text-primary-700 font-bold">Tersterilisasi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
