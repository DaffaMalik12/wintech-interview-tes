// /components/ImageCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import { GalleryImage } from '@/types/Gallery';

// The props definition remains the same.
interface ImageCardProps {
  image: GalleryImage;
}

/**
 * ImageCard Component
 * Renders a single image with a hover effect.
 * It now uses the 'url' property for the image source and link.
 */
const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="group relative block h-full w-full overflow-hidden rounded-lg shadow-lg">
      <Link href={image.url} target="_blank" rel="noopener noreferrer">
        {/* The 'src' is now image.url.
            The 'alt' text uses image.name for better accessibility.
            The 'fill' and 'sizes' props are used for responsive image optimization.
        */}
        <Image
          src={image.url}
          alt={image.name}
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* The overlay remains the same, displaying the name and URL on hover. */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <p className="font-bold">{image.name}</p>
          <p className="w-full truncate text-center text-sm text-gray-300">
            {image.url}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;