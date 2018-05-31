// Packages
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')

// handlers
const handlers = require('./handlers')

// Initialize a new router
const router = Router()

// Plugins
router.use(cors())

// Map routes to handlers
router.get('/', handlers.front)
router.get('/hentNyeForsendelser', handlers.hentNyeForsendelser)
router.get('/hentNyeForsendelser/:filter', handlers.hentNyeForsendelser)
router.get('/hentForsendelsefil/:id', handlers.hentForsendelsefil)
router.post('/settForsendelseMottatt', handlers.settForsendelseMottatt)
router.post('/settForsendelseMottakFeilet', handlers.settForsendelseMottakFeilet)

module.exports = (req, res) => router(req, res, finalhandler(req, res))
