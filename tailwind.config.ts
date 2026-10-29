import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } }, plugins: [] };
export default config;
