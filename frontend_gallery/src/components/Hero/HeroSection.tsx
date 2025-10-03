// /components/HeroSection.tsx

// Import the Link component from Next.js for client-side navigation.
import Link from 'next/link';
// Import React is good practice, especially for defining component types.

/**
 * HeroSection Component
 * * This component displays the main hero section for the website.
 * It features a large headline, a descriptive paragraph, and two call-to-action buttons.
 * It is designed to be the first thing a user sees when they visit the page.
 */
const HeroSection: React.FC = () => {
  return (
    // The <section> tag defines a thematic grouping of content.
    // 'bg-white': Sets a clean white background for the section.
    <section className="bg-white">
      
      {/* This div is the main container for the hero content.
        - 'container mx-auto': Centers the content and applies a max-width.
        - 'flex flex-col items-center justify-center': Uses flexbox to center the content both vertically and horizontally.
        - 'min-h-[calc(100vh-80px)]': Sets a minimum height for the section. It calculates the full viewport height minus 80px,
          which is a common height for a header. This ensures the hero section fills the screen below the header. Adjust '80px' if your header has a different height.
        - 'text-center': Centers all the text inside this container.
        - 'py-16 px-4': Adds vertical and horizontal padding for spacing on smaller screens.
      */}
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center py-16 px-4">
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to Picture Gallery
        </h1>
        
        {/* Subheading / Descriptive Paragraph */}
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Discover and explore beautiful images from around the world. Browse our
          curated collection of stunning photographs.
        </p>
        
        {/* Call-to-Action (CTA) Buttons Container */}
        {/* This div groups the two buttons.
          - 'flex': Arranges the buttons in a row.
          - 'justify-center': Centers the buttons horizontally within the container.
          - 'gap-4': Adds a 1rem (16px) gap between the buttons.
        */}
        <div className="flex justify-center gap-4">
          
          {/* Primary Button */}
          <Link
            href="/pictures"
            className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            View Gallery
          </Link>
          
          {/* Secondary Button */}
          <Link
            href="/about"
            className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-300"
          >
            Learn More
          </Link>

        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application.
export default HeroSection;