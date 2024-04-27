const Emailvalid = require("./../model/EmailSchema");
const nodemailer = require("nodemailer");

exports.postdata = async (req, res) => {
  const { username, email } = req.body;
  try {
    const preuser = await Emailvalid.findOne({ email: email });

    if (preuser) {
      res.status(404).json({ message: "the user is already exits" });
    } else {
      const newuser = new Emailvalid({
        username: username,
        email: email,
      });
      await newuser.save();
      res.status(200).json(newuser);
    }
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

exports.getemail = async (req, res) => {
  try {
    const finduser = await Emailvalid.find({});
    res.status(200).json(finduser);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

exports.sendmail = async (req, res) => {
  const { email } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: process.env.GMAIL,
      to: email,
      subject: "sending Email with react and node js",
      html: `<h1>congratulation you send email successfully</h1>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("email-sent", +info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(401).json(error);
    console.log(error);
  }
};
