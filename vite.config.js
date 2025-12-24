import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // Critical for GitHub Pages with relative paths
    build: {
        outDir: 'build', // Match gh-pages expectation
        sourcemap: true,
    },
    server: {
        port: 3000,
        open: true,
    },
});
