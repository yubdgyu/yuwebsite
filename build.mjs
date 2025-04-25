// 自定义构建脚本，用于Vercel部署

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 确保Vite依赖正确安装
try {
  console.log('🚀 开始验证依赖...');
  
  // 检查vite是否安装
  try {
    console.log('检查vite是否已安装...');
    require.resolve('vite');
    console.log('✅ vite已正确安装');
  } catch (e) {
    console.log('⚠️ 找不到vite，正在安装...');
    execSync('npm install vite@4.4.9 --no-save', { stdio: 'inherit' });
    console.log('✅ vite安装完成');
  }
  
  // 检查@vitejs/plugin-react是否安装
  try {
    console.log('检查@vitejs/plugin-react是否已安装...');
    require.resolve('@vitejs/plugin-react');
    console.log('✅ @vitejs/plugin-react已正确安装');
  } catch (e) {
    console.log('⚠️ 找不到@vitejs/plugin-react，正在安装...');
    execSync('npm install @vitejs/plugin-react@4.0.4 --no-save', { stdio: 'inherit' });
    console.log('✅ @vitejs/plugin-react安装完成');
  }
  
  // 运行Astro构建
  console.log('🏗️ 开始构建网站...');
  execSync('npx astro build', { stdio: 'inherit' });
  console.log('✅ 构建完成');
} catch (error) {
  console.error('❌ 构建过程中出错:', error);
  process.exit(1);
} 