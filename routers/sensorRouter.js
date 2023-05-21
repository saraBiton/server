const express= require('express')

const router=express.Router();

const sensorControllers = require('../controllers/sensorController');
//startPoint = localhost:8000/sensors

//Get by id
router.route('/:id').get((req, res) => {
    const id = req.params.id;
    const sensor = sensorControllers.getById(id)
    res.json(sensor);
})


//Get All
router.route('/').get( (req, res) => {
    console.log(000)
    const sensors = sensorControllers.initSensors();
    res.json(sensors);
    console.log(sensors);
    // res.json(result).status(200);
})

//Add sensor
router.route('/').post( (req, res) => {
    const result = sensorControllers.initSensors()
    res.json(result);
})

// //Edit sensor
router.route('/').put(async(req, res) => {
    const result = await sensorControllers.updateContent();
    res.json(result);
});

// //Delete sensor
router.route('/:id').delete((req, res) => {
    const id = req.params.id;
    const sensors = sensorControllers.Deletesensor(id)
    res.json(sensors);
})



module.exports = router;