const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras
}

const calculaDesconto = (salario, descontos) => {
    return salario - descontos
}

var esperado = 10
var retorno = somaHorasExtras(5, 5)

if (esperado === retorno) {
    console.log("Teste passou")
} else {
    console.log("Teste falhou")
}

// new test
var esperado = 5
var retorno = calculaDesconto(10, 5)

if (esperado === retorno) {
    console.log("Teste passou")
} else {
    console.log("Teste falhou")
}