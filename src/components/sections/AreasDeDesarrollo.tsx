import Image from "next/image";
import rocasImage from "../../../public/images/mining/rocas.png";
import zonaTrabajoImage from "../../../public/images/mining/zona-trabajo.png";
import camionCargaImage from "../../../public/images/mining/camion-carga.png";
import Reveal from "@/components/ui/Reveal";

const areas = [
  {
    number: "01",
    title: "Desarrollo y Explotación Minera",
    description:
      "Participamos en iniciativas orientadas al desarrollo, explotación y valorización de recursos minerales.",
    image: rocasImage,
    alt: "Detalle de estratos rocosos con vetas minerales en faena de explotación",
  },
  {
    number: "02",
    title: "Procesamiento y Valorización",
    description:
      "Contamos con capacidades de procesamiento mediante operaciones y alianzas estratégicas que permiten transformar minerales en productos de mayor valor comercial.",
    image: zonaTrabajoImage,
    alt: "Vista panorámica de la zona de trabajo en una faena minera a cielo abierto",
  },
  {
    number: "03",
    title: "Comercialización de Minerales",
    description:
      "Gestionamos operaciones comerciales eficientes y transparentes, fortaleciendo relaciones de largo plazo con clientes y proveedores.",
    image: camionCargaImage,
    alt: "Carguío de mineral en camión de gran tonelaje para su transporte y comercialización",
  },
];

export default function AreasDeDesarrollo() {
  return (
    <section id="areas-de-desarrollo" className="grain-overlay bg-ink-900 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-copper">
            Nuestras <span className="text-paper">Áreas de Desarrollo</span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal
              key={area.number}
              as="article"
              delay={index * 80}
              className="card-hover group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-lg border border-transparent"
            >
              <Image
                src={area.image}
                alt={area.alt}
                fill
                quality={88}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />

              <div className="relative z-10 p-6">
                <span className="font-display text-3xl font-extrabold text-copper">
                  {area.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase leading-tight tracking-tight text-paper">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.description}</p>
                <div className="mt-5 h-0.5 w-10 bg-copper" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
