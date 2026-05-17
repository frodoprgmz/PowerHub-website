"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "O nas", href: "#o-nas" },
  { label: "Galeria", href: "#galeria" },
  { label: "Cennik", href: "#cennik" },
  { label: "Lokalizacja", href: "#lokalizacja" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Powerhub Logo"
            width={200}
            height={70}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-foreground hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+48123456789"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+48 123 456 789</span>
          </a>
          <a
            href="#cennik"
            className="relative overflow-hidden bg-foreground text-background px-7 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10 group"
          >
            <span className="relative z-10">Dolacz do nas</span>
            <span className="absolute inset-0 bg-silver rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={open ? "Zamknij menu" : "Otworz menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 text-muted-foreground font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>+48 123 456 789</span>
              </a>
              <a
                href="#cennik"
                onClick={() => setOpen(false)}
                className="bg-foreground text-background px-6 py-3 rounded-full text-center font-semibold uppercase tracking-wider"
              >
                Dolacz do nas
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
