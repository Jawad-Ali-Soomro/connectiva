import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, organization, subject, message } = body;

    // Create Gmail transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS // Gmail App password
      }
    });

    // 1️⃣ Send to you
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "umair.ahmed.cs@gmail.com",
      subject: `Received Message From Connectiva: ${subject}`,
      text: `
        Message Received from: ${firstName} ${lastName}
        Email: ${email}
        Organization: ${organization}
        Message:
        ${message}
      `
    });

    // 2️⃣ Send confirmation to user
    await transporter.sendMail({
      from: `"Connectiva Support" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message!",
      text: `
        Hi ${firstName},

        Thank you for reaching out to Connectiva! 
        We’ve received your message and will get back to you as soon as possible.

        Your message:
        ${message}

        Best regards,
        Connectiva Support Team
      `
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email" }),
      { status: 500 }
    );
  }
}
