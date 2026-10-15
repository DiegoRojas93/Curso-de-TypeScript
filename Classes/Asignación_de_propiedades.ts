(() => {

  class Person {

    static country: string = "Bogotá";      // Accesible sin necesidad de instanciar la clase

    constructor(
      private id: string,
      public fullName: string,
      protected age?: number | undefined,
    ){}
  }

  console.log(Person.country);              // Bogotá
  
  const Diego = new Person("Diego Rojas", "1022387268" );

  console.log(Diego.fullName);
  // console.log(Diego.id);                 // ❌ Error: 'cedula' es privada.
  // console.log(Diego.age);                // ❌ Error: 'age' es protegida.
  
})()