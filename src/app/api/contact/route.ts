import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name must be at least 2 characters' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    if (!subject || subject.trim().length < 3) {
      return NextResponse.json({ error: 'Subject must be at least 3 characters' }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'divyammishra2004@gmail.com',
      subject: `New Portfolio Inquiry - ${subject}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #050505; color: #ffffff; padding: 40px; border: 1px solid rgba(212,175,55,0.2);">
          <h2 style="color: #D4AF37; margin-bottom: 24px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 12px; font-weight: 500; letter-spacing: 1px;">NEW INQUIRY</h2>
          <p style="color: rgba(255,255,255,0.8); margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
          <p style="color: rgba(255,255,255,0.8); margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
          <p style="color: rgba(255,255,255,0.8); margin-bottom: 24px;"><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #0b0b0b; padding: 24px; border: 1px solid rgba(255,255,255,0.08);">
            <p style="color: rgba(255,255,255,0.9); line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    const visitorMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #050505; color: #ffffff; padding: 40px; border: 1px solid rgba(212,175,55,0.2);">
          <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin-bottom: 20px;">Hi ${name},</p>
          <p style="color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.8; margin-bottom: 16px;">
            Thank you for contacting me through my portfolio.
          </p>
          <p style="color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.8; margin-bottom: 16px;">
            I have received your message and will review it shortly. I typically respond within 24 hours.
          </p>
          <div style="margin-top: 40px; border-top: 1px solid rgba(212,175,55,0.2); padding-top: 24px;">
            <p style="color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 4px;">Best regards,</p>
            <p style="color: #D4AF37; font-size: 18px; font-weight: bold; margin: 0;">Divyam Mishra</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(visitorMailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
