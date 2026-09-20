const { log } = require('console')
const crypto= require('crypto')
const fs = require('fs')
const filename = 'index.txt'
const md5Sun = crypto.createHash('md5')
const stream = fs.ReadStream(filename)
stream.on('data',(data)=>{
    md5Sun.update(data)
})
stream.on('end',()=>{
    const hash = md5Sun.digest('hex')
    fs.writeFile('hash.txt', hash , (err)=>{
        if(err) console.log(err)   
    })
})