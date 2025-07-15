import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Music2 } from 'lucide-react';
import albumCover from '@/assets/stein-etter-stein-cover.jpg';

const MusicSection = () => {
  const streamingLinks = [
    { name: 'Spotify', url: '#', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Apple Music', url: '#', color: 'bg-gray-900 hover:bg-gray-800' },
    { name: 'YouTube Music', url: '#', color: 'bg-red-600 hover:bg-red-700' },
    { name: 'Tidal', url: '#', color: 'bg-blue-600 hover:bg-blue-700' },
  ];

  return (
    <section id="music" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Musikk
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hør Emil Fawzis nyeste utgivelser og opplev lyden som definerer ny norsk rap
          </p>
        </div>

        {/* Featured EP */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-card/80 to-muted/30 backdrop-blur-sm border-border/50 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-card mb-6 md:mb-0">
                  <img 
                    src={albumCover} 
                    alt="Stein Etter Stein Album Cover" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-3xl text-foreground mb-2">
                      Stein Etter Stein
                    </h3>
                    <p className="text-lg text-primary font-medium">Debut EP • 2024</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Emil Fawzis debut-EP markerer starten på en reise fra bunn til topp. 
                    Med bars som bygger opp en ny generasjon, tar han deg med på en 
                    musikalsk opplevelse som kombinerer teknisk dyktighet med ekte følelser.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" className="flex-1">
                      <Play className="mr-2 h-4 w-4" />
                      Spill av
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Music2 className="mr-2 h-4 w-4" />
                      Se tracklist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Streaming Links */}
        <div className="text-center">
          <h3 className="font-display font-bold text-2xl text-foreground mb-8">
            Hør på alle plattformer
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {streamingLinks.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                asChild
                className="h-14 font-medium hover:scale-105 transition-all duration-300"
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {platform.name}
                </a>
              </Button>
            ))}
          </div>

          {/* Spotify Embed Placeholder */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
              <h4 className="font-display font-bold text-xl text-foreground mb-4">
                Spotify Player
              </h4>
              <div className="bg-muted/50 rounded-lg h-[152px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Music2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Spotify embed will be added here</p>
                  <p className="text-sm">when official release is live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;