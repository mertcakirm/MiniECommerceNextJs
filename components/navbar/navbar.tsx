"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Basket from "@/components/navbar/Basket";
import ProfileDropdown from "@/components/navbar/ProfileDropdown";
import SearchBar from "@/components/navbar/SearchBar";
import Image from "next/image";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            } bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-md`}
        >
            <div className="flex items-center justify-between py-3 px-5">
                <Link href="/" className="text-white font-bold text-xl">
                    <Image src="/logo.jpg" alt={"logo"} className="" width="50" height="50"  />
                </Link>

                <SearchBar />

                <div className="flex items-center space-x-4">
                    <Basket />
                    <ProfileDropdown />
                </div>
            </div>

            <div className="flex justify-center gap-10 py-3 border-t border-white/30">
                {["Anasayfa", "Ürünler", "Kategoriler", "Hakkımızda", "İletişim"].map(
                    (item) => (
                        <Link
                            key={item}
                            href="/"
                            className="text-white hover:underline pt-1 transition-colors duration-300"
                        >
                            {item}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default Navbar;