module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/components/**/*.{js,ts,jsx,tsx}",
        "./app/Layout/Layout.tsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway"],
                cinzel: ["Cinzel"],
                nunito: ["Nunito"],
            },
            fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                black: "900",
            },
            fontSize: {
                sm: ["14px", { lineHeight: "1.5" }],
                base: ["16px", { lineHeight: "1.5" }],
                //  lg: ["1.125rem", { lineHeight: "1.75rem" }],
                //  xl: ["1.25rem", { lineHeight: "1.75rem" }],
            },
            screens: {
                sm: "460px",
                md: "992px",
                lg: "1280px",
                xl: "1920px",
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
}
