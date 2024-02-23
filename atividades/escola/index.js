// execuções

import { Funcionarios } from "./Funcionarios.js";

let func01 = new Funcionarios('Paulo','Instruto', 'DIURNO')

console.log(func01)
console.log(func01.nome)
console.log(func01._nome)
console.log(func01.salario)
func01.alteraSalario = 5000
console.log(func01.salario)


