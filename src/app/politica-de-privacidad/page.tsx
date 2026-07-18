import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | R & V Minerals SpA",
  description:
    "Política de privacidad y tratamiento de datos personales del sitio web de R & V Minerals SpA.",
};

const sections = [
  {
    title: "1. Responsable del tratamiento de datos",
    body: `R & V Minerals SpA, con domicilio en La Serena, Chile, es responsable del tratamiento de los datos personales recopilados a través de este sitio web. Para consultas relacionadas con esta política, puede escribir a administración@rvminerals.com.`,
  },
  {
    title: "2. Datos que recopilamos",
    body: `A través del formulario de contacto de este Sitio, recopilamos únicamente los datos que usted proporciona voluntariamente: nombre, correo electrónico, asunto y el contenido de su mensaje. No recopilamos datos sensibles ni información financiera a través de este formulario.`,
  },
  {
    title: "3. Finalidad del tratamiento",
    body: `Los datos proporcionados se utilizan exclusivamente para:\n- Responder a las consultas enviadas a través del formulario de contacto.\n- Dar seguimiento a solicitudes comerciales o informativas relacionadas con R & V Minerals SpA.\nNo utilizamos estos datos con fines publicitarios ni los compartimos con terceros, salvo obligación legal.`,
  },
  {
    title: "4. Conservación de los datos",
    body: `Los datos recopilados se conservan únicamente durante el tiempo necesario para dar respuesta a la consulta realizada, salvo que exista una relación comercial posterior que requiera un tratamiento adicional, en cuyo caso se informará oportunamente.`,
  },
  {
    title: "5. Derechos del usuario",
    body: `Usted puede solicitar en cualquier momento el acceso, rectificación o eliminación de los datos personales que nos haya proporcionado, escribiendo a administración@rvminerals.com.`,
  },
  {
    title: "6. Seguridad de la información",
    body: `R & V Minerals SpA adopta medidas razonables para proteger los datos personales recopilados contra accesos no autorizados, pérdida o uso indebido.`,
  },
  {
    title: "7. Cookies y tecnologías similares",
    body: `Este Sitio no utiliza cookies de seguimiento con fines publicitarios. Si en el futuro se incorporan herramientas de analítica o cookies funcionales, esta política será actualizada para reflejarlo.`,
  },
  {
    title: "8. Cambios a esta política",
    body: `R & V Minerals SpA podrá modificar esta Política de Privacidad en cualquier momento. Los cambios entrarán en vigencia desde su publicación en el Sitio.`,
  },
  {
    title: "9. Legislación aplicable",
    body: `Esta Política se rige por la Ley N° 19.628 sobre Protección de la Vida Privada de Chile y demás normativa aplicable.`,
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="grain-overlay min-h-screen bg-ink-900">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-copper"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          Volver al inicio
        </Link>

        <h1 className="font-display mt-8 text-4xl font-extrabold uppercase tracking-tight text-paper sm:text-5xl">
          Política de Privacidad
        </h1>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-copper sm:text-2xl">
                {section.title}
              </h2>
              <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-gray-200">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
