// pages/api/send-email.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, phone, country, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail",
      auth: {
        user: 'positivezonebusiness@gmail.com', // your email address
        pass: 'yqvo istp lqke mhjk', // your email password
      },
    });

    try {
      await transporter.sendMail({
        from: `${fullName}-${email} <no-reply@positivezone.com>`, // sender address
        to: "kharmaleakshay98@gmail.com", // list of receivers (replace with the actual recipient email)
        subject: "New Inquiry from Positive Zone Contact Form", // Subject line
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="background-color: #26B351; color: #fff; padding: 10px; text-align: center;">
              New Inquiry for Positive Zone for ${country} from ${fullName}.
            </h2>
            <div style="padding: 20px; border: 1px solid #0073e6; border-radius: 5px;">
              <p><strong>Full Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0073e6;">${email}</a></p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>Message:</strong></p>
              <p style="border-left: 4px solid #0073e6; padding-left: 10px; color: #555;">
                ${message}
              </p>
            </div>
            <p style="text-align: center; margin-top: 20px;">
              <em>This email was sent from the Positive Zone contact form.</em>
            </p>
          </div>
        `,
      });
      

      res.status(200).json({ message: "Email sent successfully!" });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
