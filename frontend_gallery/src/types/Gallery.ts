// /types/index.ts

// This interface defines the shape for a single image object from the API.
export interface GalleryImage {
  id: number;
  name: string;
  url: string; // The URL from the API will be used for both the image source and the link.
}

// This interface defines the shape of the entire API response.
export interface GalleryApiResponse {
  images: GalleryImage[];
}