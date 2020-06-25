const {Router} = require('express');
const _ = require('underscore');
const router = Router();
const movies = require('../ejemplo.json');

//metodo GET -> se utiliza para mostrar o realizar una consulta
router.get('/', (req, res) =>{
    res.json(movies);
});

//Metodo POST -> se utiliza para agregar algun registro o dato
router.post('/', (req, res) => {
    const {titulo, director, anio, raiting} = req.body;
    if (titulo && director && anio && raiting) {
        const id = movies.length + 1;
        const newPeli = {...req.body, id};
        movies.push(newPeli);
        res.json(movies);
    } else {
        res.status('500').json({error : "Ocurrio un error"});
    }
});

//Metodo DELETE -> se utiliza para eliminar algun registro
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if(movie.id == id ){
            movies.splice(i, 1); 
        }
    });
    res.json(movies);
});

//Metodo PUT -> se utiliza para actualizar algun registro 
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {titulo,director, anio, raiting} = req.body;
    if(titulo && director && anio && raiting ){
        _.each(movies,(movie, i) => {
            if(movie.id == id){
                movie.titulo = titulo;
                movie.director = director;
                movie.anio = anio;
                movie.raiting = raiting;
            } else {
                res.status(500).json({error: 'La pelicual a actualizar no existe'});
            }
            res.json(movies);
        });
    } else {
        res.status(500).json({error :'Ocurrio un erro al actualizar el registro'});
    }
});

//Se utiliza para exportar los metodos y que estos los puedan utilizar otras clases u objetos 
module.exports = router;