import nodemailer from "nodemailer";

class EmailService {
  static async sendLoginNotification(to, userName) {
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"URL Shortener App" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Login Notification",
      text: `Hello ${userName},\n\nYou have successfully logged in.\n\nIf this wasn't you, reset your password immediately.`,
    };

    await transporter.sendMail(mailOptions);
  }
}

export default EmailService;