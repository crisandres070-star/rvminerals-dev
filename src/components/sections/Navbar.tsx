"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/nav-links";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "#inicio");
  const suppressUntil = useRef(0);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < suppressUntil.current) return;

        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
        );

        setActiveHref(`#${topMost.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleLinkClick(href: string) {
    setActiveHref(href);
    suppressUntil.current = Date.now() + 700;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-900/95 backdrop-blur">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="shrink-0">
          <Logo />
        </div>

        <ul className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`whitespace-nowrap text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeHref === link.href
                    ? "border-b-2 border-copper pb-1 text-paper"
                    : "text-muted hover:text-paper"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center xl:flex">
          <a
            href="#contacto"
            className="eyebrow flex items-center gap-2 rounded border border-copper px-4 py-2 text-[11px] text-copper transition-colors hover:bg-copper hover:text-ink-900"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded p-2 text-paper xl:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/5 bg-ink-900 xl:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    handleLinkClick(link.href);
                    setOpen(false);
                  }}
                  className={`block rounded px-2 py-3 text-sm font-medium uppercase tracking-wide ${
                    activeHref === link.href
                      ? "text-copper"
                      : "text-muted hover:text-paper"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="eyebrow flex w-full items-center justify-center gap-2 rounded border border-copper px-4 py-3 text-[11px] text-copper"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
