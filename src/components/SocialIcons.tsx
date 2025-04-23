import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTiktok, FaTelegram } from 'react-icons/fa';
import { FaXTwitter, FaWeixin } from "react-icons/fa6";

interface SocialIconProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconProps> = ({ className = '', iconSize = 24 }) => {
  // 微信二维码弹窗函数
  const showWechatQRCode = (e: React.MouseEvent) => {
    e.preventDefault();
    const wechatModal = document.getElementById('wechat-modal');
    wechatModal?.classList.remove('hidden');
    wechatModal?.classList.add('flex');
  };

  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:example@example.com', label: '邮箱' },
    { icon: FaWeixin, href: '#', label: '微信', onClick: showWechatQRCode },
    { icon: FaXTwitter, href: 'https://twitter.com/your_twitter', label: 'X' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/your_linkedin', label: '领英' },
    { icon: FaTiktok, href: 'https://tiktok.com/@your_tiktok', label: '抖音' },
    { icon: FaTelegram, href: 'https://t.me/your_telegram', label: 'Telegram' },
    { icon: FaGithub, href: 'https://github.com/your_github', label: 'GitHub' },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            onClick={link.onClick}
            aria-label={link.label}
            title={link.label}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons; 