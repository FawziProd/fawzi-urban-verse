import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Om Emil
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Refleksjoner om reisen og kunstnerskapet
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">

          {/* Personal Story */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-2xl text-primary mb-6">
                  Øyeblikket som endret alt
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Det var på videregående. Emil hørte noen synge med på en låt – hans egen låt. 
                    De visste ikke at han stod rett bak dem. De visste ikke at han hadde skrevet 
                    ordene de sang.
                  </p>
                  <p>
                    I det øyeblikket skjønte han at musikk er mer enn underholdning. Det er kontakt. 
                    Det er en bro mellom mennesker som har opplevd det samme, følt det samme, 
                    drømt det samme.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-2xl text-primary mb-6">
                  Filosofien bak musikken
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Emil Fawzi tror på at ekte rap kommer fra ekte opplevelser. Hans bars er ikke 
                    bare ordspill – de er historier, følelser og sandheter pakket inn i rytmer 
                    som får hjertet til å banke hardere.
                  </p>
                  <p>
                    "Jeg vil at folk skal høre en linje og tenke: 'Faen, han forstår meg.' 
                    Det er når musikk blir viktig."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Journey Timeline */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-2xl text-primary mb-8 text-center">
                Reisen så langt
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Første gang han hørte fans synge med</h4>
                    <p className="text-muted-foreground">
                      Øyeblikket som definerte hans forhold til musikk og publikum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Utsolgt konsert på SALT</h4>
                    <p className="text-muted-foreground">
                      500+ mennesker, moshpit og encore. Beviset på at han hadde noe spesielt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">"Stein Etter Stein" EP</h4>
                    <p className="text-muted-foreground">
                      Debut-EP-en som markerer starten på reisen fra bunn til topp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Hall of Fame ambisjoner</h4>
                    <p className="text-muted-foreground">
                      Målet er å sette et varig preg på norsk rap og inspirere en ny generasjon.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <h4 className="font-display font-bold text-xl text-primary mb-3">Autentisitet</h4>
                <p className="text-muted-foreground text-sm">
                  Hver linje er ekte, hver følelse er ærlig.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <h4 className="font-display font-bold text-xl text-primary mb-3">Teknikk</h4>
                <p className="text-muted-foreground text-sm">
                  Leken dyktighet møter sylskarpe rim.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <h4 className="font-display font-bold text-xl text-primary mb-3">Kontakt</h4>
                <p className="text-muted-foreground text-sm">
                  Musikk som bygger broer mellom mennesker.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;