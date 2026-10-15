import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Learned',
        short_name: 'Learned',
        description: 'Turn a topic into short visual slides, and get a cited side page wherever you are stuck.',
        start_url: '/app/',
        scope: '/app/',
        display: 'standalone',
        orientation: 'any',
        background_color: '#F4F7FB',
        theme_color: '#F4F7FB',
        icons: [
          { src: '/app/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/app/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/app/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'], navigateFallback: '/app/index.html' }
    })
  ]
});
