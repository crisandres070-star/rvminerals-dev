import Image from "next/image";
import { ShieldCheck, Leaf, ScrollText, Handshake } from "lucide-react";
import seguridadImage from "../../../public/images/mining/seguridad.png";
import Reveal from "@/components/ui/Reveal";

const pilares = [
  {
    icon: ShieldCheck,
    title: "Seguridad Operacional",
    description: "La seguridad es el valor más importante en cada una de nuestras acciones.",
  },
  {
    icon: Leaf,
    title: "Gestión Responsable",
    description: "Comprometidos con el medio ambiente y las comunidades.",
  },
  {
    icon: ScrollText,
    title: "Cumplimiento Normativo",
    description: "Operamos bajo los más altos estándares y normativas vigentes.",
  },
  {
    icon: Handshake,
    title: "Relaciones de Largo Plazo",
    description: "Construimos confianza y valor compartido con nuestros socios estratégicos.",
  },
];

export default function SeguridadYResponsabilidad() {
  return (
    <section
      id="seguridad-y-responsabilidad"
      className="grain-overlay relative overflow-hidden bg-black py-20 lg:py-28"
    >
      <Image
        src={seguridadImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <p className="eyebrow text-copper">Seguridad &amp; Responsabilidad</p>
            <h2 className="section-title mt-4 text-paper">
              SEGURIDAD Y RESPONSABILIDAD
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <Reveal key={pilar.title} delay={80 + index * 80} className="flex flex-col items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/50 text-copper">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-paper">
                    {pilar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pilar.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
