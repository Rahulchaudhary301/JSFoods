const nodemailer = require("nodemailer");


const { config } = require('dotenv')

config({ path: "../config/config.env" })

const emailId = process.env.GMAIL_ID;
const password = process.env.PASSWORD;





const FormData = async (req, res) => {
    try {
        const {firstName, lastName,email,contactNumber,inquiry,companyName,message} = req.body;
         
        
        const transporter = nodemailer.createTransport({
           // host: 'smtp.ethereal.email',
            service:"gmail",
            auth: {
                user: emailId,
                pass: password
            }
        });



        const info = await transporter.sendMail({
            from: emailId,
            to: "rahulchaudhary301@gmail.com",
            subject: "Hello ✔",
           // text: Text,
           html: `<b>Hello Sir/Ma'am , this is Clients message 
           <h3>Name : ${firstName}  ${lastName} </h3>
           <h3>Contact Number : ${contactNumber}</h3>
           <h3>Email address : ${email}</h3>
           <h3>Company Name : ${companyName}</h3>
           <h3>Enquary : ${inquiry}</h3>
           <h3>Message : ${message}</h3>
           </b>`,
        });


        const inf = await transporter.sendMail({
            from: "rahulchaudhary9113@gmail.com",
            to: email,
            subject: "successfull submit JSfood ✔",
           // text: Text,
           html: `<b>Hello Sir/Ma'am ,  ${firstName}  ${lastName}
           <p> Thanks you sir/ma'am , your JS Foods form has been submitted successfully.. </p>
           <p> I will Contact You as soon as Possible... </p>
           </b>`,
        });


        res.status(201).send({ status: true, data: info.messageId });
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message });
    }
}


module.exports = { FormData }