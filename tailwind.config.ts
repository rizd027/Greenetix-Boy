import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9f4',
                    100: '#daf1e3',
                    200: '#b7e4ca',
                    300: '#87d0a8',
                    400: '#55b582',
                    500: '#339966',
                    600: '#247a50',
                    700: '#1d6142',
                    800: '#194d36',
                    900: '#16402d',
                },
                cream: {
                    50: '#fefef9',
                    100: '#fdfcf2',
                    200: '#fbf9e5',
                    300: '#f8f4d1',
                    400: '#f4eeb7',
                    500: '#efe69c',
                    600: '#e5d66e',
                    700: '#d4be4e',
                    800: '#b39b3f',
                    900: '#927d35',
                },
            },
        },
    },
    plugins: [],
};
export default config;
