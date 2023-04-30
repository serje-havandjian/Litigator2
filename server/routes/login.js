const express = require('express');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const router = express.Router();

router.post('/', [
    body('username').notEmpty(),
    body('password').notEmpty()
  ], async (req, res) => {
    // handle login request
  });
  
  module.exports = router;

  