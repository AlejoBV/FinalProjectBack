const routerx = require('express-promise-router');
const categoriaController = require ('../../controllers/CategoriaController'); 
const { verificarAlmacenero } = require('../../middlewares/auth');
const auth = require('../../middlewares/auth');
const router = routerx();


//pruebas front se quita: ,auth.verifyUsuario


//api/categoria/list   [GET]
router.get('/list', categoriaController.list);
//api/categoria/add    [POST]
router.post('/add',auth.verificarAlmacenero, categoriaController.add);
//api/categoria/update  [PUT]
router.put('/update' ,auth.verificarAlmacenero, categoriaController.update);
//api/categoria/activate [PUT]
router.put('/activate',auth.verificarAlmacenero , categoriaController.activate);
//api/categoria/deactivate  [PUT]
router.put('/deactivate' ,auth.verificarAlmacenero,categoriaController.deactivate);




module.exports = router;