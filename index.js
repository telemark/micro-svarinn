// Packages
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')

// handlers
const handlers = require('./handlers')

// Initialize a new router
const router = Router()

// JWT
const { SVARINN_URL } = process.env

// Exit if environment variables is not set
if (!SVARINN_URL) {
  console.error('Must set environment variables: SVARINN_URL')
  process.exit(1)
}

// Plugins
router.use(cors())

// Map routes to handlers
router.get('/', handlers.front)
router.get('/hentNyeForsendelser', handlers.hentNyeForsendelser)
router.get('/hentForsendelsefil/:id', handlers.hentForsendelsefil)
router.post('/settForsendelseMottatt', handlers.settForsendelseMottatt)
router.post('/settForsendelseMottakFeilet', handlers.settForsendelseMottakFeilet)

module.exports = (req, res) => router(req, res, finalhandler(req, res))
