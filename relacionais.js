const log = text => console.log(text)

log(`01) ${'1' == 1}`)
log(`02) ${'1' === 1}`)
log(`03) ${'1' != 1}`)
log(`04) ${'1' !== 1}`)

log(`05) ${3 < 2}`)
log(`06) ${3 > 2}`)
log(`07) ${3 <= 2}`)
log(`08) ${3 >= 2}`)

const d1 = new Date(0)
const d2 = new Date(0)

log(`09) ${d1 === d2}`)   // nesse caso esta avaliando o apontamento de momória // false
log(`10) ${d1 == d2}`) 
log(`11) ${d1.getTime() === d2.getTime()}`) // aqui esta avaliando ovalor // true

log(`12) ${undefined == null}`)  // true
log(`13) ${undefined === null}`) // false