import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaWeixin } from "react-icons/fa6";

interface FooterIconsProps {
  className?: string;
  iconSize?: number;
}

const FooterIcons: React.FC<FooterIconsProps> = ({ className = '', iconSize = 24 }) => {
  // 微信二维码弹窗函数
  const showWechatQRCode = (e: React.MouseEvent) => {
    e.preventDefault();
    const wechatModal = document.getElementById('wechat-modal');
    wechatModal?.classList.remove('hidden');
    wechatModal?.classList.add('flex');
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: '访问我的 GitHub' },
    { icon: FaXTwitter, href: 'https://twitter.com/yourusername', label: '访问我的 X' },
    { icon: FaWeixin, href: '#', label: '查看我的微信', onClick: showWechatQRCode },
  ];

  return (
    <div className={`flex space-x-6 mb-6 ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label={link.label}
            title={link.label}
            onClick={link.onClick}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
};

export default FooterIcons; 