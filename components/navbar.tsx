"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "O nas", href: "#o-nas" },
  { label: "Galeria", href: "#galeria" },
  { label: "Cennik", href: "#cennik" },
  { label: "Lokalizacja", href: "#lokalizacja" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // whether menu wrapper is rendered
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Toggle menu: show wrapper then animate via transform
  const toggleMenu = () => {
    const el = menuRef.current;
    if (!open) {
      // open
      setShow(true);
      // wait for element to mount
      requestAnimationFrame(() => {
        const now = menuRef.current;
        if (!now) return;
        now.style.transformOrigin = "top";
        now.style.transition = "transform 300ms ease, opacity 220ms ease";
        now.style.transform = "scaleY(1)";
        now.style.opacity = "1";
        now.style.pointerEvents = "auto";
      });
      setOpen(true);
    } else {
      // close
      const now = menuRef.current;
      if (!now) {
        setOpen(false);
        setShow(false);
        return;
      }
      // animate to collapsed
      now.style.transition = "transform 300ms ease, opacity 220ms ease";
      now.style.transformOrigin = "top";
      now.style.transform = "scaleY(0)";
      now.style.opacity = "0";
      now.style.pointerEvents = "none";
      setOpen(false);
    }
  };

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    const onEnd = (e: any) => {
      if (e.target !== el) return;
      if (e.propertyName !== "transform") return;
      if (!open) {
        // after closing remove from DOM
        setShow(false);
      } else {
        // ensure fully expanded state
        el.style.transform = "scaleY(1)";
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
      }
    };

    el.addEventListener("transitionend", onEnd as EventListener);
    return () =>
      el.removeEventListener("transitionend", onEnd as EventListener);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b-0 lg:border-b lg:border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center group h-20 md:h-24 overflow-visible"
        >
          <Image
            src="/images/logo.png"
            alt="Powerhub Logo"
            width={300}
            height={90}
            className="h-full w-auto object-contain scale-[1.15]"
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
            <span className="relative z-10">Dołącz do nas</span>
            <span className="absolute inset-0 bg-silver rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {show && (
        <div
          className={`lg:hidden absolute top-full left-0 right-0 ${open ? "bg-background/98 backdrop-blur-xl border-t border-border" : "bg-transparent border-transparent"} overflow-hidden`}
          aria-hidden={!open}
        >
          <div
            ref={menuRef}
            style={{
              transform: "scaleY(0)",
              opacity: 0,
              transformOrigin: "top",
              transition: "transform 300ms ease, opacity 220ms ease",
              overflow: "hidden",
            }}
            className="flex flex-col px-6 py-6 gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  // close menu when link clicked
                  toggleMenu();
                }}
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
                onClick={() => toggleMenu()}
                className="bg-foreground text-background px-6 py-3 rounded-full text-center font-semibold uppercase tracking-wider"
              >
                Dołącz do nas
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
