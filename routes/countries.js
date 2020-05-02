const express = require('express')
const router = express.Router()

const CountryController  = require('../controllers/countryController')

router.get('/', CountryController.getCountriesAndCities)
router.post('/cities', CountryController.getCitiesByCountry)
router.get('/codes', CountryController.getCountriesAndCodes)

router.get('/flag/images', CountryController.getCountriesFlagImages);
router.post('/flag/images', CountryController.getCountryFlagImage)

router.get('/positions', CountryController.getCountriesPosition)
router.post('/positions', CountryController.getSinglePosition)
router.post('/positions/range', CountryController.getPositionRange)

module.exports = router;
