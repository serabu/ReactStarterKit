const Router = require('express')
const userController = require('../controller/user.controller')
const router = new Router()


router.post('/users', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/user?:id', userController.getOneUser)
router.post('/user', userController.updateUser)
router.delete('/user?:id', userController.deleteUser)


module.exports = router