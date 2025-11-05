"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="overflow-hidden flex flex-col md:flex-row h-screen w-full bg-gray-50 dark:bg-[#0d1117] transition-colors duration-300">
            {/* Sol taraf - Görsel */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full">
                <Image
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80"
                    alt="Login Background"
                    fill
                    className="object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Moda Seninle Başlar
                    </h1>
                </div>
            </div>

            {/* Sağ taraf - Form */}
            <motion.div
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 dark:bg-[#0d1117] transition-colors duration-300"
            >
                <div className="w-full max-w-md bg-white dark:bg-[#161b22] shadow-xl rounded-2xl p-8 m-6 border border-gray-200 dark:border-gray-800 transition-colors duration-300">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                        {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                    </h2>

                    <form className="flex flex-col gap-4">
                        {!isLogin && (
                            <Input
                                type="text"
                                placeholder="Ad Soyad"
                                className="p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-400 rounded-lg"
                            />
                        )}
                        <Input
                            type="email"
                            placeholder="E-posta"
                            className="p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-400 rounded-lg"
                        />
                        <Input
                            type="password"
                            placeholder="Şifre"
                            className="p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-400 rounded-lg"
                        />

                        <Button className="cursor-pointer bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-black text-white font-semibold mt-2 transition-colors duration-200">
                            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                        </Button>
                    </form>

                    {isLogin && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 cursor-pointer hover:underline">
                            Şifreni mi unuttun?
                        </p>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}{" "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="cursor-pointer text-gray-900 dark:text-gray-100 font-semibold hover:underline"
                            >
                                {isLogin ? "Kayıt Ol" : "Giriş Yap"}
                            </button>
                        </p>
                    </div>

                    {/* Sosyal giriş */}
                    <div className="mt-8">
                        <div className="flex items-center justify-center mb-4">
                            <span className="border-t w-1/4 border-gray-300 dark:border-gray-700"></span>
                            <span className="text-gray-400 mx-2 text-sm">veya</span>
                            <span className="border-t w-1/4 border-gray-300 dark:border-gray-700"></span>
                        </div>

                        <div className="flex justify-center gap-4">
                            <Button
                                variant="outline"
                                className="cursor-pointer w-1/2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#161b22] hover:bg-gray-100 dark:hover:bg-[#1f2937]"
                            >
                                Google ile
                            </Button>
                            <Button
                                variant="outline"
                                className="cursor-pointer w-1/2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#161b22] hover:bg-gray-100 dark:hover:bg-[#1f2937]"
                            >
                                Facebook ile
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;