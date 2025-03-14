/**
 * API route handler for consultation requests
 */

import { saveConsultationToDatabase } from "../../lib/database";
import { sendContactNotification, sendUserConfirmation } from "../../lib/email";


export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      serviceInterest,
      budget,
      timeline,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !serviceInterest) {
      return res
        .status(400)
        .json({ message: "Name, email, and service interest are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Save consultation request to database
    await saveConsultationToDatabase({
      name,
      email,
      phone: phone || "",
      company: company || "",
      serviceInterest,
      budget: budget || "",
      timeline: timeline || "",
      message: message || "",
    });

    // Send notification email
    await sendContactNotification({
      name,
      email,
      phone,
      company,
      serviceInterest,
      budget,
      timeline,
      message,
    });
    

    // Send confirmation email to the user
    await sendUserConfirmation({
      name,
      email,
    });
    

    // Return success response
    return res
      .status(200)
      .json({ message: "Consultation request submitted successfully" });
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
