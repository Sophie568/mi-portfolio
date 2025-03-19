const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3001;  // o 3001 si cambiaste el puerto

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'valenzuelasofia630@gmail.com', // Tu correo de Gmail
      pass: 'fvje hkvq zpvn ffrw'  // La contraseña de aplicación generada
    },
    tls: {
      rejectUnauthorized: false  // Desactiva la verificación del certificado SSL
    }
  });
  

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Datos recibidos:', { name, email, message });

  const mailOptions = {
    from: 'valenzuelasofia630@gmail.com',
    to: 'destinatario@example.com', 
    subject: `Mensaje de ${name} (${email})`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error al enviar el correo:', error);  // Imprime el error completo
        return res.status(500).json({ message: `Hubo un error al enviar el correo: ${error.message}` }); // Muestra el mensaje de error completo
    } else {
        console.log('Correo enviado:', info.response);
        return res.status(200).json({ message: 'Correo enviado con éxito.' });
    }
});

});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

  