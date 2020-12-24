const routerx = require('express-promise-router');
// const router = require('express').Router();
const userController = require ('../../controllers/UserController'); 
const auth = require('../../middlewares/auth')
const router = routerx();

//Estos metodos de abajo toca eliminarlos***
router.post('/login',userController.login);
// router.post('/register',userController.register);
// router.put('/update',auth.verifyUsuario ,userController.update);

//pruebas front se quita: ,auth.verifyUsuario


//api/usuario/list   [GET]
router.get('/list',auth.verificarAdministrador,userController.listar); //agregue list*****
//api/usuario/add    [POST]
router.post('/add',auth.verificarAdministrador, userController.add);
//api/usuario/update  [PUT]
router.put('/update' ,auth.verificarAdministrador, userController.update);
//api/usuario/activate [PUT]
router.put('/activate' ,auth.verificarAdministrador, userController.activate);
//api/usuario/deactivate  [PUT]
router.put('/deactivate' ,auth.verificarAdministrador ,userController.deactivate);







module.exports = router;