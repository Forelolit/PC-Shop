import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@app': '/src/app',
            '@assets': '/src/assets',
            '@modules': '/src/modules',
            '@pages': '/src/pages',
            '@types': '/src/types',
            '@ui': '/src/ui',
            '@utils': '/src/utils',
        },
    },
});
