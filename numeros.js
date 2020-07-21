const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso2)
console.log(Number.isInteger(peso1)) // Essa função pergunta se o numero é interiro e retorna TRUE or FALSE
console.log(Number.isInteger(peso2))  // Apesar de declarado com virgula o numero continua sendo Inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// OUTRAS FUNÇÕES!!!

console.log(media.toFixed(2))   //Determina a quantidade de casas depois da virgula
console.log(media.toString())     //Transforma em texto
console.log(media.toString(2))  //Transforma em binário

console.log(typeof media)   //number
console.log(typeof Number)  //Função