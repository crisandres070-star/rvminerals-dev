import {
  HardHat,
  Microscope,
  Pickaxe,
  Truck,
  Calculator,
  LineChart,
  Rocket,
  GraduationCap,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const areas = [
  { icon: HardHat, title: "Ingeniería de Minas" },
  { icon: Microscope, title: "Geología y Muestreo" },
  { icon: Pickaxe, title: "Operaciones Mineras" },
  { icon: Truck, title: "Logística y Transporte" },
  { icon: Calculator, title: "Administración y Finanzas" },
  { icon: LineChart, title: "Gestión Comercial" },
  { icon: Rocket, title: "Desarrollo de Negocios" },
];

export default function NuestroEquipo() {
  return (
    <section id="equipo" className="grain-overlay relative overflow-hidden bg-graphite py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px w-full border-t-2 border-dotted border-copper/30"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-copper">
            Nuestro <span className="text-paper/70">Equipo</span>
          </p>
          <h2 className="section-title mt-4 max-w-2xl text-paper">EQUIPO</h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/85 sm:text-lg">
            En R &amp; V Minerals contamos con un equipo multidisciplinario orientado a entregar
            soluciones eficientes y confiables para la industria minera.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal
                key={area.title}
                delay={160 + index * 80}
                className="card-hover flex flex-col items-center gap-3 rounded-lg border border-[rgba(181,101,45,0.2)] bg-ink-700 px-4 py-6 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/50 text-copper">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold uppercase leading-tight tracking-wide text-paper">
                  {area.title}
                </h3>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160 + areas.length * 80} className="mt-14">
          <div className="flex items-start gap-4 rounded-lg border-l-4 border-copper bg-copper/10 p-6">
            <GraduationCap
              className="h-6 w-6 shrink-0 text-copper"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="text-sm font-medium leading-relaxed text-paper sm:text-base">
              Asimismo, promovemos oportunidades para estudiantes en práctica y jóvenes
              profesionales interesados en desarrollarse dentro de la industria minera.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
