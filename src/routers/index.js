const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const datos = {
        "nombre" : "Angel",
        "sitioweb" : "apirest.com"
    }
    res.json(datos);
});

module.exports = router;