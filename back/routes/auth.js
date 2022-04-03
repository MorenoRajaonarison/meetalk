const express = require('express')
const router = express.Router()
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const {login, register} = require('../controllers/auth/auth')

// middleware de validation
const registerSchema = Joi.object({
  username: Joi.string().min(4).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required()
})
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
})

// Authentication router
router.post('/register',
  validator.body(registerSchema),
  register
)
router.post('/login',
  validator.body(loginSchema),
  login)

module.exports = router