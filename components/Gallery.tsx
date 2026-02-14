"use client";

import Image from "next/image";

export default function Gallery() {
    return (
        <section className="py-10 md:py-20 bg-gradient-to-b from-white to-cream-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-5xl font-black text-primary-800 mb-2 md:mb-4 uppercase tracking-tight">
                        Galeri Produk
                    </h2>
                    <p className="text-xs md:text-xl text-primary-600 max-w-2xl mx-auto px-2 md:px-4 font-medium leading-relaxed">
                        Lihat hasil transformasi limbah popok menjadi produk berkualitas yang ramah lingkungan
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {/* Product Display Image */}
                    <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="relative w-full h-48 md:h-80">
                            <Image
                                src="/product-display.jpg"
                                alt="Greenetix Boy Product Display"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                            <p className="text-white font-black text-xs md:text-lg uppercase tracking-wider">Display Produk</p>
                        </div>
                    </div>

                    {/* Product 1 */}
                    <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="relative w-full h-48 md:h-80">
                            <Image
                                src="/products-1.jpg"
                                alt="Transformasi Limbah Popok"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                            <p className="text-white font-black text-xs md:text-lg uppercase tracking-wider">Proses Transformasi</p>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="relative w-full h-48 md:h-80">
                            <Image
                                src="/products-2.jpg"
                                alt="Hasil Produk Greenetix"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                            <p className="text-white font-black text-xs md:text-lg uppercase tracking-wider">Hasil Produk</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
