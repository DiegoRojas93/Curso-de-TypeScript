(() => {
  /** Declaración */

  let user: [string, number];

  user = ["Diego", 33];

  // Errores
  // user = [ 33, "Diego" ];
  // user = [ "Diego"];



  /** Tuplas con elementos opcionales */

  type HTTPResponse = [ number, string, boolean? ];

  const successful: HTTPResponse = [ 200, "OK", true ];
  const failed: HTTPResponse = [ 404, "Not Found" ];      // Valido tambien



  /** Tuplas de solo lectura (readonly) */

  type coordinates = readonly [ number, number ];

  const dot: coordinates = [10.45, -73.21]

  // Errores:
  // dot[0] = 20;    // No se puede modificar
  // dot.push(5);    // El método 'push' no existe en 'readonly'



  /** Desestructuración de Tuplas */

  type person = [ name: string, age: number ];

  const Diego: person = [ "Diego", 32 ],
    Maria: person = [ "Maria", 67 ];

  let [ namePerson, agePerson ] = Diego,
    [ nameMaria, ageMaria ] = Maria;

  console.log( namePerson, agePerson )
  console.log( nameMaria, ageMaria )



  /** Caso de uso real: Retorno múltiple (Estilo React Hooks) */

  function usarEstado(valorInicial: string): [string, (nuevoValor: string) => void] {
    let estado = valorInicial;

    const setEstado = (nuevoValor: string) => {
      estado = nuevoValor;
      console.log(`Nuevo estado: ${ estado }`);
    };

    return [estado, setEstado];
  }

  // Uso de la función
  
  const [nombre, setNombre] = usarEstado("Juan");

  setNombre("Pedro");
  // Nuevo estado: Pedro
  
})()