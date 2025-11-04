import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Tüm HTTPS kaynaklarına izin ver
            },
            {
                protocol: "http",
                hostname: "**", // Gerekirse HTTP için de (güvenliksiz)
            },
        ],
    },
};

export default nextConfig;