require('dotenv').config();
const nodemailer = require('nodemailer');
import emailDto from "utils/EmailSenderDto.js"

const dto = emailDto
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendEmail(dto){
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: dto.to,
        subject: dto.subject,
        text: dto.text,
        html: dto.html,
        attachments: dto.attachment ? [dto.attachment] : [],
    };
    return transporter.sendMail(mailOptions);
}
export default { sendEmail};

