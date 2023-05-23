//localhost:3000/login/
const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();


// router.route('/').post(async (req, res) => {
//     const { username, password } = req.body;
//     console.log(username);
//     console.log(password);
//     const result = await loginController.checkLogin(username, password);
//     console.log(result);
//     res.json(result);
// })
router.route('/').post(async (req, res) => {
    // const password= req.body;
    // console.log(req.body);
    const result = await loginController.checkLogin(req.body);
    console.log(result);
    res.json(result);
})




module.exports = router;
