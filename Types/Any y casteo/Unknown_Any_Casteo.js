(() => {
    // Unknown
    let dato = "Hola mundo!";
    console.log(dato);
    // console.log(dato.toUpperCase());                               // El compilador te avisa del error  
    if (typeof dato === "string")
        console.log(dato.toUpperCase()); // Ahora es seguro
    // Any
    let avenger = "Iron man";
    console.log(avenger.toLowerCase());
    avenger = 1;
    console.log(avenger);
    // Casteo: Existen dos formas de hacer casteo en TypeScript
    // 1. Usando el operador as (La sintaxis recomendada)
    let valor = "Hola TypeScript";
    let longitud = valor.length;
    // 2. Usando la sintaxis de corchetes angulares <>
    let valor1 = "Hola TypeScript 2";
    let longitud2 = valor.length;
    // 3. Forzado: para engañar al compilador
    const edad = 25;
    const texto = edad; //  Permitido por el compilador
    console.log(`${texto} de tipo ${typeof texto}`);
})();
export {};
