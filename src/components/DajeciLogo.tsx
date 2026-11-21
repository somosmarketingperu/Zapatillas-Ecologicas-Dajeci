import React from 'react';

interface DajeciLogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * Emblema oficial DAJECI inspirado en su identidad visual de Instagram (@dajecimcg):
 * hoja botánica entrelazada con trazo de costura artesanal circular.
 */
export const DajeciLogo: React.FC<DajeciLogoProps> = ({
  className = '',
  showWordmark = true,
}) => {
  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M27.5 4.5C17.2 6.8 11.4 13.8 11.8 23.2C11.9 25.1 10.7 27.6 9.5 29.8C9.1 30.6 9.8 31.4 10.6 31.1C11.4 30.8 12.1 29.5 12.8 27.6C13.6 25.5 14.3 25.3 15.8 25.2C23.8 24.6 28.4 16.9 27.5 4.5Z"
          fill="#1B5E3A"
        />
        <path
          d="M12.6 24.4C15.8 18.8 19.6 13.9 24.4 9.6"
          stroke="#F8F8F6"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark && (
        <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[#1B5E3A]">
          DAJECI
        </span>
      )}
    </span>
  );
};
