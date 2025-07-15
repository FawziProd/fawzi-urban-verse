import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, Clock, Euro, Send } from 'lucide-react';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale';

const BookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    time: '',
    duration: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !date) {
      toast({
        title: "Manglende informasjon",
        description: "Vennligst fyll ut alle påkrevde felt.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link
    const subject = `Booking forespørsel - ${formData.eventType || 'Event'}`;
    const body = `
Hei Emil,

Jeg vil gjerne booke deg til følgende event:

Navn: ${formData.name}
E-post: ${formData.email}
Type event: ${formData.eventType}
Ønsket dato: ${date ? format(date, 'PPP', { locale: nb }) : 'Ikke valgt'}
Klokkeslett: ${formData.time}
Varighet: ${formData.duration}
Budsjett: ${formData.budget}

Tilleggsinformasjon:
${formData.message}

Mvh,
${formData.name}
    `.trim();

    const mailtoLink = `mailto:emil.fawzi.music@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Takk for din forespørsel!",
      description: "E-postklienten din åpnes for å sende bookingforespørselen."
    });
  };

  // Mock availability data
  const busyDates = [
    new Date(2024, 11, 15), // December 15, 2024
    new Date(2024, 11, 22), // December 22, 2024
    new Date(2025, 0, 5),   // January 5, 2025
  ];

  const isDateUnavailable = (date: Date) => {
    return busyDates.some(busyDate => 
      date.toDateString() === busyDate.toDateString()
    );
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Booking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ønsker du å booke Emil Fawzi til ditt event, konsert, klubbkveld eller samarbeid? 
            Bruk skjemaet under.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-primary flex items-center">
                <Send className="mr-3 h-6 w-6" />
                Booking Forespørsel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Fullt navn *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ditt navn"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-post *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="din@epost.no"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType">Type event</Label>
                  <Select onValueChange={(value) => setFormData({...formData, eventType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Velg type event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="konsert">Konsert</SelectItem>
                      <SelectItem value="festival">Festival</SelectItem>
                      <SelectItem value="klubbkveld">Klubbkveld</SelectItem>
                      <SelectItem value="privatfest">Privatfest</SelectItem>
                      <SelectItem value="bedriftsarrangement">Bedriftsarrangement</SelectItem>
                      <SelectItem value="feature">Feature/Samarbeid</SelectItem>
                      <SelectItem value="annet">Annet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="time">Ønsket klokkeslett</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Varighet</Label>
                    <Input
                      id="duration"
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="f.eks. 45 min, 1 time"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budsjett</Label>
                  <Input
                    id="budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    placeholder="Ditt budsjett for arrangementet"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tilleggsinformasjon</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Fortell mer om arrangementet, forventninger, tekniske krav, etc."
                    className="min-h-[100px]"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Forespørsel
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-primary flex items-center">
                <CalendarIcon className="mr-3 h-6 w-6" />
                Tilgjengelighet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label>Ønsket dato *</Label>
                  <div className="mt-2">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => {
                        return date < new Date() || isDateUnavailable(date);
                      }}
                      className="rounded-md border border-border bg-background/50 pointer-events-auto"
                    />
                  </div>
                  
                  {date && (
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm font-medium text-primary">
                        Valgt dato: {format(date, 'PPP', { locale: nb })}
                      </p>
                    </div>
                  )}
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Forklaring:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-primary rounded mr-2"></div>
                      <span className="text-muted-foreground">Valgt dato</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-muted rounded mr-2"></div>
                      <span className="text-muted-foreground">Opptatt</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border border-border rounded mr-2"></div>
                      <span className="text-muted-foreground">Ledig</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-3">Direkte kontakt:</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📧 emil.fawzi.music@gmail.com</p>
                    <p>📱 Responstid: 24-48 timer</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;