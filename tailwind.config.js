module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/components/**/*.{js,ts,jsx,tsx}",
        "./app/Layout/Layout.tsx",
    ],
    darkMode: "class",
    theme: {
        aspectRatio: {
            alternative: "16 / 11",
            movie: "16 / 9",
            squere: "16 / 16",
        },
        spacing: {
            8: "8px",
            45: "45px",
            xs: "15px",
            sm: "20px",
            md: "30px",
            lg: "60px",
            xl: "70px",
            correct: "68px",
        },
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
                mini: ["12px", { lineHeight: "1.5" }],
                sm: ["14px", { lineHeight: "1.5" }],
                base: ["16px", { lineHeight: "1.5" }],
                medium: ["20px", { lineHeight: "1.5" }],
                h1: ["40px", { lineHeight: "1.3" }],
                h2: ["32px", { lineHeight: "1.3" }],
                extraLarge: ["58px", { lineHeight: "1.3" }],
                //  lg: ["1.125rem", { lineHeight: "1.75rem" }],
                //  xl: ["1.25rem", { lineHeight: "1.75rem" }],
            },
            screens: {
                sm: "460px",
                md: "992px",
                lg: "1440px",
                xl: "1920px",
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
}
