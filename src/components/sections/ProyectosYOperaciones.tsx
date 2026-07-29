"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import proyecto1 from "../../../public/images/mining/1.png";
import proyecto2 from "../../../public/images/mining/2.png";
import proyecto3 from "../../../public/images/mining/3.png";
import proyecto4 from "../../../public/images/mining/4.png";
import proyecto5 from "../../../public/images/mining/5.png";
import proyecto6 from "../../../public/images/mining/6.png";
import proyecto7 from "../../../public/images/mining/7.png";
import proyecto8 from "../../../public/images/mining/8.png";
import proyecto9 from "../../../public/images/mining/9.png";
import proyecto10 from "../../../public/images/mining/10.png";
import proyecto11 from "../../../public/images/mining/11.png";
import proyecto12 from "../../../public/images/mining/12.png";
import Reveal from "@/components/ui/Reveal";

// TODO: pedir al cliente una descripción real de cada foto para mejorar el alt (SEO/accesibilidad)
const fotos = [
  { src: proyecto1, alt: "Operación minera de R & V Minerals — foto 1" },
  { src: proyecto2, alt: "Operación minera de R & V Minerals — foto 2" },
  { src: proyecto3, alt: "Operación minera de R & V Minerals — foto 3" },
  { src: proyecto4, alt: "Operación minera de R & V Minerals — foto 4" },
  { src: proyecto5, alt: "Operación minera de R & V Minerals — foto 5" },
  { src: proyecto6, alt: "Operación minera de R & V Minerals — foto 6" },
  { src: proyecto7, alt: "Operación minera de R & V Minerals — foto 7" },
  { src: proyecto8, alt: "Operación minera de R & V Minerals — foto 8" },
  { src: proyecto9, alt: "Operación minera de R & V Minerals — foto 9" },
  { src: proyecto10, alt: "Operación minera de R & V Minerals — foto 10" },
  { src: proyecto11, alt: "Operación minera de R & V Minerals — foto 11" },
  { src: proyecto12, alt: "Operación minera de R & V Minerals — foto 12" },
];

export default function ProyectosYOperaciones() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section id="proyectos-y-operaciones" className="grain-overlay bg-ink-900 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="section-title text-paper">Proyectos y Operaciones</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-copper" />
        </Reveal>

        <div
          ref={scrollerRef}
          className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {fotos.map((foto, index) => (
            <Reveal
              key={index}
              delay={index * 80}
              className="card-hover relative h-64 w-80 shrink-0 snap-start overflow-hidden rounded-lg border border-transparent sm:h-72 sm:w-96"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                quality={88}
                sizes="384px"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Ver fotos anteriores"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-copper hover:text-copper"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Ver fotos siguientes"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-copper hover:text-copper"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-copper hover:text-copper"
          >
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}
