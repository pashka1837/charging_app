import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(
    {
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,ts}'],
      },
      includeAssets: ['assets/images/favicon.ico', 'assets/images/apple-touch-icon.png', 'assets/images/logoSW.svg'],
      manifest: {
        name: 'Charging App',
        short_name: 'Charging App',
        description: 'Charging App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'assets/images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/images/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'assets/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'assets/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    })],
})
