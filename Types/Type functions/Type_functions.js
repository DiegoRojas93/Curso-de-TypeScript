(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola, soy ${name}.`;
    const saveTheWorld = () => `El mundo esta a salvo!`;
    let myFunction;
    myFunction = 12;
    console.log(myFunction);
    // 12
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    // 3
    myFunction = greet;
    console.log(myFunction("Diego"));
    // Hola, soy Diego.
    myFunction = saveTheWorld;
    console.log(myFunction());
    const length = (texto) => texto.length > 5;
    console.log(length("Texto"));
    const Calculator = (x, y) => x + y;
    console.log(Calculator(2, 3));
    // 5
})();
export {};
