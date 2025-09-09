// Image optimization utilities for better SEO and performance

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export function getOptimizedImageProps({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className = '',
  onError
}: ImageProps) {
  return {
    src,
    alt,
    width,
    height,
    loading,
    className,
    onError,
    // Add web vitals optimization attributes
    decoding: 'async' as const,
    // Prevent layout shift
    style: width && height ? { aspectRatio: `${width}/${height}` } : undefined
  };
}

// Generate srcset for responsive images
export function generateSrcSet(baseSrc: string, sizes: number[] = [320, 640, 1024, 1920]) {
  // For now, return the base src since we're using static images
  // In production, this would generate multiple image sizes
  return baseSrc;
}

// Check if image should be preloaded (above the fold)
export function shouldPreloadImage(imagePath: string): boolean {
  const preloadImages = [
    'TGB Kitchen 1_1749359176367.png',
    'Modern Blue Kitchen Elegance.png',
    'luxury-kitchen-glenelg.jpg'
  ];
  
  return preloadImages.some(img => imagePath.includes(img));
}

// Add preload link tags for critical images
export function preloadCriticalImages() {
  const criticalImages = [
    '/attached_assets/TGB Kitchen 1_1749359176367.png',
    '/attached_assets/Modern Blue Kitchen Elegance.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}