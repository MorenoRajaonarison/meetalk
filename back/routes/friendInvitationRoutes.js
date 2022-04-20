const express = require('express')
const router = express.Router()
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middlewares/auth')
const friendInvitation = require("../controllers/friendInvitation/friendInvitation");

const postInvitationSchema = Joi.object({
  targetMail: Joi.string().email()
})

router.post('/invite', auth, validator.body(postInvitationSchema), friendInvitation.controllers.postInvite)
module.exports = router