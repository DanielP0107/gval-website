import { useEffect, useState, RefObject } from 'react';

// Añadimos el tipo RefObject<HTMLElement> para que acepte imágenes u otros contenedores
const useImageOptimization = (imageRef: RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        // Usamos una variable local para el cleanup (buena práctica en TS)
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