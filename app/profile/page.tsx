"use client";

import React, {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Heart} from "lucide-react";
import ChangePasswordDialog from "@/app/profile/components/ChangePasswordDialog";

const ProfilePage = () => {
    const [user] = useState({
        name: "Ali Yılmaz",
        email: "ali@example.com",
        avatar:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
    });

    const favoriteImages = [
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    ];

    const orders = [
        {
            id: 1,
            date: "12 Ekim 2025",
            status: "Teslim Edildi",
            product: "Nike Air Max 270",
            price: "3.200₺",
            products: [
                {
                    name: "Nike Air Max 270",
                    image:
                        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
                },
                {
                    name: "Adidas Hoodie",
                    image:
                        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
                },
            ],
        },
        {
            id: 2,
            date: "9 Ekim 2025",
            product: "Adidas Hoodie",
            status: "Kargoda",
            price: "1.050₺",
            products: [
                {
                    name: "Apple AirPods",
                    image:
                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
                },
            ],
        },
    ];

    const [favorites, setFavorites] = useState(Array.from({length: 5}).map(() => 0));

    // 🟥 Başlangıçta tüm kalpler aktif (kırmızı)
    const [liked, setLiked] = useState(Array.from({length: 5}).map(() => true));

    const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);

    const increaseCount = (index: number) => {
        const newFavs = [...favorites];
        newFavs[index] += 1;
        setFavorites(newFavs);
    };

    const decreaseCount = (index: number) => {
        const newFavs = [...favorites];
        if (newFavs[index] > 0) newFavs[index] -= 1;
        setFavorites(newFavs);
    };

    // 🔁 Kalp tıklanınca aktif/pasif geçişi
    const toggleLike = (index: number) => {
        const newLikes = [...liked];
        newLikes[index] = !newLikes[index];
        setLiked(newLikes);
    };

    return (
        <div className="container mt-28 mx-auto py-10 px-4 md:px-10">
            {/* Profil Başlığı */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <div className="relative w-28 h-28">
                    <Image
                        src={user.avatar}
                        alt={user.name}
                        fill
                        className="rounded-full object-cover border-4 border-gray-200 shadow-md"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-500">{user.email}</p>
                </div>
            </div>

            {/* Sekmeli Menü */}
            <Tabs defaultValue="orders" className="w-full">
                <TabsList className="flex flex-wrap justify-center md:justify-start gap-2">
                    <TabsTrigger value="orders">Siparişlerim</TabsTrigger>
                    <TabsTrigger value="favorites">Favorilerim</TabsTrigger>
                    <TabsTrigger value="settings">Ayarlar</TabsTrigger>
                </TabsList>

                {/* Siparişler */}
                <TabsContent value="orders" className="mt-6">
                    <ScrollArea className="h-[400px] rounded-md border p-4">
                        {orders.map((order) => (
                            <Card key={order.id} className="mb-4 hover:shadow-md transition">
                                <CardContent
                                    className="flex flex-col gap-3 md:flex-row items-start justify-between py-4 px-6">
                                    <div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{order.product}</h3>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                        </div>
                                        <div className="flex gap-3 mt-3">
                                            {order.products.map((p, idx) => (
                                                <div key={idx} className="relative w-16 h-16">
                                                    <img
                                                        src={p.image}
                                                        alt={p.name}
                                                        className="w-16 h-16 rounded-md object-cover border"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-700">{order.price}</p>
                                        <p
                                            className={`text-sm ${
                                                order.status === "Teslim Edildi"
                                                    ? "text-green-600"
                                                    : "text-yellow-600"
                                            }`}
                                        >
                                            {order.status}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </ScrollArea>
                </TabsContent>

                {/* Favoriler */}
                <TabsContent value="favorites" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {favorites.map((count, i) => (
                            <Card key={i} className="overflow-hidden p-0 group relative gap-0">
                                <div className="relative h-48">
                                    <img
                                        src={favoriteImages[i]}
                                        alt="Favorite item"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* ❤️ Kalp Butonu */}
                                    <button
                                        onClick={() => toggleLike(i)}
                                        className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition"
                                    >
                                        <Heart
                                            size={22}
                                            className={`${
                                                liked[i]
                                                    ? "fill-red-500 text-red-500"
                                                    : "text-gray-400"
                                            } transition-colors duration-200`}
                                        />
                                    </button>
                                </div>

                                <CardContent className="p-3 flex flex-col items-center">
                                    <h4 className="font-semibold mb-2">Favori Ürün {i + 1}</h4>

                                    {count === 0 ? (
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => increaseCount(i)}
                                        >
                                            Sepete Ekle
                                        </Button>
                                    ) : (
                                        <div className="flex items-center justify-center gap-3 w-full mt-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => decreaseCount(i)}
                                            >
                                                -
                                            </Button>
                                            <span className="font-semibold text-lg">{count}</span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => increaseCount(i)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* Ayarlar */}
                <TabsContent value="settings" className="mt-6">
                    <Card className="p-6 max-w-md mx-auto space-y-3">
                        <h3 className="text-xl font-semibold mb-4">Hesap Ayarları</h3>
                        <Input placeholder="Ad Soyad" defaultValue={user.name}/>
                        <Input placeholder="E-posta" defaultValue={user.email}/>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => setPasswordDialogOpen(true)}
                        >
                            Şifreyi Güncelle
                        </Button>
                        <Button className="w-full">Bilgileri Güncelle</Button>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Şifre Güncelleme Popup */}
            <ChangePasswordDialog
                open={passwordDialogOpen}
                onClose={() => setPasswordDialogOpen(false)}
            />
        </div>
    );
};

export default ProfilePage;