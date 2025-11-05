import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./(home)/globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ThemeProvider from "@/app/(home)/components/theme/ThemeProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Modern Store",
    description: "A modern e-commerce experience with light and dark themes.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased bg-gray-50 text-gray-900 dark:bg-[#0d1117] dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}