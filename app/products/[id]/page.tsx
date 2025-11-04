"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Heart, ShoppingCart, SendHorizontal, Star } from "lucide-react";

interface Comment {
    username: string;
    rating: number;
    text: string;
    date: string;
}

const ProductDetailPage = () => {
    const { id } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [added, setAdded] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [rating, setRating] = useState<number>(5);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const currentUser = "Ali";

    const [comments, setComments] = useState<Comment[]>([
        { username: "Ahmet", rating: 5, text: "Harika ürün!", date: "2025-11-01" },
        { username: "Zeynep", rating: 4, text: "Rahat ve şık.", date: "2025-11-03" },
    ]);

    const product = {
        id,
        name: "Nike Air Max 270",
        price: "3.200₺",
        description: "Rahat tabanı ve şık tasarımıyla Nike Air Max 270 modern bir spor ayakkabıdır.",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=900&h=500&s=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1CtA6xD2TcFu7ziEWrbCJ_5aCQMLQOASxA&s",
            "https://cdn.prod.website-files.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg",
        ],
        sizes: ["38", "39", "40", "41", "42", "43"],
    };

    const avgRating =
        comments.length > 0
            ? (comments.reduce((acc, c) => acc + c.rating, 0) / comments.length).toFixed(1)
            : "0";

    const handleAddToCart = () => {
        if (product.sizes.length > 0 && !selectedSize) {
            alert("Lütfen bir beden seçiniz!");
            return;
        }
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    const handleAddComment = () => {
        if (!newComment.trim()) {
            alert("Lütfen yorumunuzu yazın.");
            return;
        }
        const date = new Date().toISOString().split("T")[0];
        const newEntry: Comment = {
            username: currentUser,
            rating,
            text: newComment,
            date,
        };
        setComments([...comments, newEntry]);
        setNewComment("");
        setRating(5);
    };

    return (
        <div className="flex flex-col md:flex-row gap-10 mt-28 max-w-6xl mx-auto px-6 py-10">
            {/* Sol: Ürün galerisi */}
            <div className="flex flex-col md:w-1/2 gap-4">
                {/* Büyük resim */}
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={product.images[selectedImageIndex]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-3 rounded-full shadow hover:scale-105 transition"
                    >
                        <Heart
                            className={`${isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                            size={24}
                        />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 mt-2">
                    {product.images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer ${
                                idx === selectedImageIndex ? "border-black" : "border-gray-300"
                            }`}
                            onClick={() => setSelectedImageIndex(idx)}
                        >
                            <Image src={img} alt={`img-${idx}`} width={80} height={80} className="object-cover h-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Sağ: Ürün bilgileri */}
            <div className="flex flex-col justify-center md:w-1/2 space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

                <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={20}
                            className={i < Math.round(Number(avgRating)) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                        />
                    ))}
                    <span className="text-sm text-gray-600">{avgRating} / 5</span>
                </div>

                <p className="text-gray-600">{product.description}</p>
                <p className="text-2xl font-semibold text-gray-800">{product.price}</p>

                {product.sizes.length > 0 && (
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                            Beden Seçimi
                        </label>
                        <Select onValueChange={(val) => setSelectedSize(val)}>
                            <SelectTrigger className="w-40">
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
                    </div>
                )}

                <Button
                    onClick={handleAddToCart}
                    className={`w-48 bg-black text-white hover:bg-gray-800 font-semibold rounded-lg transition-all ${
                        added ? "scale-105 bg-green-600" : ""
                    }`}
                >
                    {added ? "Sepete Eklendi" : "Sepete Ekle"}
                    <ShoppingCart className="ml-2 w-5 h-5" />
                </Button>

                {/* Yorumlar */}
                <div className="mt-8 border-t pt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Yorumlar</h2>
                    <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                        {comments.length === 0 ? (
                            <p className="text-gray-500">Henüz yorum yapılmamış.</p>
                        ) : (
                            comments.map((c, idx) => (
                                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-gray-800">{c.username}</span>
                                        <span className="text-xs text-gray-500">{c.date}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={i < c.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-700">{c.text}</p>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Yorum ekleme */}
                    <div className="mt-6 space-y-3">
                        <h3 className="font-medium text-gray-700">Yorum Ekle</h3>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <Star
                                    key={num}
                                    size={22}
                                    onClick={() => setRating(num)}
                                    className={`cursor-pointer ${num <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">{rating} / 5</span>
                        </div>

                        <textarea
                            placeholder="Yorumunuzu yazın..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
                            rows={3}
                        />

                        <Button
                            onClick={handleAddComment}
                            className="bg-black text-white hover:bg-gray-800 rounded-lg flex items-center gap-1"
                        >
                            Gönder
                            <SendHorizontal size={16} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;