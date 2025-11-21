export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Usa las env de Astro (ya lee .env por ti)
const apiKey = import.meta.env.RESEND_API_KEY;
const mailTo = import.meta.env.MAIL_TO;
const mailFrom = import.meta.env.MAIL_FROM;

const resend = new Resend(apiKey);

// Validador simple de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Faltan campos obligatorios' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email no válido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error } = await resend.emails.send({
      from: mailFrom,
      to: mailTo,
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `.trim(),
    });

    if (error) {
      console.error('Error de Resend:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'Error al enviar el email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Formulario enviado correctamente' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Error en /api/contact:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
