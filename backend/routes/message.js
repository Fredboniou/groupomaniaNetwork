const express = require('express');
const router = express.Router();
const messageCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/:id', auth, multer, messageCtrl.createMessage);
router.delete('/:id', auth, messageCtrl.deleteMessage);