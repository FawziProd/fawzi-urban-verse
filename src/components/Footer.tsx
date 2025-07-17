import { Button } from "@/components/ui/button";
import { Instagram, Mail, Music, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="font-display font-black text-2xl text-primary hover:text-primary/80 transition-colors mb-4"
            >
              EMIL FAWZI
            </button>
            <p className="text-muted-foreground mb-6 max-w-md">
              Norsk rapper med bars, beats og brodd. Fra bunn til topp, 
              stein etter stein.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com/emil__fawzi" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Music className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:emil.fawzi.music@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigering</h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Hjem
              </button>
              <button 
                onClick={() => document.getElementById('epk')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                EPK
              </button>
              <button 
                onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Musikk
              </button>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Booking
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">E-post:</p>
                <a 
                  href="mailto:emil.fawzi.music@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  emil.fawzi.music@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Instagram:</p>
                <a 
                  href="https://instagram.com/emil__fawzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  @emil__fawzi
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Responstid:</p>
                <p className="text-foreground">24-48 timer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Emil Fawzi. Alle rettigheter reservert.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Laget med</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for norsk rap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;