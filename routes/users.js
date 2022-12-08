const express = require('express');
const router = express.Router();
const userhandler = require('./handler/user');

router.post('/register',userhandler.regisUser);
router.get('/',userhandler.allData);
router.get('/:id', userhandler.byId);
router.put('/update/:id', userhandler.update);
module.exports = router;
