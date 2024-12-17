const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const messageQueue = [];

app.use(bodyParser.json());

app.post('/consume', (req, res) => {
    const { message } = req.body;
    messageQueue.push(message);
    res.json({ status: 'Mensaje recibido', message });
});

app.get('/messages', (req, res) => {
    res.json({ messages: messageQueue });
});

app.listen(port, () => {
    console.log(`Consumidor ejecutándose en http://localhost:${port}`);
});