const express = require('express');
const { getAllUsersInfo, createNewUser, updateUsersInfo } = require('../controller/userController');

//router setup
const router = express.Router();

//routes
router.get('/users', getAllUsersInfo);
router.post('/users', createNewUser);
router.put('/users/:id', updateUsersInfo);

module.exports = router;
