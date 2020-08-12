function rand({ min = 0, max = 1000 } = { min: 0, max: 5}) {    // passa um valor caso não passe nenhum obj
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 100, min: 50 }
console.log(rand(obj))
console.log(rand({ min: 950 }))
console.log(rand({}))
console.log(rand())
