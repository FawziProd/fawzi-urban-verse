import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Trophy, Target } from 'lucide-react';

const EPKSection = () => {
  return (
    <section id="epk" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Electronic Press Kit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alt du trenger å vite om Emil Fawzi som artist
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary flex items-center">
                  <Users className="mr-3 h-6 w-6" />
                  Kort Bio
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>
                  Emil Fawzi er en norsk rapper kjent for leken teknikk, sterke linjer og ekte nerve. 
                  Han blander klassiske rap-beats med moderne klubbenergi og leverer med en selvtillit 
                  som både utfordrer og samler publikum. Han er ikke bare et navn – han er en bevegelse.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary flex items-center">
                  <Star className="mr-3 h-6 w-6" />
                  Lang Bio
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Emil Fawzi har etablert seg som en av de mest interessante nye stemmene i norsk rap. 
                  Med en kompromissløs stil, sylskarpe rim og en energi som smitter over på både 
                  live-publikum og lyttere, kombinerer han det beste fra old school og ny klubblyd.
                </p>
                <p>
                  Hans musikk er drevet av personlig historie og et ønske om å inspirere. Fra første 
                  gang han hørte folk synge med på låten hans på videregående – uten at de visste han 
                  stod bak – visste han at musikk var mer enn underholdning. Det er kontakt.
                </p>
                <p>
                  Med en utsolgt konsert på SALT (500+ mennesker, moshpit og encore) og en stadig 
                  voksende fanbase, har Emil vist at han har det som skal til for å sette et varig 
                  preg på norsk rap.
                </p>
                <p>
                  Debut-EP-en <strong>Stein Etter Stein</strong> markerer starten på en reise fra 
                  bunn til topp – med bars som bygger opp en ny generasjon.
                </p>
                
                <div className="mt-6 p-4 bg-secondary/20 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground font-medium italic text-lg">
                    "Han gikk gjennom det samme som meg."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary flex items-center">
                  <Target className="mr-3 h-6 w-6" />
                  Visjon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Å løfte nivået i norsk rap. Å gjøre teknikk og innhold kult igjen. 
                  Og å gi lytterne følelsen av at "han gikk gjennom det samme som meg."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary flex items-center">
                  <Trophy className="mr-3 h-6 w-6" />
                  Karrierehøydepunkter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Utsolgt show på SALT</span>
                    <Badge variant="secondary">500+ publikum</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">EP "Stein Etter Stein"</span>
                    <Badge variant="outline">Ute nå</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Fans synger med</span>
                    <Badge variant="secondary">Organisk vekst</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Hall of Fame ambisjon</span>
                    <Badge className="bg-primary text-primary-foreground">Fremtid</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">
                  Samarbeid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Åpen for features og kreative samarbeid, både nasjonalt og internasjonalt.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Yasin</Badge>
                  <Badge variant="outline">Asme</Badge>
                  <Badge variant="outline">Norske artister</Badge>
                  <Badge variant="outline">Internasjonale features</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EPKSection;