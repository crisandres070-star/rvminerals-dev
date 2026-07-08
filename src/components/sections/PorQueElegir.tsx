import {
  Award,
  Layers,
  ShieldCheck,
  Network,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const razones = [
  {
    icon: Award,
    title: "Experiencia",
    description: "Trayectoria y conocimiento técnico de la industria minera chilena.",
  },
  {
    icon: Layers,
    title: "Soluciones Integrales",
    description: "Acompañamos toda la cadena, desde el desarrollo hasta la comercialización.",
  },
  {
    icon: ShieldCheck,
    title: "Compromiso y Transparencia",
    description: "Relaciones basadas en confianza y comunicación clara con cada socio.",
  },
  {
    icon: Network,
    title: "Red Estratégica",
    description: "Alianzas sólidas que amplían nuestra capacidad operativa y comercial.",
  },
  {
    icon: TrendingUp,
    title: "Visión de Largo Plazo",
    description: "Decisiones orientadas a un crecimiento sostenible y responsable.",
  },
  {
    icon: BadgeCheck,
    title: "Excelencia Operacional",
    description: "Procesos eficientes que aseguran calidad en cada etapa del negocio.",
  },
];

export default function PorQueElegir() {
  return (
    <section className="grain-overlay bg-ink-900 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-copper">
            ¿Por <span className="text-paper">Qué Elegir R &amp; V Minerals?</span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {razones.map((razon, index) => {
            const Icon = razon.icon;
            return (
              <Reveal
                key={razon.title}
                delay={index * 80}
                className="card-hover flex flex-col items-start rounded-lg border border-[rgba(181,101,45,0.2)] bg-ink-700 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/50 text-copper">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-paper">
                  {razon.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{razon.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
