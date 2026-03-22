"use client";

import { useState } from "react";

interface HeroImageProps {
    src: string;
    alt: string;
    height?: number; // default height for landscape
}

export default function HeroImage({
    src,
    alt,
    height = 420,
}: HeroImageProps) {
    const [isPortrait, setIsPortrait] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <div
        className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
        style={{ height }}
        >
        {/* Skeleton loading */}
        {!loaded && (
            <div className="absolute w-full h-full bg-gray-200 animate-pulse" />
        )}

        <img
            src={src}
            alt={alt}
            onLoad={(e) => {
            const img = e.currentTarget;
            setIsPortrait(img.naturalHeight > img.naturalWidth);
            setLoaded(true);
            }}
            className={`transition-all duration-300 ${
            isPortrait
                ? "max-h-full w-auto object-contain"
                : "w-full h-full object-cover"
            }`}
        />
        </div>
    );
}
