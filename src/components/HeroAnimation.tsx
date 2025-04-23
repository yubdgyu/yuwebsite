import React, { useEffect, useRef } from 'react';

interface HeroAnimationProps {}

const HeroAnimation: React.FC<HeroAnimationProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDarkMode = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const checkTheme = () => {
      isDarkMode.current = document.documentElement.classList.contains('dark');
    };

    // 初始检查主题
    checkTheme();

    // 设置画布尺寸
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 主题变化监听
    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    themeObserver.observe(document.documentElement, { attributes: true });

    // 粒子属性
    const particles: Particle[] = [];
    // 在暗模式下减少粒子数量，提高性能
    const getParticleCount = () => Math.floor(window.innerWidth / (isDarkMode.current ? 15 : 10));
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // 边界检查
        if (this.x > window.innerWidth || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > window.innerHeight || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // 在dark模式下优化粒子渲染
        if (isDarkMode.current) {
          ctx!.fillStyle = this.color.replace('60%', '70%');
          // 减少模糊效果，提高性能
          ctx!.shadowBlur = this.size * 1.5;
          ctx!.shadowColor = this.color;
        } else {
          ctx!.fillStyle = this.color.replace('hsl', 'hsla').replace(')', `,${this.opacity})`);
          ctx!.shadowBlur = 0;
        }
        
        ctx!.fill();
      }
    }
    
    // 初始化粒子
    const initParticles = () => {
      particles.length = 0;
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();
    
    // 针对暗模式优化连线算法
    const connectParticles = () => {
      // 暗模式下减少最大连线距离，提高性能
      const maxDistance = isDarkMode.current ? 100 : 120;
      
      for (let a = 0; a < particles.length; a++) {
        // 优化：每个粒子只与临近的粒子连线，最多检查40个其他粒子
        const limit = Math.min(a + 40, particles.length);
        for (let b = a + 1; b < limit; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = isDarkMode.current 
              ? 1 - (distance / maxDistance) * 0.8
              : (1 - (distance / maxDistance)) * 0.4;
            
            ctx!.beginPath();
            ctx!.strokeStyle = isDarkMode.current 
              ? `rgba(150, 200, 255, ${opacity * 0.7})`
              : `rgba(100, 150, 220, ${opacity})`;
            ctx!.lineWidth = isDarkMode.current ? 0.4 : 0.2;
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };
    
    // 减少动画帧率，在暗模式下提高性能
    let frameSkip = 0;
    
    // 动画循环
    const animate = () => {
      // 暗模式下每3帧更新一次，避免卡顿
      if (isDarkMode.current && frameSkip < 2) {
        frameSkip++;
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }
      frameSkip = 0;
      
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // 更新并绘制粒子
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      // 连接粒子
      connectParticles();
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      themeObserver.disconnect();
    };
  }, []);
  
  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default HeroAnimation; 