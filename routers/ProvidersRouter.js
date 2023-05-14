// //localhost:port/{Providers}/
// const express = require('express');
// const router = express.Router();//מכאן אנו יכולות לנווט
// const ProviderService = require('../controllers/ProviderService');// שולף מ-sql


// router.route('/').get(async (req, res) => {
//     try {
//         let result = await ProviderService.GetAllProviders();
//         res.json(result);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// });

// module.exports = router;