import logger from "../src/utils/logger"

describe("Testes para console.log", () => {
    const spyLog = jest.spyOn(console, "log").mockImplementation()

    beforeEach(()	=>	{
        jest.clearAllMocks()
    });

    afterAll(()	=>	{
        jest.restoreAllMocks();
    });


it('Funções	de logging: log',	()	=>	{
    //	chamamos	função	de	log	normal
    logger.log('teste');
    //	verificamos	se	o	spy	foi	chamado
    expect(spyLog).toHaveBeenCalledTimes(1);
});

it('Funções	de logging: success',	()	=>	{
    //	chamamos	função	de	log	success
    logger.success('teste');
    //	verificamos	se	o	spy	foi	chamado
    expect(spyLog).toHaveBeenCalledTimes(1);
});

it('Funções	de logging: error',	()	=>	{
    //	chamamos	função	de	log	error
    logger.error('teste');
    //	verificamos	se	o	spy	foi	chamado
    expect(spyLog).toHaveBeenCalledTimes(1);
});
})

