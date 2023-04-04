import nodemailer from "nodemailer";

const email = "opts.tours@gmail.com";
const pass = "ridyvwookamucjob";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email, 
  to: 'opts.tours@gmail.com',
};

 
const handler = async (req, res) => {
  if(req.method == "POST"){
    transporter.sendMail({
      ...mailOptions,
      text: "Бронь тура",
      subject: "Бронь тура",
      html: `<h1>Бронь тура</h1> <p><strong>Название тура:</strong> ${req.body.title_of_tour}</p> <p><strong>Имя:</strong> ${req.body.name}</p> <p><strong>Email:</strong>${req.body.email}</p> <p><strong>Phone:</strong>${req.body?.phone}</p>`
  }).then(response => {
    if(response.accepted){
      return res.status(200).json({ success: true });
    } else {
      return res.status(404).json({ success: false, eror: res.rejected});
    }
  })
  }
4};
  export default handler;
  