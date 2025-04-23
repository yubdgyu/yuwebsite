import React from 'react';

interface ReadMoreButtonProps {
  href: string;
  text?: string;
  className?: string;
}

/**
 * 通用的"阅读更多"按钮组件
 */
const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  href,
  text = "阅读全文",
  className = ""
}) => {
  return (
    <a 
      href={href} 
      className={`text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center ${className}`}
    >
      {text}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 ml-1" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
          clipRule="evenodd" 
        />
      </svg>
    </a>
  );
};

export default ReadMoreButton; 