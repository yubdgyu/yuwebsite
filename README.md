# YuWebsite - 现代化个人网站模板

![YuWebsite](public/images/preview.svg)

[English](README_EN.md) | 简体中文

YuWebsite 是一个基于 Astro 和 React 构建的现代化个人网站模板，支持博客系统、项目展示、暗黑模式等功能。该模板采用 TailwindCSS 构建，响应式设计适配各种设备。

## ✨ 特性

- 🚀 **基于 Astro** - 快速、现代的静态站点生成器
- ⚛️ **集成 React 组件** - 用于交互式 UI 元素
- 🎨 **TailwindCSS** - 实用优先的 CSS 框架
- 🌙 **暗黑模式** - 支持浅色/深色主题切换
- 📝 **Markdown 博客** - 简单易用的内容管理
- 🔍 **SEO 友好** - 针对搜索引擎优化
- 📱 **响应式设计** - 完美适配从手机到桌面的各种设备
- 🛠️ **易于自定义** - 可根据个人需求定制
- 🖼️ **项目展示** - 展示你的作品和项目

## 🚀 快速开始

### 前置条件

- Node.js 18.0.0 或更高版本
- 包管理器 (npm, yarn 或 pnpm)

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/your-username/yuwebsite.git
cd yuwebsite
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 构建生产版本

```bash
npm run build
```

## 📝 使用指南

### 目录结构

```
yuwebsite/
├── public/             # 静态资源
│   ├── content/        # 博客内容
│   │   └── blog/       # Markdown 博客文章
│   └── images/         # 图像资源
├── src/
│   ├── components/     # 组件
│   ├── layouts/        # 布局组件
│   ├── pages/          # 页面组件
│   ├── hooks/          # 自定义 React Hooks
│   ├── utils/          # 通用工具函数
│   ├── types/          # 类型定义
│   └── styles/         # 全局样式
└── astro.config.mjs    # Astro 配置文件
```

### 添加博客文章

在 `public/content/blog` 目录下创建新的 Markdown 文件，文件应包含以下 frontmatter:

```markdown
---
title: "文章标题"
description: "文章描述"
date: "2023-01-01"
author: "你的名字"
authorImage: "/images/avatar.jpg"
category: "分类"
readingTime: "5分钟"
image: "/images/blog/example.jpg"
slug: "article-slug"
tags: ["标签1", "标签2"]
---

这是文章内容。
```

### 自定义主题

编辑 `src/styles/global.css` 文件以修改颜色变量和其他全局样式。

### 添加项目

编辑 `src/pages/projects.astro` 文件中的 `projects` 数组以添加你的项目。

## 🛠️ 部署

### Vercel 部署

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 仓库中导入项目
3. 按照提示进行配置
4. 部署完成

### Netlify 部署

1. 将代码推送到 GitHub 仓库
2. 在 Netlify 控制台中导入项目
3. 构建命令: `npm run build`
4. 发布目录: `dist`

## 🤝 贡献

欢迎贡献！请随时提交 pull request 或创建 issue 讨论新功能或改进。

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

该项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件。

## 📧 联系方式

如有任何问题或建议，请通过以下方式联系我：

- GitHub: [yubdgyu](https://github.com/yubdgyu)
- 邮箱: 1216164436@qq.com

---

⭐️ 如果你喜欢这个项目，请考虑给它点个星！
