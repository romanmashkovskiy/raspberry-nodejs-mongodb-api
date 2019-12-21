import nodemailer from 'nodemailer';
import env from '../config/env';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: env.EMAIL_FROM,
        pass: env.EMAIL_PASSWORD
    }
});

export default async (to, subject, text) => {
    const mailOptions = {
        from: env.EMAIL_FROM,
        to,
        subject,
        text
    };

    try {
        await transporter.sendMail(mailOptions);

    } catch (error) {
        console.error(error);
    }
};

