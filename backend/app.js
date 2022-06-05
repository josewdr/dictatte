//Crear un servidor con Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
}); //end app.get

//Abre el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Server on port 3000');
}); //end app.listen

////////////////////////////////////////////////////////////////////////////////////////////