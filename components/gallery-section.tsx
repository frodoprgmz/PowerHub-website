"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/images/gym-hero.jpg", alt: "Glowna sala treningowa" },
  { src: "/images/gym-weights.jpg", alt: "Strefa wolnych ciezarow" },
  { src: "/images/gym-cardio.jpg", alt: "Strefa cardio" },
  { src: "/images/gym-functional.jpg", alt: "Strefa funkcjonalna" },
  { src: "/images/gym-class.jpg", alt: "Zajecia grupowe" },
  { src: "/images/gym-locker.jpg", alt: "Szatnie i prysznice" },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null))
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % images.length : null))

  return (
    <section id="galeria" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-4 block">
            Galeria
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-balance text-foreground">
            Zobacz nasz <span className="text-gradient">klub</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-center justify-center rounded-2xl">
                <span className="text-background text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/98 backdrop-blur-xl flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Podglad zdjecia"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background hover:text-silver transition-colors z-10 p-2 rounded-full hover:bg-background/10"
            aria-label="Zamknij"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 text-background hover:text-silver transition-colors z-10 p-2 rounded-full hover:bg-background/10"
            aria-label="Poprzednie zdjecie"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-8 text-background hover:text-silver transition-colors z-10 p-2 rounded-full hover:bg-background/10"
            aria-label="Nastepne zdjecie"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video mx-8 rounded-2xl overflow-hidden">
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              quality={95}
            />
          </div>
          <div className="absolute bottom-6 text-center w-full">
            <p className="text-silver text-sm">
              {images[lightbox].alt} &middot; {lightbox + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
