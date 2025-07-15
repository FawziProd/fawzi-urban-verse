import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Music, Calendar, User, Mail, Camera } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-display font-bold text-xl text-primary hover:text-primary/80 transition-colors"
            >
              EMIL FAWZI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Hjem
              </button>
              <button
                onClick={() => scrollToSection('epk')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                EPK
              </button>
              <button
                onClick={() => scrollToSection('music')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Musikk
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Booking
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Media
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Kontakt
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                <User className="mr-3 h-4 w-4" />
                Hjem
              </button>
              <button
                onClick={() => scrollToSection('epk')}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                <User className="mr-3 h-4 w-4" />
                EPK
              </button>
              <button
                onClick={() => scrollToSection('music')}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                <Music className="mr-3 h-4 w-4" />
                Musikk
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                <Calendar className="mr-3 h-4 w-4" />
                Booking
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                <Camera className="mr-3 h-4 w-4" />
                Media
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                <Mail className="mr-3 h-4 w-4" />
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;