const passport = require('passport')
const { Router } = require('express')
const ctr = require('../controllers/participant.controller')
const router = Router()

// /api/participant
router.post('/', ctr.create)
// /api/participant/admin
router.get('/admin/', passport.authenticate('jwt', { session: false }), ctr.getAll)

router.get('/', ctr.getAll)

module.exports = router
