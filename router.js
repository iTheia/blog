const express = require('express')
const router = express.Router()

const UserRoute = require('./routes/User')

router.get('/', (req, res) =>{
    res.send({hola:true})
})

router.use('/users', UserRoute)

module.exports = router