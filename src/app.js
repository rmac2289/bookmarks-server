require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bookmarksRouter = require('./bookmarks/bookmarks')
const logger = require('./logger')

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json());

app.use(function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN
    const authToken = req.get('Authorization')
  
    if (!authToken || authToken.split(' ')[1] !== apiToken) {
        logger.error(`Unauthorized request to path: ${req.path}`)
      return res.status(401).json({ error: 'Unauthorized request' })
    }
    // move to the next middleware
    next()
  })

app.use(bookmarksRouter)




  module.exports = app