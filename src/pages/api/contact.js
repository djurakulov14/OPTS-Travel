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

const CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
    message: "Message",
  };

const generateEmailContent = (data) => {
     const stringData = Object.entries(data).reduce(
      (str, [key, val]) =>
        (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
      ""
    );
}

const handler = async (req, res) => {
        transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(req.body),
            subject: "qwerty" ,
            html: `<h1>Связь</h1> <p><strong>Имя:</strong> ${req.body.name}</p> <p><strong>Email:</strong>${req.body.email}</p> <p><strong>Phone:</strong>${req.body?.phone}</p> <p><strong>Message:</strong>${req.body.massage}</p>`
        })
        return res.status(200).json({ success: true });
  };
  export default handler;
  