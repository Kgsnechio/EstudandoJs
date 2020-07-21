const escola = "Home..."

console.log(escola.charAt(3))  //character na posição
console.log(escola.charAt(8))  //se a posição estiver vazia ele retorna vaizio (nada)
console.log(escola.charCodeAt(3)) // retorna Codigo da tabela ASCII
console.log(escola.indexOf('m'))  //retorna a posição

console.log(escola.substring(1))  //retorna a string apartir da posição 
console.log(escola.substring(0, 3)) //retorna a string apartir 0 até 2 

console.log('Escola '.concat(escola).concat('!'))   //concatenação
console.log('Escola ' + escola + '!')
console.log(escola.replace('e', 'x'))   //substitue a posição pelo valor

console.log('Ana,Bia,Rafa'.split(','))   // retorna um array com os valores separados pelo valor