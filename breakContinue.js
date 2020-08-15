const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5){
        break        //desvia para fora do for
    }
    console.log(`X = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue     //pula para a proxima repetição
    }
    console.log(`Y = ${nums[y]}`)
}

externo:   //rotulo associado ao primeiro for
for(a in nums) {
    for (b in nums){
        if(a == 2 && b == 3){
            break externo     //desvia para fora do for com o rotulo externo
        }
        console.log(`Par = ${a},${b}`)
    }
}

