(() => {

  class Person {
    private id: string;                     // Privado, solo usado en esta clase
    public fullName: string;                // Accesible desde afuera
    protected age?: number | undefined;     // Visible en Persona y en sus subclases
    static country: string = "Bogotá";      // Accesible sin necesidad de instanciar la clase

    constructor( fullName: string, id: string, age?: number ){
      this.fullName = fullName;
      this.id = id;
      this.age = age;
    }
  }

  console.log(Person.country);        // Bogotá
  
  const Diego = new Person("Diego Rojas", "1022387268" );

  console.log(Diego.fullName);
  // console.log(Diego.id);           // ❌ Error: 'cedula' es privada.
  // console.log(Diego.age);          // ❌ Error: 'age' es protegida.
  
})()