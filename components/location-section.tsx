import { MapPin, Navigation } from "lucide-react";

export function LocationSection() {
  return (
    <section id="lokalizacja" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
            Lokalizacja
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-foreground">
            Znajdź <span className="text-gradient">nas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[450px] border border-border rounded-2xl">
            <iframe
              src="https://www.google.com/maps?q=Skomielna+Biała+888&output=embed"
              className="w-full h-full border-0 grayscale contrast-110"
              title="Mapa z lokalizacją Skomielna Biała 888"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="flex gap-4 items-start group">
              <div className="flex items-center justify-center w-12 h-12 bg-foreground rounded-xl flex-shrink-0 group-hover:bg-silver transition-colors duration-300">
                <MapPin className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold uppercase text-foreground mb-2">
                  Adres
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Skomielna Biała 888
                  <br />
                  32-434
                  <br />
                  Małopolskie
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="flex items-center justify-center w-12 h-12 bg-foreground rounded-xl flex-shrink-0 group-hover:bg-silver transition-colors duration-300">
                <Navigation className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold uppercase text-foreground mb-2">
                  Jak do nas dojechać
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kliknij przycisk poniżej, by otworzyć trasę w aplikacji Google
                  Maps i szybko zaplanować dojazd na Skomielna Biała 888.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Skomielna+Biała+888"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center mt-4 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-slate-900"
                >
                  Otwórz trasę w Google Maps
                </a>
              </div>
            </div>

            <div className="border border-border bg-card p-6 rounded-2xl">
              <h3 className="font-serif text-lg font-bold uppercase text-foreground mb-4">
                Godziny otwarcia
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="text-muted-foreground">
                  Poniedziałek - Niedziela
                </span>
                <span className="text-foreground font-bold text-right">
                  24/7
                </span>
                <span className="text-muted-foreground">Trenerzy dostępni</span>
                <span className="text-foreground font-medium text-right">
                  8:00 - 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
