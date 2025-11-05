"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Basket from "@/components/navbar/Basket";
import ProfileDropdown from "@/components/navbar/ProfileDropdown";
import SearchBar from "@/components/navbar/SearchBar";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/(home)/components/theme/ThemeProvider";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 80));
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const categories = [
        { id: 1, title: "All Products", href: "/" },
        { id: 2, title: "Man", href: "category/man" },
        { id: 3, title: "Woman", href: "category/woman" },
        { id: 4, title: "Winter Season", href: "category/winter-season" },
        { id: 5, title: "Summer Season", href: "category/summer-season" },
        { id: 6, title: "Jeans", href: "category/jeans" },
        { id: 7, title: "T-Shirt", href: "category/t-shirt" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            } bg-gray-900 dark:bg-gray-900 backdrop-blur-lg shadow-md`}
        >
            <div className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-10">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-85 transition-all duration-300"
                >
                    <Image
                        src="/logo.jpg"
                        alt="logo"
                        width={45}
                        height={45}
                        className="rounded-full shadow-md ring-2 ring-indigo-500/10"
                        priority
                    />
                    <span className="hidden sm:block tracking-tight">Modern Store</span>
                </Link>

                <div className="flex-1 w-3/5 mx-4 hidden sm:block">
                    <SearchBar />
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                        onClick={toggleTheme}
                        variant="secondary"
                        size="lg"
                        aria-label="Tema Değiştir"
                    >
                        {theme === "dark" ? (
                            <Sun strokeWidth={3} size={20} className="text-yellow-400" />
                        ) : (
                            <Moon strokeWidth={3} size={20} className="text-gray-700" />
                        )}
                    </Button>

                    <Basket theme={theme} />
                    <ProfileDropdown theme={theme} />
                </div>
            </div>

            {/* Alt Menü */}
            <nav className="flex justify-center flex-wrap gap-4 sm:gap-8 py-2 sm:py-3 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-b bg-gray-900 dark:from-[#0d1117] dark:to-[#111827]">
                {categories.map((item) => (
                    <Link
                        key={item.id}
                        href={`/products/${item.href}`}
                        className="relative text-gray-200 dark:text-gray-300 text-sm sm:text-base font-medium group"
                    >
                        <span className="transition-all duration-300 group-hover:text-white dark:group-hover:text-gray-200">
                            {item.title}
                        </span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;