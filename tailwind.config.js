/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#4f46e5",
                    dark: "#6366f1",
                },
                secondary: {
                    light: "#ec4899",
                    dark: "#f472b6",
                },
                background: {
                    light: "#f9fafb",
                    dark: "#0d1117",
                },
                card: {
                    light: "#ffffff",
                    dark: "#1e1e1e",
                },
            },
        },
    },
    plugins: [],
};