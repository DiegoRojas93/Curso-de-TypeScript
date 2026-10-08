(() => {
    /* Tipos de declaración **/
    const numeros = [1, 2, 3, 4, 5];
    const nombres = ["Ana", "Carlos", "Beatriz"];
    const numeros2 = [1, 2, 3, 4, 5];
    const nombres2 = ["Ana", "Carlos", "Beatriz"];
    /* Inferencia de tipos en Arrays **/
    const valores = [10, 20, 30];
    // valores.push("hola");
    /* Arreglos con múltiples tipos (Uniones) **/
    const mixto = [1, "dos", 3, "cuatro"];
    mixto.push(5); //  Correcto
    mixto.push("seis"); //  Correcto
    const carrito = [
        { id: 1, nombre: "Teclado", precio: 50 },
        { id: 2, nombre: "Mouse", precio: 25 }
    ];
    carrito.push({ id: 3, nombre: "Monitor", precio: 200 }); //  Correcto
    /* Arreglos de solo lectura (ReadonlyArray) **/
    const numerosInmutables = [1, 2, 3];
    // Errores de compilación:
    // numerosInmutables.push(4); 
    // numerosInmutables[0] = 99;
})();
export {};
