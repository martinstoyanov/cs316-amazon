var express = require('express');
var router = express.Router();

const UserCtrl = require('../controllers/user-ctrl')

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)
router.post('/login', UserCtrl.loginUser)

module.exports = router;
