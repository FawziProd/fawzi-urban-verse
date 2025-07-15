import { Button } from "@/components/ui/button";
import { Music, Calendar, FileText } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Emil Fawzi Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Artist Name */}
          <div className="space-y-4">
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl text-foreground tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                EMIL
              </span>
              <br />
              <span className="text-foreground">
                FAWZI
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Norsk rapper med bars, beats og brodd.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('music')}
              className="w-full sm:w-auto min-w-[200px]"
            >
              <Music className="mr-2 h-5 w-5" />
              🎧 Hør musikken
            </Button>
            
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="w-full sm:w-auto min-w-[200px]"
            >
              <Calendar className="mr-2 h-5 w-5" />
              📅 Book Emil
            </Button>
            
            <Button 
              variant="minimal" 
              size="lg"
              onClick={() => scrollToSection('epk')}
              className="w-full sm:w-auto min-w-[200px]"
            >
              <FileText className="mr-2 h-5 w-5" />
              📰 Se EPK
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;