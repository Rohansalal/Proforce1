"use server"

import nodemailer from "nodemailer"

// Define the shape of our response
type ActionResponse = {
  success: boolean
  message: string
}

export async function sendContactEmail(formData: FormData): Promise<ActionResponse> {
  // 1. Extract Data from Form
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const address = formData.get("address") as string
  const serviceType = formData.get("serviceType") as string
  const duration = formData.get("duration") as string
  const message = formData.get("message") as string

  // 2. Simple Validation
  if (!email || !firstName || !lastName || !phone) {
    return { success: false, message: "Please fill in all required fields." }
  }

  // 3. Configure SMTP Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // 4. Send the Email
    await transporter.sendMail({
      from: `"ProForce Website" <${process.env.SMTP_USER}>`, // Valid sender address
      to: "info@proforce1protection.com", // Where you want to receive leads
      replyTo: email, // Allows you to hit "Reply" and email the client directly
      subject: `New Security Inquiry: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #b91c1c; border-bottom: 2px solid #b91c1c; padding-bottom: 10px;">
            New Client Request
          </h2>
          
          <h3>Client Details</h3>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Property Address:</strong> ${address || "Not provided"}</li>
          </ul>

          <h3>Service Requirements</h3>
          <ul>
            <li><strong>Service Type:</strong> ${serviceType}</li>
            <li><strong>Duration:</strong> ${duration}</li>
          </ul>

          <h3>Message</h3>
          <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #b91c1c; font-style: italic;">
            "${message}"
          </div>
          
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">This email was sent from the ProForce 1 Protection Services website contact form.</p>
        </div>
      `,
    })

    return { success: true, message: "Request sent successfully!" }
  } catch (error) {
    console.error("SMTP Transmission Error:", error)
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}