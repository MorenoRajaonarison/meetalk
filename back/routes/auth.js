const express = require('express')
const router = express.Router()
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const {login, register} = require('../controllers/auth/auth')
const auth = require('../middlewares/auth')

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
  login
)

// Test des route si notre middleware marche bien
router.get('/test', auth, (req, res) => {
  return res.send('request past')
})

module.exports = router