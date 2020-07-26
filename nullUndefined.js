let valor // não iniciada
console.log(valor) // undefined

// console.log(valor2) // error: valor2 is not defined

valor = null // ausência de valor  não aponta para nenhum local na memória
console.log(valor) //null

// console.log(valor.toString()) // error: não consegue acessar a propriedade de null

const produto = {}
console.log(produto.preco) //undefined

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  //evite atribuir undefined
console.log(!!produto.preco) //false

// delete produto.preco // exclui o preco de dentro do produto 

produto.preco = null
console.log(!!produto.preco)
console.log(produto)