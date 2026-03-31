import React, { useEffect, useState, ReactNode } from 'react';

interface OptimizedBackgroundProps {
    imageUrl: string;
    children: ReactNode;  // ← AGREGAR ESTA LÍNEA
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