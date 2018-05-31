// Packages
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')

// handlers
const handlers = require('./handlers')

// Initialize a new router
const router = Router()
router.use(cors())

// Map routes to handlers
router.get('/', handlers.front)
router.get('/tjenester/svarinn/mottaker/hentNyeForsendelser/:filter?', handlers.hentNyeForsendelser)
router.get('/tjenester/svarinn/forsendelse/:id', handlers.hentForsendelsefil)
router.post('/tjenester/svarinn/kvitterMottak/forsendelse/:id', handlers.settForsendelseMottatt)
router.post('/tjenester/svarinn/mottakFeilet/forsendelse/:id', handlers.settForsendelseMottakFeilet)

module.exports = (req, res) => router(req, res, finalhandler(req, res))
