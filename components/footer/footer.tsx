import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-20">
            {/* Üst kısım - 3 sütun */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">

                {/* 1️⃣ - Logo & Hakkımızda */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">LOGO</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Tarzını yansıtan en yeni koleksiyonlar burada. Kaliteli ürünleri uygun fiyatlarla keşfet!
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                        <MapPin size={18} />
                        <span>İstanbul, Türkiye</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                        <Phone size={18} />
                        <span>+90 555 555 55 55</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                        <Mail size={18} />
                        <span>info@eticaret.com</span>
                    </div>
                </div>

                {/* 2️⃣ - Bağlantılar */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h3>
                    <ul className="space-y-3">
                        {["Anasayfa", "Kategoriler", "İndirimdekiler", "Hakkımızda", "İletişim"].map((item) => (
                            <li key={item}>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3️⃣ - Sosyal Medya */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Bizi Takip Edin</h3>
                    <p className="text-sm text-gray-400 mb-4">
                        Kampanyaları ve yeni koleksiyonları kaçırmamak için bizi sosyal medyada takip et!
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors duration-300">
                            <Facebook size={24} />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors duration-300">
                            <Instagram size={24} />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors duration-300">
                            <Twitter size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Alt kısım - Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-500 gap-3">
                <p>© {new Date().getFullYear()} Eticaret. Tüm hakları saklıdır.</p>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-white transition-colors duration-300">
                        Gizlilik Politikası
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors duration-300">
                        Kullanım Şartları
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;