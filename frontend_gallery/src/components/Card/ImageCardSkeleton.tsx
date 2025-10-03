// /components/Card/ImageCardSkeleton.tsx


/**
 * ImageCardSkeleton Component
 * Renders a placeholder skeleton for an image card while content is loading.
 * It uses Tailwind's 'animate-pulse' utility to create a shimmering effect.
 */
const ImageCardSkeleton: React.FC = () => {
  return (
    // 'animate-pulse' provides a subtle loading animation.
    // 'bg-gray-200': Sets a light grey background for the placeholder.
    // 'rounded-lg shadow-lg': Matches the styling of the actual ImageCard.
    // 'aspect-square': Ensures the skeleton maintains the same aspect ratio as the image cards.
    // 'h-full w-full': Makes sure it fills its parent container.
    <div className="animate-pulse bg-gray-200 rounded-lg shadow-lg aspect-square h-full w-full">
      {/* Optionally, you can add more detailed placeholder elements if needed,
          e.g., for text or other elements within the card.
          For a simple image card, a solid block is often sufficient. */}
    </div>
  );
};

export default ImageCardSkeleton;