const crypto = require('crypto')

console.log("Hello World")

var a = 10;
var b = 20;

crypto.pbkdf2Sync('password','salt',5000000,50,'sha512') // syschronous functions will block main thread
console.log('First key is generated')
crypto.pbkdf2('password','salt',500000,50,'sha512',(error,key)=>{
 console.log('key generated - 2',key)
})

function multiply(a,b){
  console.log(a*b)
}
multiply(a,b)