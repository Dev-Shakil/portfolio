"use server"
import nodemailer from "nodemailer";

// Server action for sending email
export const sendContactEmail = async (formData) => {
//   const name = formData.get("name");
//   const subject = formData.get("subject");
//   const email = formData.get("email");
//   const text = formData.get("text");
const { name, subject, email, text } = formData;
console.log(formData)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: process.env.GMAIL,
      subject: `${subject} from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${text}</p>
      `,
    });

    console.log("Message sent successfully:", mail.messageId);
    return { status: "success", message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { status: "error", message: "Could not send the email" };
  }
};
