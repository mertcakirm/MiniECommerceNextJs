import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const cards = [
    {
        title: "Yeni Sezon Kadın",
        image:
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Erkek Koleksiyonu",
        image:
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Spor Giyim",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBu-cMYbfcAqULQvb0inEadbDnzsdW9P9CQ&s",
    },
    {
        title: "Aksesuarlar",
        image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "İndirimdekiler",
        image:
            "https://static.ticimax.cloud/4183/uploads/blog/buyuk-beden-erkek-giyim-rehberi-9965.jpg",
    },
];

const BigCards = () => {
    return (
        <div className="container flex flex-col items-center justify-center gap-6 py-5 mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
                {cards.slice(0, 2).map((card, index) => (
                    <div
                        key={index}
                        className="relative w-full md:flex-1 h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                            <h2 className="text-white text-3xl font-bold mb-3">
                                {card.title}
                            </h2>
                            <Button
                                variant="secondary"
                                className="bg-white text-black cursor-pointer"
                            >
                                Hemen Keşfet
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
                {cards.slice(2).map((card, index) => (
                    <div
                        key={index}
                        className="relative w-full md:flex-1 h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                            <h2 className="text-white text-3xl font-bold mb-3">
                                {card.title}
                            </h2>
                            <Button
                                variant="secondary"
                                className="bg-white cursor-pointer text-black"
                            >
                                Hemen Keşfet
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BigCards;