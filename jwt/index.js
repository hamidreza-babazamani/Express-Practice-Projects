const jwt = require('jsonwebtoken')
const Secret = 'kl543jsr4t456uhr4tfo4i3w78t3ebjhgoi3e745'
const token =jwt.sign({
    id:"john" ,email:'hamid@email.com'
 } ,
     Secret, 
    {
        expiresIn:1000,
        //algorithm: "HS512"
        algorithm:"RS512"
    }

)
console.log(token);

