// /app/page.tsx

// 1. Import the HeroSection component you just created.
import HeroSection from '@/components/Hero/HeroSection';

export default function HomePage() {
  return (
    // 2. The <main> tag is a good container for the primary page content.
    <main>
      {/* 3. Render the HeroSection component here. */}
      <HeroSection />

      {/* You can add other page content and sections below the hero section. */}
      {/*
        <section>
          <h2>More Content Here</h2>
        </section>
      */}
    </main>
  );
}