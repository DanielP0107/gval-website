import { useEffect, useState, type RefObject } from 'react';

const useImageOptimization = (imageRef: RefObject<HTMLImageElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificamos que estemos en el navegador
        if (typeof window === 'undefined' || !window.IntersectionObserver) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        const currentRef = imageRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [imageRef]);

    return isVisible;
};

export default useImageOptimization;