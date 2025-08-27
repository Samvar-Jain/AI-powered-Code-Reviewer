const express = require('express');
const aiControler = require('../controllers/ai.controller');
const router = express.Router();

router.post("/get-review", aiControler.getReview);


module.exports = router;