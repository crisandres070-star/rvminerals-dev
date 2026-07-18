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

    const { data, error } = await resend.emails.send({
      from: 'R&V Minerals <administracion@rvminerals.com>',
      to: 'administracion@rvminerals.com',
      replyTo: correo,
      subject: asunto ? `[Web] ${asunto}` : `[Web] Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message || 'No se pudo enviar el mensaje' },
        { status: 422 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { error: 'No se pudo enviar el mensaje' },
      { status: 500 }
    );
  }
}
