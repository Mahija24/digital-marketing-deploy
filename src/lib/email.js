import nodemailer from "nodemailer"

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

/**
 * Send notification email to site owner when contact form is submitted
 */
export async function sendContactNotification(formData) {
  const { name, email, phone, company, message } = formData

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <h2>Message:</h2>
      <p>${message}</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}

/**
 * Send confirmation email to user when they submit the contact form
 */
export async function sendUserConfirmation(formData) {
  const { name, email } = formData

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Thank you for contacting us",
    html: `
      <h1>Thank You for Contacting Us</h1>
      <p>Hello ${name},</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to explore our website for more information about our services.</p>
      <p>Best regards,</p>
      <p>The Digital Marketing Team</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}

