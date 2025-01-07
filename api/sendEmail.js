import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await emailjs.send(
        process.env.VITE_APP_EMAILJS_SERVICE_ID,
        process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Mohit Joshi",
          from_email: email,
          to_email: "mohit.no.reply.2025@gmail.com",
          message: message,
        },
        process.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
