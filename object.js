const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 3999.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome : 'celulcar',
    preco : 2999.90 ,
    obj : {
        blabla : 1,
        obj : {
            blabla : 2
        }
    }
}

console.log(prod2.obj)