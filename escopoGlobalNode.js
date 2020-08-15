let a = 3

global.b = 123

this.c = 156
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)    //true
console.log(module.exports === global)  //false

console.log(module.exports)

module.exports = { c: 156, d: false, e: 'teste' }   //modo mais tradicional 

//no NODE cada arquivo é um module 

//NÂO FAZER ISSO!!!
abc = 3               // criando uma variavel dessa forma, sem declarar 
    // ela vai diretamente para dendro do objeto global

console.log(global.abc)