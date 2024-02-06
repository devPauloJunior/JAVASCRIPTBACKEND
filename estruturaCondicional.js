const prompt = require('prompt-sync')()

let idade = Number(prompt('Informe sua idade: '))

if (idade > 18) {
    console.log('Você é de maior')
} else {
    console.log('Você é de menor')
}