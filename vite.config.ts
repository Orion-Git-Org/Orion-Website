import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const web3FormsAccessKey = env.VITE_WEB3FORMS_ACCESS_KEY || env.WEB3FORMS_ACCESS_KEY || '';

  return {
    base: '/',
    plugins: [react(), tailwindcss(), cloudflare()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(web3FormsAccessKey),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
