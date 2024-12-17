const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/produce', (req, res) => {
    const { message } = req.body;

    axios.post('http://<IP_DEL_CONSUMIDOR>:4000/consume', { message })
        .then(response => {
            res.json({ response: `Mensaje procesado: ${message}` });
        })
        .catch(error => {
            res.status(500).json({ status: 'Error al enviar mensaje', error: error.message });
        });
});

app.listen(port, () => {
    console.log(`Productor ejecutándose en http://localhost:${port}`);
});