import nextConnect from 'next-connect';
import rateLimit from 'express-rate-limit';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const limiter = rateLimit({
  windowMs: 120 * 60 * 1000, 
  max: 2, 
  message: 'You have exceeded the 2 requests in 2 hours limit!', 
  headers: true,
});

const handler = nextConnect();

handler.use(limiter);

handler.post(async (req, res) => {
  const { email, name, message } = req.body;

  const content = {
    to: 'chalabi@chandrastation.com', 
    from: 'chalabi@chandrastation.com',
    subject: `Chandra Website Message - ${name} - Email: ${email}`,
    text: `From: ${email}\nName: ${name}\nMessage: ${message}`,
    html: `<p>From: ${email}<br>Name: ${name}<br>Message: ${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.error('ERROR', error);
    res.status(400).send('Message not sent.');
  }
});

export default handler;