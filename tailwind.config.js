import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "amber-honey": {
                    50: "#fff7e5",
                    100: "#fff0cc",
                    200: "#ffe099",
                    300: "#ffd166",
                    400: "#ffc233",
                    500: "#ffb300",
                    600: "#cc8f00",
                    700: "#996b00",
                    800: "#664700",
                    900: "#332400",
                    950: "#241900",
                },
                cream: {
                    50: "#f7fce8",
                    100: "#f0fad1",
                    200: "#e0f5a3",
                    300: "#d1f075",
                    400: "#c2eb47",
                    500: "#b3e619",
                    600: "#8fb814",
                    700: "#6b8a0f",
                    800: "#475c0a",
                    900: "#242e05",
                    950: "#192004",
                },
                cerulean: {
                    50: "#e5f8ff",
                    100: "#ccf1ff",
                    200: "#99e2ff",
                    300: "#66d4ff",
                    400: "#33c5ff",
                    500: "#00b7ff",
                    600: "#0092cc",
                    700: "#006e99",
                    800: "#004966",
                    900: "#002533",
                    950: "#001a24",
                },
                "yale-blue": {
                    50: "#ecf2f8",
                    100: "#d9e4f2",
                    200: "#b4cae4",
                    300: "#8eafd7",
                    400: "#6894ca",
                    500: "#4279bd",
                    600: "#356197",
                    700: "#284971",
                    800: "#1b314b",
                    900: "#0d1826",
                    950: "#09111a",
                },
                "prussian-blue": {
                    50: "#e5f0ff",
                    100: "#cce0ff",
                    200: "#99c2ff",
                    300: "#66a3ff",
                    400: "#3385ff",
                    500: "#0066ff",
                    600: "#0052cc",
                    700: "#003d99",
                    800: "#002966",
                    900: "#001433",
                    950: "#000e24",
                },
            },
            animation: {
                shine: "shine 1s",
            },
            keyframes: {
                shine: {
                    "100%": { left: "125%" },
                },
            },
        },

        plugins: [forms],
    },
};
