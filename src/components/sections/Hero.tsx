import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import heroImage from "../../../public/images/mining/imagen-principal.png";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grain-overlay relative flex min-h-[92vh] items-center overflow-hidden bg-ink-900"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Camión minero de gran tonelaje en faena de extracción al atardecer"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="animate-ken-burns object-cover object-[78%_62%]"
        />
      </div>
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_0%_100%,rgba(10,15,20,0.75),transparent_65%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-32 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-5 text-copper">
              R &amp; V <span className="text-paper">MINERALS SpA</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-shadow-hero text-stroke-hero font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              Conectando
              <br />
              la producción minera
              <br />
              con los <span className="text-[#B85A2E]">mercados globales</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero-glass mt-6 inline-block max-w-xl text-base text-gray-100 sm:text-lg">
              Soluciones para la industria minera con compromiso, transparencia y eficiencia.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 h-1 w-16 bg-copper" />

            <p className="hero-glass eyebrow mt-6 inline-block text-gray-100">
              Desarrollo Minero <span className="mx-2 text-copper">|</span> Procesamiento{" "}
              <span className="mx-2 text-copper">|</span> Comercialización
            </p>

            <a
              href="#quienes-somos"
              className="btn-primary mt-10 inline-flex items-center gap-2 rounded bg-copper px-7 py-4 text-sm font-semibold uppercase tracking-wide text-ink-900 hover:bg-copper-light"
            >
              Conocer empresa
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 right-4 z-10 rounded-lg border border-white/10 bg-ink-900/70 p-5 backdrop-blur-sm sm:bottom-10 sm:right-8 sm:p-6">
        <ul className="space-y-3 text-sm text-paper">
          <li className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-copper/50 text-copper">
              <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <a href="tel:+56989126993" className="hover:text-copper">
              +56 9 8912 6993
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-copper/50 text-copper">
              <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <a href="mailto:administración@rvminerals.com" className="hover:text-copper">
              administración@rvminerals.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
