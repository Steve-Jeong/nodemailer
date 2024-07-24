const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "nb1.160828@gmail.com",
    pass: "uhhl nlbh wbfh ilgu",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"my email note book1" <steve.john.cusack@gmail.com>', // sender address
    to: ["jst0930@naver.com", "jst0930@gmail.com", "steve.john.cusack@gmail.com"], // list of receivers
    subject: "Hello My Friend ✔", // Subject line
    text: "text Hello world?", // plain text body
    html: "<h1>Hello world?</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);