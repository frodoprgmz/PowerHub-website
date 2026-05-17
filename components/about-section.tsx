import { Dumbbell, Clock, Users, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Clock,
    title: "Dostep 24/7",
    desc: "Trenuj kiedy chcesz - rano, w nocy, w weekend. Twoja silownia jest zawsze otwarta.",
  },
  {
    icon: Dumbbell,
    title: "Nowoczesny sprzet",
    desc: "Najnowsze maszyny i wolne ciezary od renomowanych producentow.",
  },
  {
    icon: Users,
    title: "Trenerzy personalni",
    desc: "Doswiadczeni trenerzy pomoga Ci osiagnac Twoje cele treningowe.",
  },
  {
    icon: Shield,
    title: "Bezpieczenstwo",
    desc: "Monitoring 24/7, system kontroli dostepu i klimatyzacja.",
  },
]

export function AboutSection() {
  return (
    <section id="o-nas" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
              O nas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6 text-balance text-foreground">
              Wiecej niz <span className="text-gradient">silownia</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              Powerhub to nowoczesna silownia lokalna stworzona z pasji do
              treningu. Oferujemy ponad 500 m2 przestrzeni treningowej wyposazonej
              w sprzet najwyzszej klasy. Naszym celem jest zapewnienie Ci
              najlepszych warunkow do osiagania Twoich celow - niezaleznie od
              poziomu zaawansowania.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
              Dzialamy 24 godziny na dobe, 7 dni w tygodniu, abys mogl trenowac
              wtedy, kiedy chcesz. Bez kolejek, bez ograniczen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-foreground rounded-xl flex-shrink-0 group-hover:bg-silver transition-colors duration-300">
                    <f.icon className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/gym-weights.jpg"
                    alt="Strefa wolnych ciezarow"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/gym-locker.jpg"
                    alt="Szatnie"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/gym-cardio.jpg"
                    alt="Strefa cardio"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/gym-functional.jpg"
                    alt="Strefa funkcjonalna"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-foreground p-6 rounded-2xl shadow-2xl">
              <span className="font-serif text-3xl font-black text-background block">
                5+
              </span>
              <span className="text-sm text-silver">
                Lat doswiadczenia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
