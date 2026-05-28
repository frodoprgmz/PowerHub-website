import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Powerhub Logo"
                width={320}
                height={110}
                className="h-20 md:h-24 w-auto object-contain invert"
              />
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Siłownia stworzona z myślą o trójboju i sportach siłowych. Miejsce
              przyjazne dla zaawansowanych sportowców jak i osób początkujących.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold uppercase tracking-wider text-background mb-4">
              Szybkie linki
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "O nas", href: "#o-nas" },
                { label: "Galeria", href: "#galeria" },
                { label: "Cennik", href: "#cennik" },
                { label: "Lokalizacja", href: "#lokalizacja" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-silver transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif font-bold uppercase tracking-wider text-background mb-4">
              Godziny otwarcia
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-background/60">Siłownia</span>
                <span className="text-silver font-bold">24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-background/60">Trenerzy dostępni</span>
                <span className="text-background">8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; 2026 Powerhub. Wszelkie prawa zastrzezone.
          </p>
          <p className="text-xs text-background/40">
            Skomielna Biała 888, 32-434
          </p>
        </div>
      </div>
    </footer>
  );
}
