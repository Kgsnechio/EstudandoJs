let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)  // O sinal de negação retorna o inverso, dois sinais retorna se o valor é true ou false

console.log('os verdadeiros...')
console.log(!!3)     //qualquer numero inteiro é verdadeiro com excessão do zero
console.log(!!-1)
console.log(!!' ')     //qualquer string é verdadeiro
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')       // string vazia é false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//Pra finalizar "OU"

console.log(!!('' || null || 0 || 'string'))   // se tiver pelo menos um true retorna true
console.log('' || null || 0 || 'string' || 123)   //retorna o primeiro valor verdadeiro

//usando "OU" pra definir um valor padrão

let nome = ''
console.log(nome || 'Desconhecido')