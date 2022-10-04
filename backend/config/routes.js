const express = require('express')

module.exports = function(server) {
    //Api Routes
    const router = express.Router()
    server.use('/api', router)
}