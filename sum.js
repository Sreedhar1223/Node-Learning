// Modules protect their variables and functions from leaking
console.log('Some Module Executed')




// export let name = 'Sreedhar'

// export function calCulate(a,b){
//  const sum = a+b
//  console.log(sum)
// }

 let name = 'Sreedhar'

function calCulate(a,b){
 const sum = a+b
 console.log(sum)
}
console.log(module.exports) //module.exports is an empty{} object
module.exports = {
 name,
 calCulate
}


// we can export like this also
// module.exports.name = name  
// module.exports.calCulate = calCulate