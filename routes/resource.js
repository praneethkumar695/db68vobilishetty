var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var car_controller = require('../controllers/car');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// gas ROUTES ///
// POST request for creating a gas.
router.post('/resource/car', car_controller.car_create_post);
// DELETE request to delete gas.
router.delete('/resource/car/:id', car_controller.car_delete);
// PUT request to update gas.
router.put('/resource/car/:id', car_controller.car_update_put);
// GET request for one gas.
router.get('/resource/car/:id', car_controller.car_detail);
// GET request for list of all gas items.
router.get('/resource/car', car_controller.car_list);
module.exports = router;