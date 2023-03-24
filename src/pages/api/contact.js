import nodemailer from "nodemailer";

const email = "sarik.j2445@gmail.com";
const pass = "qnrarjxnhxlrvuvl";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};


const handler = async (req, res) => {
        transporter.sendMail({
            ...mailOptions,
            subject: "Связь" ,
            html: `<h1>Связь</h1> <p><strong>Имя:</strong> ${req.body.name}</p> <p><strong>Email:</strong>${req.body.email}</p> <p><strong>Phone:</strong>${req.body?.phone}</p> <p><strong>Message:</strong>${req.body.massage}</p>`
        }).then(response => {
          if(response.accepted){
            return res.status(200).json({ success: true });
          } else {
            return res.status(404).json({ success: false, eror: res.rejected});
          }
        })
  };
  export default handler;
  