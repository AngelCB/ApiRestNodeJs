// Constantes que exportar las librerias a utilizar
const express = require('express');
const morgan = require('morgan');
const app = express();

//rutas que se utilizan para llamar a los servicios 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(require('./routers/index.js'));
app.use('/api/movies',require('./routers/movies'))

//Se utiliza para abrir conexion al servidor 
app.listen(app.get('port'), () => {
    console.log('Escuchando server', app.get('port'));
});