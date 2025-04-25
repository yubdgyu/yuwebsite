// 自定义构建脚本，用于Vercel部署

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 确保依赖正确安装
try {
  console.log('🚀 开始验证依赖...');
  
  console.log('📦 确保所有依赖已安装...');
  
  // 运行Astro构建
  console.log('🏗️ 开始构建网站...');
  
  // 设置更大的内存限制
  process.env.NODE_OPTIONS = process.env.NODE_OPTIONS || '--max_old_space_size=4096';
  
  // 构建网站
  execSync('npx astro build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      ASTRO_TELEMETRY_DISABLED: '1'
    }
  });
  
  console.log('✅ 构建完成');
} catch (error) {
  console.error('❌ 构建过程中出错:', error);
  process.exit(1);
} 