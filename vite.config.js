import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production';
    return {
        base: isProduction ? 'https://och-test-production.up.railway.app/build/' : '/build/',
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
            vue(),
            tailwindcss(),
        ],
    };
});
