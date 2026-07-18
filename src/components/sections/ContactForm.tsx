"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nombre: formData.get("nombre"),
      correo: formData.get("correo"),
      asunto: formData.get("asunto"),
      mensaje: formData.get("mensaje"),
    };

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-xs uppercase tracking-wide text-muted">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full min-h-11 rounded border border-white/15 bg-ink-700 px-3 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:border-copper"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="correo" className="mb-1 block text-xs uppercase tracking-wide text-muted">
          Correo electrónico
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          className="w-full min-h-11 rounded border border-white/15 bg-ink-700 px-3 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:border-copper"
          placeholder="tucorreo@ejemplo.com"
        />
      </div>

      <div>
        <label htmlFor="asunto" className="mb-1 block text-xs uppercase tracking-wide text-muted">
          Asunto
        </label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          className="w-full min-h-11 rounded border border-white/15 bg-ink-700 px-3 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:border-copper"
          placeholder="Asunto de tu mensaje"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1 block text-xs uppercase tracking-wide text-muted">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="w-full resize-none rounded border border-white/15 bg-ink-700 px-3 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:border-copper"
          placeholder="Escribe tu mensaje"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary inline-flex items-center gap-2 rounded bg-copper px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper hover:bg-copper-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? (
          <>
            Enviando
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden="true" />
          </>
        ) : (
          <>
            Enviar mensaje
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </>
        )}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm text-copper">
          Gracias por tu mensaje, te contactaremos a la brevedad.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          No pudimos enviar tu mensaje. Intenta nuevamente o escríbenos directo a administración@rvminerals.com.
        </p>
      )}
    </form>
  );
}
