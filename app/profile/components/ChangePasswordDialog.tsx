"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChangePasswordDialogProps {
    open: boolean;
    onClose: () => void;
}

const ChangePasswordDialog: React.FC<ChangePasswordDialogProps> = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [passwords, setPasswords] = useState({
        old: "",
        new1: "",
        new2: "",
    });

    const handlePasswordUpdate = async () => {
        if (!passwords.old || !passwords.new1 || !passwords.new2) {
            return;
        }

        if (passwords.new1 !== passwords.new2) {
            return;
        }

        try {
            setLoading(true);


            setTimeout(() => {
                setLoading(false);
                onClose();
                setPasswords({ old: "", new1: "", new2: "" });
            }, 1200);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                        Şifre Güncelle
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-3 py-2">
                    <Input
                        type="password"
                        placeholder="Eski Şifre"
                        value={passwords.old}
                        onChange={(e) => setPasswords({ ...passwords, old: e.target.value })}
                    />
                    <Input
                        type="password"
                        placeholder="Yeni Şifre"
                        value={passwords.new1}
                        onChange={(e) => setPasswords({ ...passwords, new1: e.target.value })}
                    />
                    <Input
                        type="password"
                        placeholder="Yeni Şifre (Tekrar)"
                        value={passwords.new2}
                        onChange={(e) => setPasswords({ ...passwords, new2: e.target.value })}
                    />
                </div>

                <DialogFooter>
                    <Button variant="ghost" onClick={onClose}>
                        İptal
                    </Button>
                    <Button onClick={handlePasswordUpdate} disabled={loading}>
                        {loading ? "Güncelleniyor..." : "Güncelle"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ChangePasswordDialog;