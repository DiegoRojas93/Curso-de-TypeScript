((): void =>{

  // Funciones Básicas

  type criterionSumar = ( a:number, b:number ) => number;

  const sumar: criterionSumar = ( a, b ) => a + b;


  type criterionHeroLength = ( heroName: string| string[] ) => number;

  const contar: criterionHeroLength = ( heroes ) => heroes.length;
  
  const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

  contar(superHeroes);



  //Parametros por defecto
  const llamarBatman = ( llamar: string = "Batiseñal activada" ): void => console.log("Batiseñal activada");

  llamarBatman();

  // Rest?

  const unirheroes = ( ...personas: string[] ): string => personas.join(", ");


  // Tipo funcion

  type criterionNoHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: unknown[] ) => void

  const noHaceNada: criterionNoHaceNada = ( numero, texto, booleano, arreglo ) => {}

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: criterionNoHaceNada;
  noHaceNadaTampoco = noHaceNada

})()