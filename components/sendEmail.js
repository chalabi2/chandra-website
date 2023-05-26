import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function(req, res) {
  const { email, name, message } = req.body;

  const content = {
    to: 'chalabi@chandrastation.com', 
    from: email,
    subject: `New Message From - ${name}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}