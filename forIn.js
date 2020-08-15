const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for( i in notas ){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'André',
    sobrenome: 'Nechio',
    idade: 26,
    peso: 70
}

for (atributo in pessoa){
    console.log(`${atributo} é ${pessoa[atributo]}`)
}