import React, { useRef, useState } from 'react';
import useImageOptimization from '../hooks/useImageOptimization';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

const OptimizedImage = ({ 
    src, 
    alt, 
    className, 
    width, 
    height 
}: OptimizedImageProps) => {
    // Especificamos el tipo en el useRef
    const imageRef = useRef<HTMLImageElement>(null);
    const isVisible = useImageOptimization(imageRef as React.RefObject<HTMLImageElement>);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <img
            ref={imageRef}
            src={isVisible ? src : ""}
            alt={alt}
            className={className}
            width={width}
            height={height}
            onLoad={() => setIsLoading(false)}
            style={{ 
                opacity: isLoading ? 0.5 : 1, 
                transition: 'opacity 0.3s',
                display: 'block'
            }}
        />
    );
};

export default OptimizedImage;