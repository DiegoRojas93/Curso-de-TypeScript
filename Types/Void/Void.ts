(() => {
  function showMessage(message: string): void {
    console.log(message);
    // No hay instrucción 'return' (o hay un 'return;' vacío)
  }

  const showMessage2 = ( message:string ):void => console.log(message);

  showMessage("Hola mundo!")
  // Hola mundo!

  showMessage2("Hola mundo!")
  // Hola mundo!



  // Definimos un tipo de función que no debe retornar nada útil
  type Notificador = () => void;

  // TypeScript permite que la función devuelva un número, pero se ignorará
  const enviarEmail: Notificador = () => {
    console.log("Hola mundo!");
    
    return 100; // Válido en TypeScript, pero el valor de retorno es ignorado por quien llama a la función
  };

  enviarEmail()
  // Hola mundo!
})()