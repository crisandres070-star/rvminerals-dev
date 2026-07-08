"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import alturasImage from "../../../public/images/mining/alturas.png";
import explotacionImage from "../../../public/images/mining/explotacion.png";
import carguioImage from "../../../public/images/mining/carguio.png";
import camionMineroImage from "../../../public/images/mining/camion-minero.png";
import plantaNocheImage from "../../../public/images/mining/planta-noche.png";
import puertoImage from "../../../public/images/mining/puerto.png";
import Reveal from "@/components/ui/Reveal";

const fotos = [
  {
    src: alturasImage,
    alt: "Vista aérea de un rajo minero a cielo abierto mostrando los bancos en espiral de la faena",
  },
  {
    src: explotacionImage,
    alt: "Excavadora en plena explotación minera junto a dos trabajadores con chaleco reflectante supervisando la faena",
  },
  {
    src: carguioImage,
    alt: "Cargío de camiones mineros con excavadora al amanecer, con la planta de procesamiento al fondo",
  },
  {
    src: camionMineroImage,
    alt: "Camión minero de gran tonelaje en tránsito por un camino de faena con equipos de apoyo detrás",
  },
  {
    src: plantaNocheImage,
    alt: "Vista aérea nocturna de una planta de procesamiento de minerales iluminada",
  },
  {
    src: puertoImage,
    alt: "Carga de mineral a granel en un buque desde las grúas de un puerto de embarque",
  },
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
