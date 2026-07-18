// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, correo, asunto, mensaje } = await request.json();

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      // TODO: revertir a 'R&V Minerals <contacto@rvminerals.com>' una vez que el dominio
      // rvminerals.com esté verificado en el panel de Resend. Usando el dominio de
      // pruebas onboarding@resend.dev mientras tanto.
      from: 'R&V Minerals <onboarding@resend.dev>',
      to: 'administración@rvminerals.com',
      replyTo: correo,
      subject: asunto ? `[Web] ${asunto}` : `[Web] Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { error: 'No se pudo enviar el mensaje' },
      { status: 500 }
    );
  }
}
