import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9afd43b4e9f593",
    pass: "41d01440f224cc"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData){    
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Kaio Murillo <kaio.murillo@yahoo.com.br>',
      subject,
      html: body,
    })
  }
}