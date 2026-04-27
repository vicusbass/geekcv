import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const FROM = 'vicusbass.com contact <contact@vicusbass.com>';
const TO = 'vasile.pop@gmail.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  body?: unknown;
  company?: unknown;
};

const str = (v: unknown) => (typeof v === 'string' ? v : '');

export const POST: APIRoute = async ({ request }) => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json({ ok: false, error: 'validation' }, 400);
  }

  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'validation' }, 400);
  }

  // Honeypot: silently accept and discard.
  if (str(payload.company).trim() !== '') {
    return json({ ok: true });
  }

  const name = str(payload.name).trim();
  const email = str(payload.email).trim();
  const subject = str(payload.subject).trim();
  const body = str(payload.body);

  if (
    name.length === 0 ||
    name.length > 120 ||
    email.length === 0 ||
    email.length > 254 ||
    !EMAIL_RE.test(email) ||
    subject.length > 200 ||
    body.trim().length === 0 ||
    body.length > 5000
  ) {
    return json({ ok: false, error: 'validation' }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return json({ ok: false, error: 'send_failed' }, 500);
  }

  const resend = new Resend(apiKey);
  const finalSubject = subject || `new message from ${name}`;
  const text = `From: ${name} <${email}>\n\n${body}`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: finalSubject,
    text,
  });

  if (error) {
    console.error('Resend error:', error);
    return json({ ok: false, error: 'send_failed' }, 502);
  }

  return json({ ok: true });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
