import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    console.log("📩 Sending emails...");

    // Configure Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === "true", // Convert string to boolean
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // ✅ Email to the user (confirmation)
    let userMailOptions = {
      from: process.env.EMAIL_FROM, // Sender email
      to: formData.email, // User's email
      subject: "Thank You for Consulting Us!",
      text: `Hello ${formData.name},\n\nThank you for reaching out! We received your message:\n\n"${formData.message}"\n\nOur team will contact you soon.\n\nBest regards,\nYour Company`,
    };

    // ✅ Email to the owner (admin notification)
    let ownerMailOptions = {
      from: process.env.EMAIL_FROM, // Sender email (your email)
      to: process.env.EMAIL_FROM, // Owner's email from `.env`
      subject: "New Consultation Request",
      text: `You have received a new consultation request from:\n\n
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || "N/A"}
      Company: ${formData.company || "N/A"}
      
      Message:
      ${formData.message}
      
      Please follow up accordingly.`,
    };

    // Send both emails in parallel
    let [userEmailResult, ownerEmailResult] = await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(ownerMailOptions),
    ]);

    console.log("✅ User Email Sent:", userEmailResult.messageId);
    console.log("✅ Owner Email Sent:", ownerEmailResult.messageId);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });

  } catch (error) {
    console.error("❌ Email sending failed:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
