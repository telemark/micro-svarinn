const axios = require('axios')
const bauth = require('basic-auth')
const { readFile } = require('fs').promises
const md = require('markdown-it')()
const { send, json } = require('micro')
const url = process.env.SVARINN_URL || 'https://svarut.ks.no/tjenester/svarinn'
const filterString = process.env.FILTER_STRING || '(TFK-SIGN)'

const sendError = (res, error = {}) => send(res, error.response && error.response.statusCode ? error.response.status : 400, error.response && error.response.data ? error.response.data : error.message)

const getAuth = (req, res) => {
  const auth = bauth(req)
  if (!auth) return sendError(res, new Error('No auth'))
  return {
    username: auth.name,
    password: auth.pass
  }
}

exports.front = async (req, res) => {
  const readme = await readFile('./README.md', 'utf-8')
  const html = md.render(readme)
  send(res, 200, html)
}

exports.hentNyeForsendelser = async (req, res) => {
  const filter = req.params && req.params.filter
  const auth = getAuth(req, res)
  const options = {
    url: `${url}/mottaker/hentNyeForsendelser`,
    auth
  }
  try {
    const { data } = await axios(options)
    const response = filter ? data.filter(item => item.tittel.includes(filterString)) : data.filter(item => !item.tittel.includes(filterString))
    send(res, 200, response)
  } catch (error) {
    sendError(res, error)
  }
}

exports.hentForsendelsefil = async (req, res) => {
  const { id } = req.params
  const auth = getAuth(req, res)
  const options = {
    url: `${url}/forsendelse/${id}`,
    // responseType:'stream',
    auth
  }
  try {
    const { data, headers } = await axios(options)
    const mimeType = headers['content-type']
    res.setHeader('Content-type', mimeType)
    send(res, 200, data)
  } catch (error) {
    sendError(res, error)
  }
}

exports.settForsendelseMottatt = async (req, res) => {
  const { id } = req.params
  const auth = getAuth(req, res)
  const options = {
    url: `${url}/kvitterMottak/forsendelse/${id}`,
    method: 'post',
    auth
  }

  try {
    const { data } = await axios(options)
    send(res, 200, data)
  } catch (error) {
    sendError(res, error)
  }
}

exports.settForsendelseMottakFeilet = async (req, res) => {
  const { id } = req.params
  const payload = await json(req)
  const auth = getAuth(req, res)
  const options = {
    url: `${url}$/mottakFeilet/forsendelse/${id}`,
    method: 'post',
    data: payload,
    auth
  }
  try {
    const { data } = await axios(options)
    send(res, 200, data)
  } catch (error) {
    sendError(res, error)
  }
}
