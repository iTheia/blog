const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = require('../schemas')

router.post('/register', async (req,res) =>{

    if(!req.body.email){
        return res.status(400).send('email is required')
    }
    if(!req.body.password){
        return res.status(400).send('password is required')
    }
    if(!req.body.name){
        return res.status(400).send('name is required')
    }
    const emailExists = await User.findOne({email:req.body.email})
    
    if(emailExists){
        return res.status(400).send('Email alredy exists')
    }

    const salt = bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hash(req.body.password, salt)

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    })

    await user.save( error =>{
        if(error){
            return res.status(400).send('Error saving')
        }
    })

    const token = jwt.sign({_id:user._id}, process.env.TOKEN)
    res.status(200).header('auth-token', token).send(token)
})
 router.post('/login', async (req, res) =>{
     const user = await User.findOne({email:req.body.email})
     if(!user){
        return res.status(400).send('email or password is incorrect')
     }
     const validPassword = await bcrypt.compare(req.body.password, user.password)
     if(!validPassword){
        return res.status(400).send('email or password is incorrect')
     }

     const token = jwt.sign({_id: user._id}, process.env.TOKEN)
     res.status(200).header('auth-token', token).send(token)
 })

module.exports = router