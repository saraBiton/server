//localhost:8000/users/
const express = require('express');
const userControllers = require('../controllers/userController');
const router = express.Router();

router.route('/').get(async (req, res) => {
    const result = await userControllers.getAllUsers();
    res.json(result);
});

router.route('/:password').get(async (req, res) => {
    console.log(req.params.password);
    const result = await userControllers.getUserById(req.params.password);
    res.json(result);
});

router.route('/').post(async (req, res) => {
    const obj = req.body;
    const result = await userControllers.addUser(obj);
    console.log(result)
    res.json(result);
});

router.route('/:id').put(async (req, res) => {
    const obj = req.body;
    const result = await userControllers.updateUser(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = userControllers.deleteUser(req.params.id);
    res.json(result);
})


// router.route('/').post(async (req, res) => {
//     const { username, password } = req.body;
//     console.log(username);
//     console.log(password);
//     const result = await userControllers.checkLogin(username, password);
//     console.log(result);
//     res.json(result);
// })



module.exports = router;