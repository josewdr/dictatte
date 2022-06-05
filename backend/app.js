//Buscan un arvhico .dev y si existe utiliza el puerto indicado ahí, si no existe utiliza el puerto 3000

require('dotenv').config()

//Crear un servidor con Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World desde .evn');
}); //end app.get

//Referenciar el puerto a una vaiable de entorno PORT
const PORT = process.env.PORT;

//Iniciar el servidor
//Abre el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log('Server on port' + PORT);
}); //end app.listen