const routerx = require('express-promise-router');
// const router = require('express').Router();
const articuloController = require ('../../controllers/ArticuloController'); 
const auth = require('../../middlewares/auth');

//pruebas front se quita: ,auth.verifyUsuario


const router = routerx();
//api/articulo/list   [GET]
router.get('/list',articuloController.list); //agregue list*****
//api/articulo/add    [POST]
router.post('/add',auth.verificarVendedor,articuloController.add);
//api/articulo/update  [PUT]
router.put('/update',auth.verificarVendedor ,articuloController.update);
//api/articulo/activate [PUT]
router.put('/activate',auth.verificarVendedor,articuloController.activate);
//api/articulo/deactivate  [PUT]
router.put('/deactivate',auth.verificarVendedor,articuloController.deactivate);




module.exports = router;