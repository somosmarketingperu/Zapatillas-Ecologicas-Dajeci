import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'DAJECI Calzado Ecológico',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-[#ECEAE2] text-[#424E46] p-6 text-center ${className}`}
      >
        <Leaf className="w-6 h-6 text-[#1B5E3A]" aria-hidden="true" />
        <span className="text-xs font-medium tracking-tight">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
