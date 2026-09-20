const express= require('express')
const cookieParser=require('cookie-parser')
const app= express()
app.use(cookieParser())
app.get('/set-cookie',(req, res)=>{
    res.cookie('cookieName','cookieValue')
    res.cookie('node.js','express.js,nest.js')
    res.send('cookie have been saved successfully')
})
app.get('/get-cookie',(req,res)=>{
    const cookies= req.cookies
    res.send(cookies)
})

app.listen(3000,()=> {
    console.log('server run on port 3000');
    
})