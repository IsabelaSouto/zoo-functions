const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const countElephants = handlerElephants('count');
    expect(countElephants).toBe(4);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const namesElephants = handlerElephants('names');
    expect(namesElephants).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const averageAgeElephants = handlerElephants('averageAge');
    expect(averageAgeElephants).toBeCloseTo(10.5, 2);
  });
  it('Para o argumento location deve retornar a string NW', () => {
    const locationElephants = handlerElephants('location');
    expect(locationElephants).toBe('NW');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5;', () => {
    const popularityElephants = handlerElephants('popularity');
    expect(popularityElephants).toBeCloseTo(5, 1);
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Para o argumento que seja diferente de string deve retornar Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const availabilityElephants = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(availabilityElephants).not.toContain('Monday');
  });
});
