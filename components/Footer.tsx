import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-bold mb-4">GREENETIX BOY</h3>
                        <p className="text-primary-100 mb-4 leading-relaxed">
                            Transformasi limbah popok menjadi produk bernilai ekonomi tinggi untuk masa depan yang lebih berkelanjutan.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Produk</h4>
                        <ul className="space-y-2 text-primary-100">
                            <li><a href="#products" className="hover:text-white transition-colors">PUPO</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">LIPOBAY</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">LF OIL</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Informasi</h4>
                        <ul className="space-y-2 text-primary-100">
                            <li><a href="#circular-economy" className="hover:text-white transition-colors">Ekonomi Sirkular</a></li>
                            <li><a href="#team" className="hover:text-white transition-colors">Tim Kami</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Hubungi Kami</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-700 pt-8 text-center">
                    <p className="text-primary-200">
                        &copy; {new Date().getFullYear()} Greenetix Boy. All rights reserved.
                    </p>
                    <p className="text-primary-300 text-sm mt-2">
                        🌱 Bersama membangun masa depan yang lebih hijau 🌍
                    </p>
                </div>
            </div>
        </footer>
    );
}
