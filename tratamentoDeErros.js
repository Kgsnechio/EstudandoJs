function tratarErroELancar (erro) {
    //throw new Error ('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome : erro.name,
        msg : erro.message,
        date : new Date
    }
}

function imprimirNomeGritando(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (erro) {
        tratarErroELancar(erro)
    } finally {
        console.log('final')
    }
}

const objComErro = { nome: 'André' }
const obj = { name: 'André'}

imprimirNomeGritando(obj)
imprimirNomeGritando(objComErro)