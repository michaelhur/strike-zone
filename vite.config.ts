/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
        }),
        svgr({
            exportAsDefault: false,
            svgrOptions: {
                icon: 'current',
                memo: true,
            },
        }),
        viteCompression(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.js',
    },
    resolve: {
        alias: [
            { find: '@public', replacement: path.resolve(__dirname, '/public') },
            { find: '@mocks', replacement: path.resolve(__dirname, '/__mocks__') },
            { find: '@src', replacement: path.resolve(__dirname, '/src') },
            { find: '@apis', replacement: path.resolve(__dirname, '/src/apis') },
            { find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
            { find: '@components', replacement: path.resolve(__dirname, '/src/components') },
            { find: '@constants', replacement: path.resolve(__dirname, '/src/constants') },
            { find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks') },
            { find: '@layouts', replacement: path.resolve(__dirname, '/src/layouts') },
            { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
            { find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
            { find: '@recoils', replacement: path.resolve(__dirname, '/src/recoils') },
            { find: '@styles', replacement: path.resolve(__dirname, '/src/styles') },
            { find: '@typings', replacement: path.resolve(__dirname, '/src/typings') },
        ],
    },
});
