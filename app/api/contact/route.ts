import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const propertyAddress = formData.get("propertyAddress") as string;
        const serviceType = formData.get("serviceType") as string;
        const duration = formData.get("duration") as string;
        const message = formData.get("message") as string;
        const file = formData.get("file") as File | null;

        // Basic Validation
        if (!email || !firstName || !lastName || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // SMTP Configuration
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions: any = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER, // Sender address
            to: process.env.SMTP_TO, // List of receivers
            subject: `New Contact Request from ${firstName} ${lastName}`,
            html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Address:</strong> ${propertyAddress || "N/A"}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        // Handle File Attachment
        if (file && file.size > 0) {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            mailOptions.attachments = [
                {
                    filename: file.name,
                    content: buffer,
                },
            ];
        }

        // Verify connection configuration
        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        // Send Email
        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
