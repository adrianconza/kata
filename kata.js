function generarAtaque(pociones) {
    const combinacion = generarCombinaciones(pociones, {});
    return generarMensajes(combinacion.combinaciones);
};

function generarMensajes(combinacion) {
    const resultCombinaciones = combinacion.map((combinacion, index) => {
        if (combinacion === 1) {
            return `Ataque ${index + 1}: usar ${combinacion} poción causa un ${getPorcentajes(combinacion)}% de daño.`;
        }
        return `Ataque ${index + 1}: usar ${combinacion} pociones distintas causan un ${getPorcentajes(combinacion)}% de daño.`;
    });
    const resultTotal = combinacion.reduce((accum, combinacion) => accum + getPorcentajes(combinacion), 0);
    return [
        ...resultCombinaciones,
        `Total: el brujo ha causado un ${resultTotal}% de daño.`
    ];
};

function generarCombinaciones(pociones, data) {
    const ataque = [];
    for (let i = 0; i < pociones.length; i++) {
        if (!ataque.includes(pociones[i])) {
            ataque.push(pociones[i]);
            pociones = pociones.filter((pocion, index) => index !== i);
            i = 0;
        }
    }
    const combinacion = data.combinaciones ? data.combinaciones : [];
    data = {
        combinaciones: [...combinacion, ataque.length],
        porcentaje: [...combinacion, ataque.length].reduce((accum, combinacion) => accum + getPorcentajes(combinacion), 0)
    }
    if (!!pociones.length) {
        return generarCombinaciones(pociones, data);
    }
    return data;
};

function getPorcentajes(value) {
    switch (value) {
        case 1:
            return 3;
        case 2:
            return 5;
        case 3:
            return 10;
        case 4:
            return 20;
        case 5:
            return 25;
    }
};

module.exports = {
    generarAtaque
};