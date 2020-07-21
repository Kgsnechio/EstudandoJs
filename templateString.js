const nome = 'André'
const concatenacao = 'Olá ' + nome + '!'   
const template = `
    Olá
    ${nome}!`

    // o template string respeita a quebra de linhas e espaçamentos

console.log(concatenacao, template)

//expressoes 

console.log(`1 + 1 = ${1 + 1}`)

// Consegue chamar funções
const up = texto => texto.toUpperCase()   //converte pra maiusculo

console.log(`Ei... ${up('cuidado')}!`)