import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, recaptchaToken } = await req.json();

    // 🛡️ Validate reCAPTCHA (optional, recommended)
    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      return NextResponse.json({ message: "reCAPTCHA failed" }, { status: 400 });
    }

    // ✨ Sanitize input
    const cleanName = name.replace(/[^a-zA-Z ]/g, "");
    const cleanEmail = email.replace(/[^a-zA-Z0-9@._-]/g, "");
    const cleanPhone = phone.replace(/[^0-9+-]/g, "");
    const cleanMessage = message.replace(/<[^>]*>/g, ""); // Remove HTML tags

    // 📩 Send email to site owner
    await resend.emails.send({
      from: "noreply@pauljrphotography.com", // Must be a verified domain
      to: "info@pauljrphotography.com",
      subject: "New Contact Form Submission",
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\nMessage: ${cleanMessage}`,
      reply_to: cleanEmail, // 📩 Allows direct reply to sender
    });

    // 📩 Auto-reply to user
    await resend.emails.send({
      from: "noreply@pauljrphotography.com",
      to: cleanEmail,
      subject: "Thank you for contacting us!",
      text: `Hi ${cleanName},\n\nThanks for reaching out! We've received your message and will get back to you soon.\n\nBest,\nPaul Jr. Photography Team`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
