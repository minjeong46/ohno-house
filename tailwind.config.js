/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Pretendard", "Noto Sans KR", "sans-serif"]
            },
            spacing: {
                'header-top' : "84px",
                'header-bottom' : "50px",
                'header-total' : "134px"
            }
        },
    },
    plugins: [],
};
