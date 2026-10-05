import Image from "next/image";
import { Instagram, Phone } from "lucide-react";

const trainers = [
  {
    name: "Jerzy Pacer",
    title: "Trener personalny",
    phone: "795 767 621",
    phoneHref: "tel:+48795767621",
    instagram: "https://www.instagram.com/jerzy_trener_/",
    image: "/images/instructors/jurek.png",
    alt: "Jerzy Pacer - trener personalny Powerhub",
    imagePosition: "center",
    imageScale: "scale-110 group-hover:scale-115",
    pricing: [
      { name: "Trening personalny", price: "100", desc: "" },
      { name: "Plan treningowy", price: "150", desc: "" },
      { name: "Trening personalny + plan treningowy", price: "200", desc: "" },
      { name: "Pakiet 10 treningów + karnet", price: "900", desc: "" },
      { name: "Pakiet 20 treningów + karnet", price: "1600", desc: "" },
    ],
  },
  {
    name: "Paweł Bajak",
    title: "Trener personalny",
    phone: "535 805 786",
    phoneHref: "tel:+48535805786",
    instagram: "https://www.instagram.com/trener_pawii/",
    image: "/images/instructors/pawel.jpg",
    alt: "Paweł Bajak - trener personalny Powerhub",
    imagePosition: "center 5%",
    imageScale: "scale-100 group-hover:scale-105",
    pricing: [
      { name: "Sesja treningowa", price: "110", desc: "" },
      { name: "Pakiet 5 treningów", price: "480", desc: "" },
      { name: "Pakiet 8 treningów", price: "740", desc: "" },
      { name: "Prowadzenie", price: "150", desc: "" },
      { name: "Sesja dla 2 osób", price: "170", desc: "" },
      { name: "Pakiet 5 treningów dla 2 osób", price: "800", desc: "" },
      { name: "Pakiet 8 treningów dla 2 osób", price: "1200", desc: "" },
      { name: "Plan", price: "80", desc: "" },
      { name: "Hybryda (trening+prowadzenie)", price: "do ustalenia", desc: "" },
    ],
  },
];

export function InstructorsSection() {
  return (
    <section id="trenerzy" className="py-24 md:py-32 bg-secondary/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
            Trenerzy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-foreground">
            Poznaj <span className="text-gradient">naszych trenerów</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Zadbamy o Twój progres, motywację i bezpieczeństwo treningu —
            niezależnie od poziomu doświadczenia.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {trainers.map((trainer) => (
            <article
              key={trainer.name}
              className="group rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 h-56 w-56 overflow-hidden rounded-full border-4 border-foreground/10 bg-background shadow-lg md:h-64 md:w-64">
                  <Image
                    src={trainer.image}
                    alt={trainer.alt}
                    fill
                    style={{ objectPosition: trainer.imagePosition }}
                    className={`object-cover transition-transform duration-500 ${trainer.imageScale}`}
                  />
                </div>

                <h3 className="font-serif text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
                  {trainer.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {trainer.title}
                </p>

                <div className="mt-6 flex w-full flex-col gap-3">
                  <a
                    href={trainer.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{trainer.phone}</span>
                  </a>

                  <a
                    href={trainer.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-semibold uppercase tracking-wider text-background transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </a>
                </div>

                {trainer.pricing && (
                  <div className="mt-6 w-full text-left">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Cennik</h4>
                    <ul className="space-y-2">
                      {trainer.pricing.map((p) => (
                        <li key={p.name} className="flex justify-between items-start">
                          <div>
                            <span className="font-medium">{p.name}</span>
                            {p.desc && <div className="text-xs text-muted-foreground">{p.desc}</div>}
                          </div>
                          <div className="font-serif text-lg font-black">{p.price}{p.price !== 'do ustalenia' ? ' zł' : ''}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
