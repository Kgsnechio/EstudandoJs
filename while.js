function getInteiroAleatorioEntre(min, max) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

let opcao = 0

while (opcao !== -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O valor da opição é ${opcao}`)
}

console.log('Até a próxima')