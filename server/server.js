require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message; 
    const mail = {
        from: name,
        to: process.env['USER_EMAIL'],
        subject: subject,
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
        res.json({ status: "ERROR" });
        } else {
        res.json({ status: "Message Sent" });
        }
    });
});

//port
let port = process.env.SERVER_PORT;
if(port == null || port == ""){
  port = 6000;
}
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});