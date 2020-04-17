const express = require('express')
const router = express.Router()
const userRoute = require('./resources/users/user.route')

router.get('/', (req, res) =>{
    res.send('hola mundo')
})

router.use('/users', userRoute)

module.exports = router