// const express = require('express')

// const router = express.Router();

// const sensorController = require('../controllers/sensorController');
// //startPoint = localhost:8000/sensors

// //Get by id
// router.route('/:id').get((req, res) => {
//     const id = req.params.id;
//     const sensor = sensorController.getSensorById(id)
//     res.json(sensor);
// })


// //Get All
// router.route('/').get((req, res) => {
//     console.log(000)
//     const sensors = sensorController.getAllSensors();
//     res.json(sensors);
//     console.log(sensors);
// })

// //Add sensor
// router.route('/').post((req, res) => {
//     const result = sensorController.addSensor()
//     res.json(result);
// })

// // //Update sensor
// router.route('/').put(async (req, res) => {
//     const result = await sensorController.updateSensor();
//     res.json(result);
// });

// // //Delete sensor
// router.route('/:id').delete((req, res) => {
//     const id = req.params.id;
//     const sensors = sensorController.deleteSensor(id)
//     res.json(sensors);
// })



// module.exports = router;