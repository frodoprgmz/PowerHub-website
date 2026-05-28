import { ArrowDown, Clock, Dumbbell } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      <Image
        src="/images/gym-hero.jpg"
        alt="Wnetrze silowni Powerhub"
        fill
        className="object-cover opacity-30"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 md:pt-40 pb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-background/10 border border-background/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Clock className="h-4 w-4 text-background" />
            <span className="text-sm font-semibold text-background uppercase tracking-wider">
              Otwarte 24/7
            </span>
          </div>
        </div>

        <div className="mb-10">
          <Image
            src="/images/logo.png"
            alt="Powerhub Logo"
            width={700}
            height={252}
            className="h-36 md:h-48 lg:h-64 w-auto mx-auto object-contain invert"
            priority
          />
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-background/70 leading-relaxed mb-12 text-pretty">
            Siłownia stworzona z myślą o trójboju i sportach siłowych. Miejsce
            przyjazne dla zaawansowanych sportowców jak i osób początkujących.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#cennik"
            className="relative overflow-hidden bg-background text-foreground px-10 py-4 rounded-full text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-background/20 group"
          >
            <span className="relative z-10">Sprawdź cennik</span>
            <span className="absolute inset-0 bg-silver rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          <a
            href="#o-nas"
            className="border-2 border-background/30 text-background px-10 py-4 rounded-full text-base font-semibold uppercase tracking-wider hover:border-background hover:bg-background/10 transition-all duration-300 backdrop-blur-sm"
          >
            Dowiedz się więcej
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: Dumbbell,
              label: "100m+",
              desc: "Powierzchni treningowej",
            },
            { icon: Clock, label: "24/7", desc: "Dostęp non-stop" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 p-6 bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl"
            >
              <stat.icon className="h-5 w-5 text-silver mb-1" />
              <span className="font-serif text-3xl font-black text-background">
                {stat.label}
              </span>
              <span className="text-sm text-background/60">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#o-nas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Przewin w dol"
      >
        <ArrowDown className="h-6 w-6 text-background/60" />
      </a>
    </section>
  );
}
