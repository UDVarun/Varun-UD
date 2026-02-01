import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) {
  await sgMail.send({
    to: process.env.CONTACT_EMAIL!,
    from: process.env.CONTACT_EMAIL!,
    subject: `[Portfolio] ${subject}`,
    text: `
Name: ${name}
Email: ${email}

${message}
    `,
  })
}
