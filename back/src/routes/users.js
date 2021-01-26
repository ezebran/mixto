const { Router } = require('express');
const router = Router();

//Controllers methods
const {singup, singin} = require("../controllers/users.controller"); 

router.route('/signup').post(singup);

router.route('/signin').post(singin);

module.exports = router;