const {generarAtaque} = require('./kata');

describe('Kata', () => {

    it('Caso 1', () => {
        const result = generarAtaque([
            'roja',
            'roja',
            'azul',
            'verde'
        ]);
        // console.log(result);
        expect(result).toEqual([
            'Ataque 1: usar 3 pociones distintas causan un 10% de daño.',
            'Ataque 2: usar 1 poción causa un 3% de daño.',
            'Total: el brujo ha causado un 13% de daño.'
        ]);
    });

    it('Caso 2', () => {
        const result = generarAtaque([
            'roja',
            'roja',
            'azul',
            'azul',
            'verde',
            'amarilla',
            'gris'
        ]);
        // console.log(result);
        expect(result).toEqual([
            'Ataque 1: usar 5 pociones distintas causan un 25% de daño.',
            'Ataque 2: usar 1 poción causa un 3% de daño.',
            'Ataque 3: usar 1 poción causa un 3% de daño.',
            'Total: el brujo ha causado un 31% de daño.'
        ]);
    });

    it('Caso 3', () => {
        const result = generarAtaque([
            'roja',
            'roja',
            'azul',
            'azul',
            'verde',
            'verde',
            'amarilla',
            'gris'
        ]);
        // console.log(result);
        expect(result).toEqual([
            'Ataque 1: usar 4 pociones distintas causan un 20% de daño.',
            'Ataque 2: usar 4 pociones distintas causan un 20% de daño.',
            'Total: el brujo ha causado un 40% de daño.'
        ]);
    });

    it('Caso 4', () => {
        const result = generarAtaque([
            'roja',
            'roja',
            'roja',
            'azul',
            'azul',
            'verde',
            'verde',
            'amarilla',
            'amarilla',
            'gris'
        ]);
        // console.log(result);
        expect(result).toEqual([
            'Ataque 1: usar 5 pociones distintas causan un 25% de daño.',
            'Ataque 2: usar 4 pociones distintas causan un 20% de daño.',
            'Ataque 3: usar 1 poción causa un 3% de daño.',
            'Total: el brujo ha causado un 48% de daño.'
        ]);
    });
});