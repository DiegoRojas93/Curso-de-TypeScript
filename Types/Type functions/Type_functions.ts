((): void => {
  const addNumbers = ( a: number, b:number ): number => a + b;
  const greet = ( name: string ): string => `Hola, soy ${ name }.`;
  const saveTheWorld = (): string => `El mundo esta a salvo!`;

  let myFunction;

  myFunction = 12;
  console.log(myFunction);
  // 12
  
  myFunction = addNumbers
  console.log(myFunction(1,2));
  // 3

  myFunction = greet
  console.log(myFunction("Diego"));
  // Hola, soy Diego.

  myFunction = saveTheWorld
  console.log(myFunction());
  // El mundo esta a salvo!




  type CriterioBusqueda = (item: string) => boolean;

  const length: CriterioBusqueda = (texto) => texto.length > 5;

  console.log(length("Texto"));
  // false




  interface sum {
    (a: number, b: number): number;
  }

  const Calculator: sum = (x, y) => x + y;

  console.log(Calculator(2,3));
  // 5
  

})();