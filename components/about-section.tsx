import { Dumbbell, Clock, Users, Shield } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Clock,
    title: "Dostęp 24/7",
    desc: "Trenuj kiedy chcesz - rano, w nocy, w weekend. Twoja siłownia jest zawsze otwarta.",
  },
  {
    icon: Dumbbell,
    title: "Nowoczesny sprzęt",
    desc: "Najnowsze maszyny i wolne ciężary od renomowanych producentów.",
  },
  {
    icon: Users,
    title: "Trenerzy personalni",
    desc: "Doświadczeni trenerzy pomogą Ci osiągnąć Twoje cele treningowe.",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    desc: "Monitoring 24/7, system kontroli dostępu.",
  },
];

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
              Więcej niż <span className="text-gradient">siłownia</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              Powerhub to siłownia stworzona z myślą o trójboju i sportach siłowych. Miejsce, które
              jest przyjazne zarówno dla początkujących jak i zaawansowanych sportowców.
              Tworzymy społeczność pasjonatów, którzy wspierają się nawzajem w osiąganiu swoich celów.
              Chcemy zarażać pasją do treningu i zdrowego stylu życia, oferując jednocześnie profesjonalne warunki do rozwoju.

            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
              Działamy 24 godziny na dobę, 7 dni w tygodniu, abyś mógł trenować
              wtedy, kiedy chcesz. Bez kolejek, bez ograniczeń.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-foreground rounded-xl flex-shrink-0 group-hover:bg-silver transition-colors duration-300">
                    <f.icon className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {f.title}
                    </h3>
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
           
          </div>
        </div>
      </div>
    </section>
  );
}
