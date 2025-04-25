// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
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
  }
});