var Car = require('../models/car');
// List of all cars
exports.car_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Car list');
};
// for a specific Car.
exports.car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Car.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Car create on POST.
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
// Handle Car delete form on DELETE.
exports.car_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};
// Handle Car update form on PUT.
exports.car_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Car.findById( req.params.id)
 // Do updates of properties
 if(req.body.carName)
 toUpdate.carName = req.body.carName;
 if(req.body.carType) toUpdate.carType = req.body.carType;
 if(req.body.carCost) toUpdate.carCost = req.body.carCost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// List of all Cars
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