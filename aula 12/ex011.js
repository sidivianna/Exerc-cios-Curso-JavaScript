var idade = 70
console.log(`Voçê tem ${idade} anos.`)
if (idade < 18) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional!')
} else if (idade > 18) {
    console.log('Voto obrigatório! ')
}