import { Check } from "lucide-react";

const plans = [
  {
    name: "Podstawowy",
    price: "89",
    period: "/mies.",
    desc: "Idealny na początek Twojej przygody z treningiem",
    features: [
      "Dostęp do siłowni 24/7",
      "Strefa wolnych ciężarów",
      "Strefa cardio",
      "Szatnia z prysznicami",
      "Aplikacja mobilna",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "139",
    period: "/mies.",
    desc: "Najpopularniejszy wybór wśród naszych członków",
    features: [
      "Wszystko z planu Podstawowy",
      "Zajęcia grupowe (bez limitu)",
      "Strefa funkcjonalna",
      "Sauna i strefa relaksu",
      "1 sesja z trenerem / mies.",
      "Plan treningowy",
    ],
    popular: true,
  },
  {
    name: "VIP",
    price: "199",
    period: "/mies.",
    desc: "Maksimum możliwości i indywidualne podejście",
    features: [
      "Wszystko z planu Premium",
      "4 sesje z trenerem / mies.",
      "Indywidualny plan dietetyczny",
      "Priorytetowy dostęp",
      "Suplementacja BCAA",
      "Ręcznik i szafka prywatna",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="cennik" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
            Cennik
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-foreground">
            Wybierz swój <span className="text-gradient">plan</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            Bez umów długoterminowych. Możesz zrezygnować w dowolnym momencie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-foreground bg-foreground text-background shadow-2xl shadow-foreground/10 scale-105"
                  : "border-border bg-card hover:border-silver hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-silver text-foreground text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full">
                    Najpopularniejszy
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`font-serif text-xl font-bold uppercase mb-2 ${plan.popular ? "text-background" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}
                >
                  {plan.desc}
                </p>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span
                  className={`font-serif text-5xl font-black ${plan.popular ? "text-background" : "text-foreground"}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xl ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}
                >
                  {" "}
                  zl
                </span>
                <span
                  className={
                    plan.popular
                      ? "text-background/70"
                      : "text-muted-foreground"
                  }
                >
                  {plan.period}
                </span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={`flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 mt-0.5 ${plan.popular ? "bg-silver" : "bg-foreground"}`}
                    >
                      <Check
                        className={`h-3 w-3 ${plan.popular ? "text-foreground" : "text-background"}`}
                      />
                    </div>
                    <span
                      className={`text-sm ${plan.popular ? "text-background/90" : "text-secondary-foreground"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`relative overflow-hidden block text-center py-4 font-semibold uppercase tracking-wider text-sm transition-all group rounded-full ${
                  plan.popular
                    ? "bg-background text-foreground hover:shadow-lg"
                    : "bg-foreground text-background"
                }`}
              >
                <span className="relative z-10">Wybierz plan</span>
                <span className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 bg-silver rounded-full" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Pierwszy trening gratis! Przyjdź i sprawdź nas bez zobowiązań.
          </p>
        </div>
      </div>
    </section>
  );
}
