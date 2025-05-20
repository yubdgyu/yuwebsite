// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    decapCmsOauth(),
  ],
  
  // 使用Vercel官方适配器，支持API路由
  adapter: vercel(),
  output: 'static',
  site: 'https://yuwebsite.vercel.app/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['react-icons']
    },
    optimizeDeps: {
      include: ['react-icons']
    },
    // 添加特殊处理以解决react-icons导入问题
    build: {
      rollupOptions: {
        external: ['react-icons/lib/esm/iconBase.js']
      }
    }
  }
});