# Personal Website - Yu's Tech Blog

This is a personal website built with Astro and React, showcasing my tech blog, projects, and personal introduction.

## Demo Site

**Visit Online**: [https://yuwebsite.vercel.app/](https://yuwebsite.vercel.app/)

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://reactjs.org/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling solution
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com/) - Website deployment and hosting

## Features

- Responsive design
- Blog post system
- Project showcase
- Personal profile
- SEO optimization

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project uses Vercel for automatic deployment. Each push to the main branch triggers a new deployment.

## License

© 2025 Yu's Personal Website. All rights reserved.

## ✨ Features

- 🚀 **Astro Based** - Fast, modern static site generator
- ⚛️ **React Integration** - For interactive UI elements
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🌙 **Dark Mode** - Support for light/dark theme switching
- 📝 **Markdown Blog** - Simple content management
- 🔍 **SEO Friendly** - Optimized for search engines
- 📱 **Responsive Design** - Perfect fit from mobile to desktop
- 🛠️ **Easy to Customize** - Adaptable to your personal needs
- 🖼️ **Project Showcase** - Highlight your work and projects

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- Package manager (npm, yarn, or pnpm)

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/your-username/yuwebsite.git
cd yuwebsite
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 📝 Usage Guide

### Directory Structure

```
yuwebsite/
├── public/             # Static assets
│   ├── content/        # Blog content
│   │   └── blog/       # Markdown blog posts
│   └── images/         # Image assets
├── src/
│   ├── components/     # Components
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React Hooks
│   ├── utils/          # Utility functions
│   ├── types/          # Type definitions
│   └── styles/         # Global styles
└── astro.config.mjs    # Astro configuration
```

### Adding Blog Posts

Create new Markdown files in the `public/content/blog` directory with the following frontmatter:

```markdown
---
title: "Article Title"
description: "Article description"
date: "2023-01-01"
author: "Your Name"
authorImage: "/images/avatar.jpg"
category: "Category"
readingTime: "5 min"
image: "/images/blog/example.jpg"
slug: "article-slug"
tags: ["tag1", "tag2"]
---

This is the article content.
```

### Customizing Theme

Edit the `src/styles/global.css` file to modify color variables and other global styles.

### Adding Projects

Edit the `projects` array in the `src/pages/projects.astro` file to add your projects.

## 🛠️ Deployment

### Vercel Deployment

1. Push your code to a GitHub repository
2. Import your project in the Vercel dashboard
3. Follow the configuration prompts
4. Deploy

### Netlify Deployment

1. Push your code to a GitHub repository
2. Import your project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or create an issue to discuss new features or improvements.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

If you have any questions or suggestions, please reach out to me:

- GitHub: [your-username](https://github.com/your-username)
- Email: your-email@example.com

---

⭐️ If you like this project, please consider giving it a star! 