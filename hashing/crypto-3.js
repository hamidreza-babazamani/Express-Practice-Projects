const crypto = require("crypto");
const secret = 'ksdhugjoiesughedg31264'
const hash = crypto.createHmac('sha512', secret).update("Nodejs").digest('hex')

console.log(hash);
