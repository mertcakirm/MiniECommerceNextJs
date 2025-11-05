import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ShoppingCart, User2Icon} from "lucide-react";
import Link from "next/link";

const ProfileDropdown = ({theme}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="secondary"
                    aria-label="Kullanıcı menüsü"
                    size="lg"
                >
                    {theme === "dark" ? (
                        <User2Icon strokeWidth={3} className="text-white" />
                    ) : (
                        <User2Icon strokeWidth={3} className="text-gray-700" />
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" sideOffset={8} className="w-48">
                <DropdownMenuLabel className="font-bold">Hesap</DropdownMenuLabel>
                <DropdownMenuItem>
                    <Link href="/profile" className="w-full">Profilim</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/login" className="w-full">Çıkış</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;