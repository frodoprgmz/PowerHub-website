import { Dumbbell } from "lucide-react"
import Image from "next/image"

export function CtaBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-foreground">
      <Image
        src="/images/gym-class.jpg"
        alt="Zajecia na silowni"
        fill
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-full bg-background/10">
            <Dumbbell className="h-10 w-10 text-silver" />
          </div>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-background mb-6">
          Pierwszy trening <span className="text-silver">gratis</span>
        </h2>
        <p className="text-background/70 text-lg max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Nie czekaj. Przyjdz, przetestuj nasz sprzet i atmosfere. Bez
          zobowiazan, bez presji. Po prostu trenuj.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+48123456789"
            className="relative overflow-hidden bg-background text-foreground px-10 py-4 rounded-full text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-background/20 group"
          >
            <span className="relative z-10">Zadzwon teraz</span>
            <span className="absolute inset-0 bg-silver rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          <a
            href="#cennik"
            className="border-2 border-background/30 text-background px-10 py-4 rounded-full text-base font-semibold uppercase tracking-wider hover:border-background hover:bg-background/10 transition-all duration-300"
          >
            Sprawdz oferte
          </a>
        </div>
      </div>
    </section>
  )
}
