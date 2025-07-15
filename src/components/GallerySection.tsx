import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Play, Download, X } from 'lucide-react';
import pressPhoto1 from '@/assets/press-photo-1.jpg';
import livePhoto1 from '@/assets/live-photo-1.jpg';
import studioPhoto1 from '@/assets/studio-photo-1.jpg';

interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: 'press' | 'live' | 'studio' | 'promo';
  description?: string;
}

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: '1',
      type: 'photo',
      src: pressPhoto1,
      thumbnail: pressPhoto1,
      title: 'Professional Press Photo',
      category: 'press',
      description: 'High-resolution press photo for media use'
    },
    {
      id: '2',
      type: 'photo',
      src: livePhoto1,
      thumbnail: livePhoto1,
      title: 'Live at SALT - Utsolgt Show',
      category: 'live',
      description: '500+ publikum, moshpit og encore'
    },
    {
      id: '3',
      type: 'photo',
      src: studioPhoto1,
      thumbnail: studioPhoto1,
      title: 'Studio Session - Stein Etter Stein',
      category: 'studio',
      description: 'Behind the scenes fra EP-innspillingen'
    }
  ];

  const categories = [
    { id: 'all', label: 'Alle', count: mediaItems.length },
    { id: 'press', label: 'Presse', count: mediaItems.filter(item => item.category === 'press').length },
    { id: 'live', label: 'Live', count: mediaItems.filter(item => item.category === 'live').length },
    { id: 'studio', label: 'Studio', count: mediaItems.filter(item => item.category === 'studio').length },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const handleDownload = (item: MediaItem) => {
    const link = document.createElement('a');
    link.href = item.src;
    link.download = `emil-fawzi-${item.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    link.click();
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Galleri & Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bilder fra konserter, studio og press. Høyoppløselige bilder tilgjengelig for nedlasting.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:scale-[1.02] transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-white/80 text-sm">{item.description}</p>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-black/50 hover:bg-black/70 text-white border-0"
                        onClick={() => setSelectedMedia(item)}
                      >
                        {item.type === 'video' ? <Play className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-md">
                      <div className="relative">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="mt-4 space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                          {item.description && (
                            <p className="text-muted-foreground">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-black/50 hover:bg-black/70 text-white border-0"
                    onClick={() => handleDownload(item)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={item.category === 'press' ? 'default' : 'secondary'}
                    className="capitalize"
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Press Kit Download */}
        <div className="mt-16 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Komplett Press Kit
              </h3>
              <p className="text-muted-foreground mb-6">
                Last ned hele pressesamlingen med høyoppløselige bilder, bio og teknisk informasjon.
              </p>
              <Button variant="hero" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Last ned Press Kit
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Video Section Placeholder */}
        <div className="mt-16">
          <h3 className="font-display font-bold text-3xl text-center text-foreground mb-8">
            Videoer
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="font-medium">Konsert på SALT</p>
                    <p className="text-sm">Kommer snart</p>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Live Performance</h4>
                <p className="text-sm text-muted-foreground">Utdrag fra utsolgte konserten på SALT</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="font-medium">Musikkvideo</p>
                    <p className="text-sm">Kommer snart</p>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Stein Etter Stein</h4>
                <p className="text-sm text-muted-foreground">Offisiell musikkvideo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;