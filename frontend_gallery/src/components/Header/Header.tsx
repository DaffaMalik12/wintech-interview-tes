
// Import the Link component from Next.js for client-side navigation.
// This allows for fast page transitions without a full page reload.
import Link from 'next/link';

/**
 * Header component
 * This functional component renders the main site navigation header.
 * It includes the site title and navigation links.
 */
const Header = () => {
  return (
    // The <header> semantic tag is used for the main header of the page.
    // 'bg-white' sets a white background.
    // 'shadow-sm' adds a subtle box shadow for a lifting effect, separating it from the content below.
    <header className="bg-white shadow-sm">
      
      {/* This div acts as a container to center the content and manage padding.
        'container': Sets a max-width for the content.
        'mx-auto': Centers the container horizontally.
        'flex': Enables flexbox layout.
        'justify-between': Pushes the child elements to opposite ends (logo to the left, nav to the right).
        'items-center': Aligns items vertically to the center.
        'p-4': Applies padding of 1rem (16px) on all sides.
      */}
      <div className="container mx-auto flex  items-center p-4">
        
        {/* Site Title / Logo */}
        {/* This Link component wraps the site title, making it a link to the homepage. */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Picture Gallery
        </Link>

        {/* Navigation Links */}
        {/* The <nav> semantic tag is used for navigation links. */}
        <nav>
          {/* This div groups the navigation links.
            'flex': Arranges the links in a row.
            'items-center': Vertically aligns the links.
            'space-x-6': Adds a horizontal space of 1.5rem (24px) between the links.
          */}
          <div className="flex items-center ml-10 space-x-10">
            <Link href="/" className="text-gray-900 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/pictures" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pictures
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
};

// Export the component so it can be used in other files.
export default Header;