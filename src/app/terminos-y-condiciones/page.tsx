import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y Condiciones | R & V Minerals SpA",
  description:
    "Términos y condiciones de uso del sitio web de R & V Minerals SpA.",
};

const sections = [
  {
    title: "1. Aceptación de los términos",
    body: `Al acceder y utilizar el sitio web de R & V Minerals SpA ("el Sitio"), usted acepta cumplir con los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le solicitamos no utilizar el Sitio.`,
  },
  {
    title: "2. Objeto del Sitio",
    body: `Este Sitio tiene un carácter informativo y corporativo. Su propósito es dar a conocer las actividades, proyectos y capacidades de R & V Minerals SpA dentro de la industria minera. El contenido publicado no constituye una oferta comercial vinculante ni garantiza la disponibilidad de productos, servicios o proyectos específicos.`,
  },
  {
    title: "3. Propiedad intelectual",
    body: `Todos los contenidos del Sitio —incluyendo textos, imágenes, logotipos, gráficos y diseño— son propiedad de R & V Minerals SpA o se utilizan bajo la debida licencia, y están protegidos por la legislación chilena de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización previa y por escrito.`,
  },
  {
    title: "4. Uso del formulario de contacto",
    body: `Al enviar información a través del formulario de contacto, usted declara que los datos proporcionados son verídicos y autoriza a R & V Minerals SpA a utilizarlos exclusivamente para dar respuesta a su consulta, conforme a lo señalado en nuestra Política de Privacidad.`,
  },
  {
    title: "5. Limitación de responsabilidad",
    body: `R & V Minerals SpA no garantiza que el Sitio esté libre de errores o interrupciones. La empresa no se hace responsable por daños derivados del uso o la imposibilidad de uso del Sitio, ni por la exactitud de información proporcionada por terceros enlazada desde este.`,
  },
  {
    title: "6. Modificaciones",
    body: `R & V Minerals SpA se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigencia desde su publicación en el Sitio.`,
  },
  {
    title: "7. Legislación aplicable",
    body: `Estos Términos y Condiciones se rigen por las leyes de la República de Chile. Cualquier controversia derivada de su interpretación o aplicación será sometida a los tribunales competentes de Chile.`,
  },
  {
    title: "8. Contacto",
    body: `Para consultas sobre estos Términos y Condiciones, puede escribir a administración@rvminerals.com.`,
  },
];

export default function TerminosYCondicionesPage() {
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
          Términos y Condiciones
        </h1>
        <p className="eyebrow mt-4 text-copper">Última actualización: [17-07-2026]</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-copper sm:text-2xl">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-200">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
