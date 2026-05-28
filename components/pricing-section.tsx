"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const memberships = [
  {
    name: "Jednorazowy",
    price: "20",
    desc: "Dostęp na jeden dzień",
  },
  {
    name: "Miesięczny",
    price: "100",
    desc: "Dostęp przez cały miesiąc",
  },
];

const personalTraining = [
  {
    name: "Trening personalny",
    price: "100",
    desc: "Jedna sesja treningowa z trenerem",
  },
  {
    name: "Plan treningowy",
    price: "150",
    desc: "Indywidualny plan dostosowany do Twoich celów",
  },
  {
    name: "Trening personalny + plan treningowy",
    price: "200",
    desc: "Sesja treningowa + plan na miesiąc",
  },
  {
    name: "Pakiet 10 treningów + karnet",
    price: "900",
    desc: "10 sesji z trenerem + roczny karnet",
  },
  {
    name: "Pakiet 20 treningów + karnet",
    price: "1600",
    desc: "20 sesji z trenerem + roczny karnet",
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
            Elastyczne opcje dostosowane do Twoich potrzeb.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="karnety" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="karnety">Karnety</TabsTrigger>
              <TabsTrigger value="treningi">Treningi Personalne</TabsTrigger>
            </TabsList>

            <TabsContent value="karnety" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {memberships.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex flex-col border border-border bg-card p-8 rounded-2xl hover:border-silver hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <h3 className="font-serif text-xl font-bold uppercase text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.desc}
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="font-serif text-5xl font-black text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-xl text-muted-foreground"> zł</span>
                    </div>
                    <a
                      href="#kontakt"
                      className="relative overflow-hidden block text-center py-3 font-semibold uppercase tracking-wider text-sm bg-foreground text-background rounded-full transition-all group hover:shadow-lg"
                    >
                      <span className="relative z-10">Wybierz plan</span>
                      <span className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 bg-silver rounded-full" />
                    </a>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="treningi" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                {personalTraining.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex flex-col border border-border bg-card p-8 rounded-2xl hover:border-silver hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <h3 className="font-serif text-lg font-bold uppercase text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.desc}
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="font-serif text-5xl font-black text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-xl text-muted-foreground"> zł</span>
                    </div>
                    <a
                      href="#kontakt"
                      className="relative overflow-hidden block text-center py-3 font-semibold uppercase tracking-wider text-sm bg-foreground text-background rounded-full transition-all group hover:shadow-lg mt-auto"
                    >
                      <span className="relative z-10">Wybierz plan</span>
                      <span className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 bg-silver rounded-full" />
                    </a>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
