import { info } from "console";
import "dotenv/config";
import nodemailer from "nodemailer";
import { inflateSync } from "zlib";

const mailFunction = () => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: "elijahkimani1293@gmail.com",
        subject: "Sending sample email",
        text: "Testing of nodemailer email"
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Mail sent: ${info.response}`);
        }
    });
};

export default mailFunction;