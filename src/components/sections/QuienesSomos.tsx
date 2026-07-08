import Image from "next/image";
import { Eye, Gem, Target } from "lucide-react";
import quienesSomosImage from "../../../public/images/mining/quienes-somos.jpg";
import Reveal from "@/components/ui/Reveal";

const valores = ["Transparencia", "Compromiso", "Excelencia", "Responsabilidad", "Confianza"];

const pilares = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Conectar la producción minera con oportunidades sostenibles, generando valor para productores, clientes y socios estratégicos.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Consolidarnos como una empresa referente dentro de la industria minera, reconocida por su profesionalismo y excelencia.",
  },
  {
    icon: Gem,
    title: "Valores",
    description: null,
  },
];

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="grain-overlay bg-graphite text-paper">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
          <Reveal>
            <p className="eyebrow text-copper">
              Quiénes <span className="text-paper/70">Somos</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="section-title mt-4 max-w-lg text-paper">
              Solidez, experiencia y compromiso con la industria minera.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-paper/85 sm:text-lg">
              <p>
                R &amp; V Minerals SpA es una empresa chilena dedicada a conectar la producción
                minera con los mercados globales, participando activamente en el desarrollo,
                procesamiento y comercialización de recursos minerales.
              </p>
              <p>
                Nuestro equipo combina experiencia técnica y una red estratégica de alianzas para
                ofrecer soluciones confiables a productores, clientes y socios en toda la cadena de
                valor minera.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <Reveal key={pilar.title} delay={240 + index * 80}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/50 text-copper">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-paper">
                    {pilar.title}
                  </h3>
                  {pilar.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-paper/75">{pilar.description}</p>
                  ) : (
                    <ul className="mt-2 space-y-1 text-sm font-medium leading-relaxed text-paper/75">
                      {valores.map((valor) => (
                        <li key={valor}>{valor}</li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120} className="relative aspect-[8/5] w-full lg:self-center">
          <Image
            src={quienesSomosImage}
            alt="Trabajadores con casco y chaleco reflectante observando una planta de procesamiento minero al atardecer"
            fill
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
