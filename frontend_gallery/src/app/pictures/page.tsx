// /components/GallerySection.tsx

import { GalleryImage, GalleryApiResponse } from '@/types/Gallery';
import ImageCard from '@/components/Card/ImageCard';
import ImageCardSkeleton from '@/components/Card/ImageCardSkeleton'; // Import the new skeleton component
import React, { Suspense } from 'react'; // Import Suspense for demonstrating fallback

// This function fetches the gallery data from your local API.
// It's defined outside the component for better organization.
async function getGalleryData(): Promise<GalleryImage[]> {
  try {
    // Simulate network delay to make the loading skeleton visible during development.
    // In a real application, you would remove this artificial delay.
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay

    // Fetch data from the Express server endpoint.
    // { cache: 'no-store' } is added to ensure fresh data on every request during development.
    const response = await fetch('http://localhost:4001/api/gallery', {
      cache: 'no-store',
    });

    // Handle non-successful responses (e.g., server is down, 404, 500).
    if (!response.ok) {
      throw new Error('Failed to fetch gallery data.');
    }

    // Parse the JSON and return the images array.
    const data: GalleryApiResponse = await response.json();
    return data.images;
  } catch (error) {
    // Log the error for debugging on the server.
    console.error('[GALLERY_FETCH_ERROR]', error);
    // Return an empty array to prevent the component from crashing.
    return [];
  }
}

/**
 * GalleryContent Component (Client Component or a sub-Server Component)
 * This component will actually render the images once they are loaded.
 * We extract this so we can wrap the data fetching part in a Suspense boundary.
 * In a real application, this could still be an async Server Component directly.
 * For demonstration purposes with a loading fallback, we'll use a Client Component pattern for simplicity here.
 */
async function GalleryContent() {
  const images = await getGalleryData();

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold text-gray-700">
          No images found.
        </h3>
        <p className="text-gray-500">Please check the API server.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {images.map((image) => (
        <div key={image.id} className="aspect-square">
          <ImageCard image={image} />
        </div>
      ))}
    </div>
  );
}

/**
 * GallerySection Async Server Component
 * This component acts as a wrapper for the gallery content, handling the loading state
 * with a Suspense fallback and error messages.
 */
export default async function GallerySection() {
  // We'll simulate a fixed number of skeleton items.
  const numberOfSkeletons = 10; // For example, show 10 skeleton cards while loading.

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:mb-12 sm:text-4xl">
          Picture Gallery
        </h2>

        {/* Suspense boundary for data fetching */}
        {/* While the async GalleryContent is fetching data, the fallback will be displayed. */}
        <Suspense fallback={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {/* Render multiple skeleton components as the fallback */}
            {Array.from({ length: numberOfSkeletons }).map((_, index) => (
              <div key={index} className="aspect-square">
                <ImageCardSkeleton />
              </div>
            ))}
          </div>
        }>
          {/* GalleryContent will be rendered once its data fetching is complete. */}
          <GalleryContent />
        </Suspense>
      </div>
    </section>
  );
}