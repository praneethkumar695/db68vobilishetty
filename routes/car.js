var express = require('express');
const car_controllers= require('../controllers/car');
var router = express.Router();
/* GET cars */
router.get('/', car_controllers.car_view_all_Page );
/* GET detail car page */
router.get('/detail', car_controllers.car_view_one_Page);
/* GET create car page */
router.get('/create', car_controllers.car_create_Page);
/* GET create update page */
router.get('/update', car_controllers.car_update_Page);
/* GET create car page */
router.get('/delete', car_controllers.car_delete_Page);

module.exports = router;