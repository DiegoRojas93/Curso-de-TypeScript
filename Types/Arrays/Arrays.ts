(() => {

  /* Tipos de declaración **/

  const numeros: number[] = [1, 2, 3, 4, 5];
  const nombres: string[] = ["Ana", "Carlos", "Beatriz"];

  const numeros2: Array<number> = [1, 2, 3, 4, 5];
  const nombres2: Array<string> = ["Ana", "Carlos", "Beatriz"];


  /* Inferencia de tipos en Arrays **/

  const valores = [10, 20, 30];

  // valores.push("hola");


  /* Arreglos con múltiples tipos (Uniones) **/

  const mixto: (number | string)[] = [1, "dos", 3, "cuatro"];

  mixto.push(5);       //  Correcto
  mixto.push("seis");  //  Correcto
  // mixto.push(true); //  Error: boolean no está permitido


  /* Arreglos de Objetos **/

  type Producto = {
    id: number;
    nombre: string;
    precio: number;
  };

  const carrito: Producto[] = [
    { id: 1, nombre: "Teclado", precio: 50 },
    { id: 2, nombre: "Mouse", precio: 25 }
  ];

  carrito.push({ id: 3, nombre: "Monitor", precio: 200 }); //  Correcto


  /* Arreglos de solo lectura (ReadonlyArray) **/

  const numerosInmutables: readonly number[] = [1, 2, 3];

  // Errores de compilación:
  // numerosInmutables.push(4); 
  // numerosInmutables[0] = 99;

})()