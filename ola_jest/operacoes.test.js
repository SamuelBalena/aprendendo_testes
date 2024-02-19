const { calculaDesconto, somaHorasExtras } = require("./operacoes")

describe("Operações", () => {
    beforeAll(() => {
        console.log("Antes de todos os testes")
    })

    afterAll(() => {
        console.log("Depois de todos os testes")
    })

    beforeEach(() => {
        console.log("Antes de cada um dos testes")
    }) 

    afterEach(() => {
        console.log("Depois de cada um dos teste")
    })

    it("Deve somar horas extras", () => {
        const esperado = 10
        const retornado = somaHorasExtras(5, 5)
    
        expect(retornado).toBe(esperado)
    })
    
    it("Deve calcular o desconto do salário", () => {
        const esperado = 5
        const retornado = calculaDesconto(10, 5)
    
        expect(retornado).toBe(esperado)
    })
})