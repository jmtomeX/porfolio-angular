const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const { PORT } = require('./config');
const path = require('path');

const app = express();
// transformar la peticiones POST a formato Json
app.use(bodyParser.json());
app.use(cors());

console.log(path.join(__dirname, 'client'));
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'client'), { redirect: false }));

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});

app.get('*', function(req, res, next) {
    res.sendFile(path.resolve('client/index.html'));

})
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
});