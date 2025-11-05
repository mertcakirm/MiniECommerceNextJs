"use client";

import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {ShoppingCart, Trash} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    discount?: number;
}

const Basket = ({theme}) => {
    const router = useRouter();

    const [cart, setCart] = useState<Product[]>([
        { id: 1, name: "Laptop", price: 2500, quantity: 1, image: "https://picsum.photos/seed/laptop/150", discount: 20 },
        { id: 2, name: "Kulaklık", price: 300, quantity: 2, image: "https://picsum.photos/seed/headphones/150" },
        { id: 3, name: "Mouse", price: 150, quantity: 1, image: "https://picsum.photos/seed/mouse/150", discount: 10 },
    ]);

    const increment = (id: number) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decrement = (id: number) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
    };

    const removeItem = (id: number) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const subtotal = cart.reduce((acc, item) => {
        const price = item.discount ? item.price * (1 - item.discount / 100) : item.price;
        return acc + price * item.quantity;
    }, 0);

    const taxRate = 0.18;
    const tax = subtotal * taxRate;
    const totalPrice = subtotal + tax;

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="secondary" size="lg">
                        {theme === "dark" ? (
                            <ShoppingCart strokeWidth={3} className="text-white" />
                        ) : (
                            <ShoppingCart strokeWidth={3} className="text-gray-700" />
                        )}
                    </Button>
                </SheetTrigger>

                <SheetContent className="w-96 flex flex-col">
                    <SheetHeader>
                        <SheetTitle>Sepet</SheetTitle>
                        <SheetDescription>Sepetinizdeki ürünleri burada görebilirsiniz.</SheetDescription>
                    </SheetHeader>

                    {cart.length === 0 ? (
                        <p className="mt-6 text-center text-gray-500 flex-1">Sepetiniz boş.</p>
                    ) : (
                        <>
                            <div className="px-2 flex-1 overflow-y-auto space-y-4">
                                {cart.map(item => {
                                    const discountedPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
                                    return (
                                        <div key={item.id} className="flex items-center gap-4 p-2 border rounded-lg shadow-sm hover:shadow-md transition relative">

                                            {/* Resim tıklanabilir */}
                                            <div
                                                onClick={() => router.push(`/products/${item.id}`)}
                                                className="w-20 h-20 relative flex-shrink-0 rounded-lg overflow-hidden border cursor-pointer"
                                            >
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between h-full">
                                                <div>
                                                    <h3 className="font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                                                    <div className="flex items-center gap-2">
                                                        {item.discount ? (
                                                            <>
                                                                <span className="text-gray-400 line-through">${item.price}</span>
                                                                <span className="text-red-600 font-semibold">${discountedPrice.toFixed(2)}</span>
                                                                <span className="bg-yellow-300 text-black text-xs px-2 py-1 rounded-2xl">{item.discount}% Sale</span>
                                                            </>
                                                        ) : (
                                                            <span className="text-gray-500">${item.price}</span>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                                        <button
                                                            onClick={() => decrement(item.id)}
                                                            className="px-3 py-1 hover:bg-gray-200 hover:text-black transition"
                                                        >−</button>
                                                        <span className="px-4">{item.quantity}</span>
                                                        <button
                                                            onClick={() => increment(item.id)}
                                                            className="px-3 py-1 hover:bg-gray-200 hover:text-black transition"
                                                        >+</button>
                                                    </div>

                                                    <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                                                        <Trash />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Footer */}
                            <div className="mt-4 border-t p-2 flex flex-col gap-2">

                                <Accordion type="single" collapsible className="mt-2">
                                    <AccordionItem value="details">
                                        <AccordionTrigger className="flex justify-between items-center w-full">
                                            Detayları Göster
                                        </AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-2 mt-2">
                                            <div className="flex justify-between text-gray-700 dark:text-gray-400">
                                                <span>Ara Toplam:</span>
                                                <span>${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-gray-700 dark:text-gray-400">
                                                <span>KDV (%18):</span>
                                                <span>${tax.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between font-bold text-gray-800 dark:text-gray-400">
                                                <span>Toplam:</span>
                                                <span>${totalPrice.toFixed(2)}</span>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <div className="flex justify-between font-bold text-lg">
                                    <span>Toplam: ${totalPrice.toFixed(2)}</span>
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="destructive" className="flex-1" onClick={clearCart}>
                                        Sepeti Temizle
                                    </Button>
                                    <Button className="flex-1">Ödemeye Geç</Button>
                                </div>
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Basket;