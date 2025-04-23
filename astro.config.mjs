// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
  ],
  
  // 暂时注释掉Vercel适配器配置
  // adapter: vercel({
  //   target: 'server',
  // }),
  
  // 禁用开发工具栏
  devToolbar: {
    enabled: false
  },

  site: 'https://your-domain.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});