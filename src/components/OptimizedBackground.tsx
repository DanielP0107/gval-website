import React, { useEffect, useState, type ReactNode } from 'react';

interface OptimizedBackgroundProps {
    imageUrl: string;
    children?: ReactNode; 
}

const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({ imageUrl, children }) => {
    const [isImageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImageLoaded(true);
    }, [imageUrl]);

    return (
        <div style={{
            backgroundImage: isImageLoaded ? `url(${imageUrl})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.5s ease-in-out',
            height: '100%',
            width: '100%',
            position: 'relative'
        }}>
            {children}
        </div>
    );
};

export default OptimizedBackground;