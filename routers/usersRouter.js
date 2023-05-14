// //localhost:8000/users/
// const express = require('express');
// const router = express.Router();//מכאן אנו יכולות לנווט
// const userService = require('../controllers/userService');// שולף מ-sql
// // const usersByArray = require('../controllers/usersByArray');//לפי מערך 

// //לפי מערך
// //Get by id
// // router.route('/:id').get((req, res) => {
// //     const id = req.params.id;
// //     const result = usersByArray.getById(id)
// //     res.json(result);
// // })

// // // //Get All
// // // router.route('/').get((req, res) => {
// // //     const result = usersByArray.getAll()
// // //     res.json(result);
// // //     // res.json(result).status(200);
// // // })

// // //Add User
// router.route('/').post((req, res) => {
//     console.log(req.body);
//     const newUser = req.body;
//     const result = userService.addUser(newUser)
//     res.json(result);
// })

// // // //Edit User
// // // app.put('/:id', (req, res) => {
// // //     const id = req.params.id;
// // //     const user1 = req.body;
// // //    const index = usersByArray.findIndex(u => u.id == id);
// // //     users[index] = user1;
// // //     res.json(users);
// // // })

// // // //Delete User
// // router.route('/:id').delete((req, res) => {
// //     const id = req.params.id;
// //     const result = usersByArray.DeleteUser(id)
// //     res.json(result);
// // })
// // //Update User
// // router.route('/:id').put((req, res) => {
// //     const id = req.params.id;
// //     const user = req.body;
// //     const result = usersByArray.UpdateUser(id, user);
// //     res.json(result);
// // })

// //שליפה מ-db

// // router.get("/GetAllUsers", async (req, res) => {
   
// // });
// router.route('/u').get(async (req, res) => {
//     try {
//         let result = await userService.GetAllUsers();
//         res.json(result);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// });
// router.route('/').get(async (req, res) => {
//     try {
//         let result = await userService.GetAllProviders();
//         res.json(result);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// });

// module.exports = router;