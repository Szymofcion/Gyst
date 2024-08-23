import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                "light-blue": "#F0F0FF",
                white: "#FFF",
                blue: "#565ADD",
            },
            borderColor: {
                blue: "#565ADD",
                gray: "#C4C4C4",
            },
            colors: {
                white: "#FFF",
                gray: "#596386",
            },
            boxShadow: {
                box: "29px 35px 13px 0px rgba(122, 124, 174, 0.00), 19px 23px 12px 0px rgba(122, 124, 174, 0.01), 11px 13px 10px 0px rgba(122, 124, 174, 0.05), 5px 6px 7px 0px rgba(122, 124, 174, 0.09), 1px 1px 4px 0px rgba(122, 124, 174, 0.10)",
            },
        },
    },
    plugins: [],
};
export default config;
