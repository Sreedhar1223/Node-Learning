// require('./sum.js')

 const {name,calCulate} = require('./sum.js')
//import {name,calCulate} from "./sum.js"
const {managerAccess,employeeAccess} = require('./admin-module')

// console.log(global)
calCulate(10,20)
// console.log(globalThis)
console.log(globalThis === global,name)

managerAccess()
employeeAccess()