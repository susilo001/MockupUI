import { defineConfig } from 'vite';
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    resolve: {
        alias: {
            '/@/': path.resolve(__dirname, './src')
        },
    },
    build: {
        lib: {
            entry: 'main.ts',
            fileName: "main",
            formats: ['es']
        },
        rollupOptions: {
            external: /^lit/
        },
    }
})