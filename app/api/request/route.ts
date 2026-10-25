import { Resend } from "resend";
import { isLocale, type Locale } from "@/lib/i18n";

export const runtime = "nodejs";

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const localeRaw = clean(body.locale, 8);
  if (!isLocale(localeRaw)) {
    return Response.json({ error: "invalid_locale" }, { status: 400 });
  }
  const locale: Locale = localeRaw;
  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const prefer = clean(body.prefer, 16) || "either";
  const timing = clean(body.timing, 120);
  const topic = clean(body.topic, 80);

  if (!name || !email || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "post@aaquistpsychology.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Aaquist <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Aaquist] Appointment request — ${name}`,
    text: [
      "New appointment request (website form)",
      `Language: ${locale}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Preferred contact: ${prefer}`,
      `Preferred timing: ${timing || "—"}`,
      `Topic: ${topic || "—"}`,
      "",
      "Note: form is designed not to collect health details.",
    ].join("\n"),
  });

  if (error) {
    console.error(error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
