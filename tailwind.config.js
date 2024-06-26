/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gradient: "var(--gradient)",
                backrgound: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: "hsl(var(--card))",
                card_foreground: "hsl(var(--card-foreground))",
                input: "hsl(var(--input))",
                primary: "hsl(var(--primary))",
                secondary: "hsl(var(--secondary))",
                accent: "hsl(var(--accent))",
                border: "hsl(var(--border))",
            },
            width: {
                sm: "500px",
                xl: "600px",
            },
            height: {
                xsm: "100px",
                xl: "600px",
            },
            fontSize: {
                md: "2rem",
                xl: "4rem",
            },
        },
    },
    plugins: [],
};
