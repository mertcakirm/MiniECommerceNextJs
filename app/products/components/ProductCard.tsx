"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Product } from "./types";

interface ProductCardProps {
    product: Product;
    index: number;
    favorites: boolean[];
    toggleFavorite: (index: number) => void;
    increaseCount: (index: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                     product,
                                                     index,
                                                     favorites,
                                                     toggleFavorite,
                                                     increaseCount,
                                                 }) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    return (
        <Card
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-0"
        >
            {/* Ürün Görseli */}
            <div className="relative w-full h-80">
                <Link href={`/products/detail/${product.id}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>

                {/* Favori butonu */}
                <button
                    onClick={(e) => {
                        e.preventDefault(); // 🔒 Link tıklanmasını engeller
                        toggleFavorite(index);
                    }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:scale-105 transition z-10"
                >
                    <Heart
                        size={22}
                        className={`${
                            favorites[index] ? "fill-red-500 text-red-500" : "text-gray-700"
                        } transition-colors duration-200`}
                    />
                </button>

                {/* Ürün adı ve fiyatı */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-4 py-3">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-300">{product.price}</p>
                </div>
            </div>

            {/* Hover veya select açıkken panel */}
            <div
                className={`absolute bottom-0 left-0 w-full transition-transform duration-300 bg-white/95 backdrop-blur-md p-4 flex flex-col items-center gap-3 border-t
          ${isSelectOpen ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"}
        `}
            >
                {product.sizes.length > 0 && (
                    <Select onOpenChange={(open) => setIsSelectOpen(open)}>
                        <SelectTrigger className="w-40 bg-white text-black rounded-lg border-gray-300">
                            <SelectValue placeholder="Beden Seç" />
                        </SelectTrigger>
                        <SelectContent>
                            {product.sizes.map((size) => (
                                <SelectItem key={size} value={size}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}

                <Button
                    onClick={(e) => {
                        e.preventDefault(); // Link’e tıklamayı engeller
                        increaseCount(index);
                    }}
                    className="w-40 bg-black text-white hover:bg-gray-800 font-semibold rounded-lg"
                >
                    Sepete Ekle
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard;