"use client";

import MyCarousel from "@/app/(home)/components/Carousel";
import CategoryCarousel from "@/app/(home)/components/CategoryCarousel";
import BigCards from "@/app/(home)/components/BigCards";

export default function Home() {
    return (
        <div className="relative">

            <MyCarousel />

            <p className="text-4xl font-bold text-center mt-5">Popular Categories</p>
            <CategoryCarousel />

            <BigCards />



        </div>
    );
}