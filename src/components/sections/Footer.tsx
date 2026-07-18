import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import SouthAmericaMap from "@/components/ui/SouthAmericaMap";
import ContactForm from "@/components/sections/ContactForm";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer id="contacto" className="grain-overlay border-t border-white/5 bg-ink-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-2 sm:items-center lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Conectando la producción minera con los mercados globales, con compromiso,
              transparencia y eficiencia.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn de R & V Minerals"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-copper hover:text-copper"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram de R & V Minerals"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-copper hover:text-copper"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:administración@rvminerals.com"
                aria-label="Enviar correo a R & V Minerals"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-copper hover:text-copper"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-copper">Contáctanos</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-copper" strokeWidth={1.5} aria-hidden="true" />
                <a href="tel:+56989126993" className="hover:text-paper">
                  +56 9 8912 6993
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-copper" strokeWidth={1.5} aria-hidden="true" />
                <a href="mailto:administración@rvminerals.com" className="hover:text-paper">
                  administración@rvminerals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-copper" strokeWidth={1.5} aria-hidden="true" />
                <span>La Serena, Chile</span>
              </li>
            </ul>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <SouthAmericaMap />
          </div>

          <div>
            <h3 className="eyebrow text-copper">Envíanos un mensaje</h3>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row">
          <p>© 2026 R &amp; V Minerals SpA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidad" className="hover:text-paper">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-paper">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
