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
        text: "Бронь тура",
        subject: "Бронь тура",
        html: `<h1>Бронь тура</h1> <p><strong>Имя:</strong> ${req.body.name}</p> <p><strong>Email:</strong>${req.body.email}</p> <p><strong>Phone:</strong>${req.body?.phone}</p>`
    }).then(response => {
      if(response.accepted){
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json({ success: false, eror: res.rejected});
      }
    })
4};
  export default handler;
  