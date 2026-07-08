import { Compass, Pickaxe, Cog, Truck, Globe2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AnimatedDashLine from "@/components/ui/AnimatedDashLine";

const etapas = [
  {
    icon: Compass,
    title: "Desarrollo",
    description: "Identificación y evaluación de oportunidades.",
  },
  {
    icon: Pickaxe,
    title: "Explotación",
    description: "Extracción responsable de recursos minerales.",
  },
  {
    icon: Cog,
    title: "Procesamiento",
    description: "Transformación y valorización de minerales.",
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Transporte seguro y eficiente a nivel nacional.",
  },
  {
    icon: Globe2,
    title: "Comercialización",
    description: "Conectamos con los mercados globales.",
  },
];

export default function CadenaDeValor() {
  return (
    <section className="grain-overlay bg-ink-900 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-copper">
            Nuestra <span className="text-paper">Cadena de Valor Minera</span>
          </p>
        </Reveal>

        <div className="relative mt-16">
          <AnimatedDashLine />

          <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
            {etapas.map((etapa, index) => {
              const Icon = etapa.icon;
              return (
                <Reveal
                  key={etapa.title}
                  as="li"
                  delay={index * 80}
                  className="relative flex gap-4 lg:flex-col lg:gap-0"
                >
                  {index < etapas.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-12 z-0 border-l-2 border-dashed border-copper/30 lg:hidden"
                      style={{ bottom: "-2.5rem" }}
                    />
                  )}

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-copper bg-ink-900 text-copper">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <div className="lg:mt-6">
                    <h3 className="flex items-baseline gap-2 font-display text-lg font-bold uppercase tracking-tight text-paper">
                      <span className="text-copper">0{index + 1}</span>
                      {etapa.title}
                    </h3>
                    <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">
                      {etapa.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
