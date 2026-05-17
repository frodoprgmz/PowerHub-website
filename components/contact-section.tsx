import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
            Kontakt
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-foreground">
            Skontaktuj <span className="text-gradient">się</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            Masz pytania? Zadzwoń lub napisz - chętnie pomożemy!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="tel:+48123456789"
            className="group flex flex-col items-center gap-4 p-8 border border-border bg-card rounded-2xl hover:border-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-foreground rounded-2xl group-hover:bg-silver transition-colors duration-300">
              <Phone className="h-7 w-7 text-background" />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg font-bold uppercase text-foreground mb-1">
                Telefon
              </h3>
              <p className="text-foreground font-bold text-lg">
                +48 123 456 789
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Pon - Nd: 8:00 - 22:00
              </p>
            </div>
          </a>

          <a
            href="mailto:kontakt@powerhub.pl"
            className="group flex flex-col items-center gap-4 p-8 border border-border bg-card rounded-2xl hover:border-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-foreground rounded-2xl group-hover:bg-silver transition-colors duration-300">
              <Mail className="h-7 w-7 text-background" />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg font-bold uppercase text-foreground mb-1">
                Email
              </h3>
              <p className="text-foreground font-bold">kontakt@powerhub.pl</p>
              <p className="text-sm text-muted-foreground mt-1">
                Odpowiadamy w 24h
              </p>
            </div>
          </a>

          <div className="group flex flex-col items-center gap-4 p-8 border border-border bg-card rounded-2xl hover:border-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 bg-foreground rounded-2xl group-hover:bg-silver transition-colors duration-300">
              <MapPin className="h-7 w-7 text-background" />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg font-bold uppercase text-foreground mb-1">
                Adres
              </h3>
              <p className="text-secondary-foreground font-medium">
                ul. Treningowa 24
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                00-001 Warszawa
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-card border border-border rounded-full hover:border-foreground hover:bg-foreground group transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-background transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-card border border-border rounded-full hover:border-foreground hover:bg-foreground group transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-background transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
