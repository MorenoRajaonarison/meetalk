const express = require('express')
const router = express.Router()
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middlewares/auth')
const friendInvitation = require("../controllers/friendInvitation/friendInvitation");

const postInvitationSchema = Joi.object({
  targetMail: Joi.string().email()
})

const inviteDecisionSchema = Joi.object({
  id: Joi.string().required()
})

router.post('/invite', auth, validator.body(postInvitationSchema), friendInvitation.controllers.postInvite)
router.post('/accept', auth, validator.body(inviteDecisionSchema), friendInvitation.controllers.postAccept)
router.post('/reject', auth, validator.body(inviteDecisionSchema), friendInvitation.controllers.postReject)
module.exports = router