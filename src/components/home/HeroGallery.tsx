import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import productMilk from '../../assets/yogert-vanillia.png';
import productMilk5 from '../../assets/yogert-cooki.png';
import laban from '../../assets/yogert-stro.png';

const images = [productMilk, productMilk5, laban];

export const HeroGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
            {/* Background Blur */}
            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform scale-90" />

            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Hero Image ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-primary w-6"
                            : "bg-primary/30 hover:bg-primary/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
