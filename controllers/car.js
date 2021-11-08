var Car = require('../models/car');
// List of all Gass
exports.car_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Car list');
};
// for a specific Gas.
exports.car_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
};
// Handle Gas create on POST.
exports.car_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.carName = req.body.carName;
    document.carType = req.body.carType;
    document.carCost = req.body.carCost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Gas delete form on DELETE.
exports.car_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};
// Handle Gas update form on PUT.
exports.car_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id);
};

// List of all Gass
exports.car_list = async function (req, res) {
    try {
        theCar = await Car.find();
        res.send(theCar);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function (req, res) {
    try {
        theCar = await Car.find();
        res.render('car', {
            title: 'Car Search Results',
            results: theCar
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};