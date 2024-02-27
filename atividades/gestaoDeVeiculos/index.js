import { Veiculos } from "./Veiculos.js"

let palio = new Veiculos('Fiat', 'ELX', 'GHJ-4729', 'vermelha', '2005', 'Flex', 0)

console.log(palio.getMarca)
console.log(palio.anoDeFabricacao)
console.log('==============================')
console.log(palio.quantidade)
palio.setQuantidade = -3
console.log(palio.quantidade)
palio.setQuantidade = 2
console.log(palio.quantidade)
palio.setQuantidade = 5
console.log(palio.quantidade)
palio.setQuantidade = -6
console.log(palio.quantidade)
palio.setQuantidade = -4
console.log(palio.quantidade)
