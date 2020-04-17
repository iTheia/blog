import mongoose from 'mongoose'
import dotenv from 'dotenv'
import appConfig from './config'

export const connection = async (config = appConfig) =>{
  await mongoose.connect(config.database, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  
}
