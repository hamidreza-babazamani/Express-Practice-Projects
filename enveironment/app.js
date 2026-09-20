const express = require('express')
const app = express()
const dotenv= require('dotenv')
dotenv.config()
const NodeEnv = process.env.NodeEnv
dotenv.config({
    path: path.join(__dirname,`.env.${NodeEnv}`)

})
require('./blog')
app.listen (process.env.PORT,() => {
console.log('server run on port'+ process.env.PORT);
})