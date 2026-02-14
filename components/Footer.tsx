import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tight">GREENETIX BOY</h3>
                        <p className="text-[11px] md:text-base text-primary-100 mb-4 md:mb-6 leading-relaxed font-medium">
                            Transformasi limbah popok menjadi produk bernilai ekonomi tinggi untuk masa depan yang lebih berkelanjutan.
                        </p>
                        <div className="flex gap-2 md:gap-3">
                            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full transition-all duration-300">
                                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full transition-all duration-300">
                                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full transition-all duration-300">
                                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-xs md:text-lg mb-3 md:mb-4 uppercase tracking-widest">Produk</h4>
                        <ul className="space-y-1.5 md:space-y-2 text-primary-100">
                            <li><a href="#products" className="hover:text-white transition-colors text-[10px] md:text-base font-bold uppercase tracking-tight">PUPO</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors text-[10px] md:text-base font-bold uppercase tracking-tight">LIPOBAY</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors text-[10px] md:text-base font-bold uppercase tracking-tight">LF OIL</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-xs md:text-lg mb-3 md:mb-4 uppercase tracking-widest">Informasi</h4>
                        <ul className="space-y-1.5 md:space-y-2 text-primary-100">
                            <li><a href="#circular-economy" className="hover:text-white transition-colors text-[10px] md:text-base font-bold uppercase tracking-tight">Ekonomi Sirkular</a></li>
                            <li><a href="#team" className="hover:text-white transition-colors text-[10px] md:text-base font-bold uppercase tracking-tight">Tim Kami</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors text-[10px] md:text-base font-bold uppercase tracking-tight">Hubungi Kami</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-700 pt-6 md:pt-8 text-center">
                    <p className="text-[10px] md:text-sm text-primary-200 font-bold uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Greenetix Boy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
