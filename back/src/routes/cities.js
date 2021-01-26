const { Router } = require('express');
const router = Router();
const { getCities, createCity, getCity, updateCity, deletetCity } = require('../controllers/cities.controller')


router.route('/')
    .get(getCities)
    .post(createCity);

router.route('/:id')
    .get(getCity)
    .put(updateCity)
    .delete(deletetCity);

module.exports = router;