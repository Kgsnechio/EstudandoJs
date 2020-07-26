const valores = [7.7, 8.9, 6.3, 9.2]   //Declara o vetor
console.log(valores[0], valores[3])    //mostra o vetor nas posições 0 e 3 
console.log(valores[4])                // undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)          //tamanho do vetor

valores.push({id: 3}, false, null, 'teste')    //aceita varios tipos de dados 
console.log(valores)

console.log(valores.pop())            //remove o ultimo item do vetor 
delete valores[0]                     //deleta o valor da posição   <1 empty item>

console.log(typeof valores)             //array é do tipo object
console.log(typeof valores[6])          //tipo do elemento