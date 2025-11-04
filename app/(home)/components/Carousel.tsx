import React from 'react';
import {Carousel,CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Image from "next/image";

const MyCarousel = () => {

    const slides = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80",
            title: "Doğa Manzarası",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80",
            title: "Şehir Manzarası",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
            title: "Deniz Kıyısı",
        },
    ];


    return (
        <div className="w-full overflow-hidden bg-gray-900">
            <Carousel className="w-full"
                opts={{
                loop: true,
            }}>
                <CarouselContent className="w-full">
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id} className="basis-full h-[700px] w-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={slide.src}
                                    alt={slide.title}
                                    width={1600}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h2 className="text-white text-3xl font-bold">{slide.title}</h2>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default MyCarousel;