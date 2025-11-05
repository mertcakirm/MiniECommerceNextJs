"use client";

import React, {useState} from 'react';
import ProductCard from "@/app/products/components/ProductCard";

const ProductsPage = () => {
    const [favorites, setFavorites] = useState<boolean[]>([]);
    const [cartCounts, setCartCounts] = useState<number[]>([]);

    const products = [
        {
            id: 1,
            name: "Nike Air Max 270",
            price: "3.200₺",
            image: "https://images.unsplash.com/photo-1600180758890-6f3d8e3b8f5c?auto=format&fit=crop&w=800&q=80",
            sizes: ["38", "39", "40", "41", "42", "43"],
        },
        {
            id: 2,
            name: "Adidas Hoodie",
            price: "1.050₺",
            image: "https://images.unsplash.com/photo-1600180758731-0c7c7a486f0b?auto=format&fit=crop&w=800&q=80",
            sizes: ["S", "M", "L", "XL"],
        },
        {
            id: 3,
            name: "Apple AirPods Pro",
            price: "4.500₺",
            image: "https://images.unsplash.com/photo-1580894732444-9e7bbfd5a48a?auto=format&fit=crop&w=800&q=80",
            sizes: [],
        },
        {
            id: 4,
            name: "Zara T-Shirt",
            price: "650₺",
            image: "https://images.unsplash.com/photo-1618354691283-d3d6f7f1bcb5?auto=format&fit=crop&w=800&q=80",
            sizes: ["S", "M", "L", "XL"],
        },
        {
            id: 5,
            name: "Levi’s Jeans",
            price: "1.200₺",
            image: "https://images.unsplash.com/photo-1583002191183-0f7c55a73f3a?auto=format&fit=crop&w=800&q=80",
            sizes: ["30", "31", "32", "33", "34", "36"],
        },
        {
            id: 6,
            name: "Apple Watch Series 8",
            price: "15.500₺",
            image: "https://images.unsplash.com/photo-1606813902892-2f8f3d6c41ef?auto=format&fit=crop&w=800&q=80",
            sizes: [],
        },
        {
            id: 7,
            name: "Vans Old Skool",
            price: "2.250₺",
            image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
            sizes: ["38", "39", "40", "41", "42", "43"],
        },
        {
            id: 8,
            name: "North Face Mont",
            price: "4.100₺",
            image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=800&q=80",
            sizes: ["S", "M", "L", "XL"],
        },
        {
            id: 9,
            name: "Sony WH-1000XM5 Kulaklık",
            price: "12.900₺",
            image: "https://images.unsplash.com/photo-1593698054589-29333c6608b5?auto=format&fit=crop&w=800&q=80",
            sizes: [],
        },
        {
            id: 10,
            name: "Ray-Ban Gözlük",
            price: "2.700₺",
            image: "https://images.unsplash.com/photo-1591076482161-42ce6f1e7b99?auto=format&fit=crop&w=800&q=80",
            sizes: [],
        },
        {
            id: 11,
            name: "Apple iPhone 15 Pro",
            price: "65.999₺",
            image: "https://images.unsplash.com/photo-1695048134852-81bfe0a0f8a8?auto=format&fit=crop&w=800&q=80",
            sizes: [],
        },
        {
            id: 12,
            name: "Converse Chuck Taylor",
            price: "2.150₺",
            image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?auto=format&fit=crop&w=800&q=80",
            sizes: ["38", "39", "40", "41", "42", "43"],
        },
    ];

    const toggleFavorite = (index: number) => {
        setFavorites((prev) => {
            const newFavs = [...prev];
            newFavs[index] = !newFavs[index];
            return newFavs;
        });
    };

    const increaseCount = (index: number) => {
        setCartCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = (newCounts[index] || 0) + 1;
            return newCounts;
        });
    };

    return (
        <div className="container mx-auto mt-24 px-6 py-10">
            <h1 className="text-3xl font-bold mb-10 text-gray-800">Ürünler</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        increaseCount={increaseCount}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;