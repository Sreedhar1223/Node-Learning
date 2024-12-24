
const http = require('https')
const fs = require('fs')

let data = http.get('https://jsonplaceholder.typicode.com/todos',(data)=>{
    console.log('data fetched sucesfully')
    return data
})

console.log(data)

setTimeout(()=>{
    console.log('call after 5 sec')
},5000)

fs.readFile("./file.txt","utf8",(err,data) =>{
 console.log("File data:",data)
})
let a = 2
let b = 12
function multipy(a,b){
    return a*b
}

let c = multipy(a,b)

console.log(c)