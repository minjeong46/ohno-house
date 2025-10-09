/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Pretendard", "Noto Sans KR", "sans-serif"],
            },
            spacing: {
                "header-top": "84px",
                "header-bottom": "50px",
                "header-total": "134px",
            },
            colors: {
                primary: "#11A5FD",
                hoverPrimary: "#0198ED",
            },
        },
        screens: {
            xs: "365px",
            sm: "460px",
            md: "640px",
            lg: "1024px",
            xl: "1256px",
            "2xl": "1536px",
            "max-xs": { max: "350px" },
        },
    },
    plugins: [],
};
