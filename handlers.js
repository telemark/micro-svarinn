const axios = require('axios')
const getAuth = require('basic-auth')
const { readFile } = require('fs').promises
const md = require('markdown-it')()
const { send, json } = require('micro')
const { SVARINN_URL: url } = process.env

exports.front = async (req, res) => {
  const readme = await readFile('./README.md', 'utf-8')
  const html = md.render(readme)
  send(res, 200, html)
}

exports.hentNyeForsendelser = async (req, res) => {
  const auth = getAuth(req)
  const options = {
    url: `${url}$/hentNyeForsendelser`,
    auth: {
      username: auth.name,
      password: auth.pass
    }
  }
  try {
    const { data } = await axios(options)
    send(res, 200, data)
  } catch (error) {
    throw error
  }
}

exports.hentForsendelsefil = async (req, res) => {
  const { id } = req.params
  const auth = getAuth(req)
  const options = {
    url: `${url}$/hentForsendelsefil/${id}`,
    // responseType:'stream',
    auth: {
      username: auth.name,
      password: auth.pass
    }
  }
  try {
    const { data } = await axios(options)
    send(res, 200, data)
  } catch (error) {
    throw error
  }
}

exports.settForsendelseMottatt = async (req, res) => {
  const payload = await json(req)
  const auth = getAuth(req)
  const options = {
    url: `${url}$/settForsendelseMottatt`,
    method: 'post',
    data: payload,
    auth: {
      username: auth.name,
      password: auth.pass
    }
  }

  try {
    const { data } = await axios(options)
    send(res, 200, data)
  } catch (error) {
    throw error
  }
}

exports.settForsendelseMottakFeilet = async (req, res) => {
  const payload = await json(req)
  const auth = getAuth(req)
  const options = {
    url: `${url}$/settForsendelseMottakFeilet`,
    method: 'post',
    data: payload,
    auth: {
      username: auth.name,
      password: auth.pass
    }
  }
  try {
    const { data } = await axios(options)
    send(res, 200, data)
  } catch (error) {
    throw error
  }
}
