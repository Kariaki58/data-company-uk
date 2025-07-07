import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();
    console.log(resend)
    console.log({
        name, email, company, message
    })
    
    const { data, error } = await resend.emails.send({
        from: 'Sekel Hive <onboarding@sekelhive.com>', // Using your verified domain
        replyTo: email, // So you can reply directly to the submitter
        to: ['contact@sekelhive.com'], 
        subject: 'Message From Sekelhive Website',
        html: `
            <h1>Message From Sekelhive Website</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p> <!-- Preserve line breaks -->
        `,
    });

    if (error) {
        console.log(error)
      return NextResponse.json({ error: "something went wrong" }, { status: 400 });
    }
    console.log("sent!!")

    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error)
    return NextResponse.json({ error }, { status: 500 });
  }
}