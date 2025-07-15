import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Music, Copy, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText('emil.fawzi.music@gmail.com');
    toast({
      title: "E-post kopiert!",
      description: "emil.fawzi.music@gmail.com er kopiert til utklippstavlen."
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@emil__fawzi',
      url: 'https://instagram.com/emil__fawzi',
      icon: Instagram,
      description: 'Følg for oppdateringer og bak kulissene-innhold'
    },
    {
      name: 'Spotify',
      handle: 'Emil Fawzi',
      url: '#',
      icon: Music,
      description: 'Hør all musikken på Spotify'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ta kontakt for booking, samarbeid eller bare for å si hei
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary flex items-center">
                  <Mail className="mr-3 h-6 w-6" />
                  E-post
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    For booking, samarbeid og alle henvendelser:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-mono text-foreground">
                      emil.fawzi.music@gmail.com
                    </span>
                    <Button variant="outline" size="sm" onClick={copyEmail}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>Responstid: 24-48 timer</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Booking forespørsler prioriteres</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span>Samarbeider med artister og produsenter</span>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  className="w-full"
                  asChild
                >
                  <a href="mailto:emil.fawzi.music@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send e-post
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">
                  Sosiale medier
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {socialLinks.map((social) => (
                  <div key={social.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <social.icon className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <h4 className="font-medium text-foreground">{social.name}</h4>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">
                      {social.description}
                    </p>
                  </div>
                ))}

                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium text-foreground mb-3">Andre plattformer:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" disabled className="opacity-50">
                      YouTube
                    </Button>
                    <Button variant="outline" size="sm" disabled className="opacity-50">
                      TikTok
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Kommer snart
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Expansion */}
          <Card className="bg-gradient-accent text-white border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="font-display font-bold text-2xl mb-4">
                Fremtidige muligheter
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">🛍️ Merchandise</h4>
                  <p className="opacity-90">Nettbutikk for merch, vinyl og limited drops</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📝 Blogg</h4>
                  <p className="opacity-90">Tanker om musikk, industry og kreativitet</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📬 Newsletter</h4>
                  <p className="opacity-90">Eksklusivt innhold og tidlige oppdateringer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;