(() => {

  // Unknown

  let dato: unknown = "Hola mundo!"

  console.log(dato);

  // console.log(dato.toUpperCase());                               // El compilador te avisa del error  
  
  if (typeof dato === "string") console.log(dato.toUpperCase());    // Ahora es seguro




  // Any

  let avenger: any = "Iron man";

  console.log( avenger.toLowerCase() );

  avenger = 1;

  console.log( avenger );




  // Casteo: Existen dos formas de hacer casteo en TypeScript

  // 1. Usando el operador as (La sintaxis recomendada)

  let valor: unknown = "Hola TypeScript";

  let longitud: number = (valor as string).length;

  // 2. Usando la sintaxis de corchetes angulares <>

  let valor1: unknown = "Hola TypeScript 2";

  let longitud2: number = (<string>valor).length;

  // 3. Forzado: para engañar al compilador

  const edad = 25;

  const texto = (edad as unknown) as string; //  Permitido por el compilador

  console.log(`${texto} de tipo ${ typeof texto }`)
  
  
})()