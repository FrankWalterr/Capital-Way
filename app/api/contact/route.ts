import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatorios em falta." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY nao configurada." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@capitalway.co.mz",
      subject: "Nova mensagem do website / New message from website",
      replyTo: email,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
