import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'Douane Transit Cameroun',
            to: email,
            subject: `Nouveau message de ${name}: ${subject}`,
            html: `
        <h1>Nouveau message de ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        return NextResponse.json(data);
    } catch (error: unknown) {
        return NextResponse.json({ error });
    }
}
