import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EPKSection from '@/components/EPKSection';
import MusicSection from '@/components/MusicSection';
import BookingSection from '@/components/BookingSection';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EPKSection />
      <MusicSection />
      <BookingSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
