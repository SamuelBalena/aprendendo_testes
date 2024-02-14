const teste = (titulo, esperado, retornado) => {
    if (esperado === retornado) {
        console.log(`${titulo} passou`)
    } else {
        console.log(`${titulo} falhou`)
    }
}

const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras
}

const calculaDesconto = (salario, descontos) => {
    return salario - descontos
}

teste("somaHoras", 10, somaHorasExtras(5, 5))
teste("calcularDesconto", 5, calculaDesconto(10, 5))