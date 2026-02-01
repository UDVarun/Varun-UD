import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const finalSubject =
      subject?.trim() || "New inquiry from portfolio website";

    /* EMAIL TO YOU */
    await transporter.sendMail({
      from: `"Portfolio – Varun UD" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: finalSubject,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2 style="margin-bottom:12px">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${finalSubject}</p>
          <p style="margin-top:16px"><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    /* AUTO-REPLY */
    await transporter.sendMail({
      from: `"Varun UD" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <p>Hi ${name},</p>
          <p>
            Thanks for getting in touch! I’ve received your message and will
            review it shortly.
          </p>
          <p>
            I usually respond within <strong>24 hours</strong>.
          </p>
          <p>
            —<br/>
            <strong>Varun UD</strong><br/>
            Frontend Engineer<br/>
            Bangalore, India
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
