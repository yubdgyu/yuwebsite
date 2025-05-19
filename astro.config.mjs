// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import tailwind from '@astrojs/tailwind';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    decapCmsOauth()
  ],
  
  // 使用Vercel静态适配器
  adapter: vercel(),
  
  // 禁用开发工具栏
  devToolbar: {
    enabled: false
  },

  site: 'https://yuwebsite.vercel.app',
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