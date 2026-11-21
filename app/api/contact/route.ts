import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Strict Server-side Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Validation error: Name is required." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Validation error: A valid email address is required." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json(
        { error: "Validation error: Subject is required." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        { error: "Validation error: Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "shailendra.patidar.dev@gmail.com";

    // If a production email provider key is configured, send the real email
    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          }),
        });

        if (!resendResponse.ok) {
          const errData = await resendResponse.json();
          console.error("Resend API delivery failure:", errData);
          return NextResponse.json(
            { error: "Failed to dispatch email via provider. Please write to shailendra.patidar.dev@gmail.com directly." },
            { status: 502 }
          );
        }

        return NextResponse.json({
          message: "Your message has been delivered directly to Shailendra's inbox.",
        });
      } catch (err) {
        console.error("Email service error:", err);
        return NextResponse.json(
          { error: "Email delivery system temporarily unavailable." },
          { status: 500 }
        );
      }
    }

    // Unconfigured environment: Log safely on server and inform user transparently
    console.log("=== Contact Inquiry Received ===");
    console.log(`From: ${name} (${email})`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("================================");

    return NextResponse.json({
      message:
        "Message received and securely logged! (Configure RESEND_API_KEY in .env.local to enable real-time SMTP forwarding).",
    });
  } catch (err) {
    console.error("Contact API handler error:", err);
    return NextResponse.json(
      { error: "Internal server error processing contact dispatch." },
      { status: 500 }
    );
  }
}
