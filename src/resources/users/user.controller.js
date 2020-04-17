const User = require('./user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    async createUser(req, res){
        try {
            const emailExist = await User.findOne({email:req.body.email})
            if(emailExist){
                return res.status(400).send('email alredy exists')
            }
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            const user = new User({
                name:req.body.name,
                email:req.body.email,
                password:hashedPassword
            })
        
            await user.save()
            const token = jwt.sign({_id:user._id}, process.env.TOKEN)
            
            res.status(200).header('auth-token', token).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async getUsers(req, res){
        try {
            const result = await User.find().sort('createdAt')
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async updateUser(req, res){
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.status(200).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async deleteUser(req, res){
        try {
            const user = await User.deleteOne({_id:req.params.id})
            res.status(200).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}


module.exports =  userController