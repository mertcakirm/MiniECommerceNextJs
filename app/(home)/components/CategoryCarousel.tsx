"use client";

import React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
    {
        name: "Kadın",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Erkek",
        image:
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Ayakkabı",
        image:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Aksesuar",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Dış Giyim",
        image:
            "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Yeni Sezon",
        image:
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Çocuk",
        image:
            "https://images.unsplash.com/photo-1595775815523-8b744d1a51c5?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Spor Giyim",
        image:
            "https://images.unsplash.com/photo-1580717615391-1b5ef3d54203?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "İndirimdekiler",
        image:
            "https://images.unsplash.com/photo-1600486913747-55e2e17471b7?auto=format&fit=crop&w=1600&q=80",
    }
];
const CategoryCarousel = () => {
    return (
        <div className="w-full py-10 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {categories.map((category, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                            >
                                <Card className="relative overflow-hidden p-0 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    <CardContent className="p-0">
                                        <div className="relative w-full aspect-square overflow-hidden">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                fill
                                                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                                            />
                                            <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                                                <h2 className="text-white text-xl font-semibold drop-shadow-md">
                                                    {category.name}
                                                </h2>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex -left-6" />
                    <CarouselNext className="hidden md:flex -right-6" />
                </Carousel>
            </div>
        </div>
    );
};

export default CategoryCarousel;