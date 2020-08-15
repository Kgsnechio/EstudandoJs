function getInteiroAleatorioEntre(min, max) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O valor da opição é ${opcao}`)
} while (opcao !== -1)

console.log('Até a próxima')