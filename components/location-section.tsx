import { MapPin, Navigation } from "lucide-react"

export function LocationSection() {
  return (
    <section id="lokalizacja" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
            Lokalizacja
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-foreground">
            Znajdz <span className="text-gradient">nas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[450px] border border-border rounded-2xl">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=20.95%2C52.22%2C21.05%2C52.26&layer=mapnik"
              className="w-full h-full border-0 grayscale contrast-110"
              title="Mapa z lokalizacja Powerhub"
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
                  ul. Treningowa 24
                  <br />
                  00-001 Warszawa
                  <br />
                  Dzielnica Srodmiescie
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="flex items-center justify-center w-12 h-12 bg-foreground rounded-xl flex-shrink-0 group-hover:bg-silver transition-colors duration-300">
                <Navigation className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold uppercase text-foreground mb-2">
                  Jak do nas dojechac
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Znajdujemy sie w samym centrum miasta. 2 min od stacji metra
                  Centrum. Parking podziemny dostepny dla czlonkow klubu (wjazd od
                  ul. Bocznej).
                </p>
              </div>
            </div>

            <div className="border border-border bg-card p-6 rounded-2xl">
              <h3 className="font-serif text-lg font-bold uppercase text-foreground mb-4">
                Godziny otwarcia
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="text-muted-foreground">Poniedzialek - Niedziela</span>
                <span className="text-foreground font-bold text-right">24/7</span>
                <span className="text-muted-foreground">Recepcja</span>
                <span className="text-foreground font-medium text-right">
                  8:00 - 22:00
                </span>
                <span className="text-muted-foreground">Trenerzy</span>
                <span className="text-foreground font-medium text-right">
                  6:00 - 22:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
