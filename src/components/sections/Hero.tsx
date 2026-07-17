import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
            <p className="text-shadow-hero mt-6 max-w-xl text-base text-gray-100 sm:text-lg">
              Soluciones para la industria minera con compromiso, transparencia y eficiencia.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 h-1 w-16 bg-copper" />

            <div className="text-shadow-hero eyebrow mt-6 flex flex-col items-start gap-3 text-gray-100 sm:flex-row sm:items-center sm:gap-0">
              <span className="inline-block border-b-2 border-copper/70 pb-1.5 sm:border-0 sm:pb-0">
                Desarrollo Minero
              </span>
              <span className="hidden text-copper sm:mx-2 sm:inline">|</span>
              <span className="inline-block border-b-2 border-copper/70 pb-1.5 sm:border-0 sm:pb-0">
                Procesamiento
              </span>
              <span className="hidden text-copper sm:mx-2 sm:inline">|</span>
              <span>Comercialización</span>
            </div>

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
    </section>
  );
}
