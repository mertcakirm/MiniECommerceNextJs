import React from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {ShoppingBasketIcon, ShoppingCart} from "lucide-react";

const Basket = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="secondary"
                        size="lg"
                    >
                        <ShoppingCart strokeWidth={3} color="black"/>
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Sepet</SheetTitle>
                        <SheetDescription>
                            Sepetinizdeki ürünleri burada görebilirsiniz.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Basket;