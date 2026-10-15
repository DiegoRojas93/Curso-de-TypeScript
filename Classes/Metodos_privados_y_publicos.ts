(() => {

  class Person {

    static country: string = "Bogotá";      // Accesible sin necesidad de instanciar la clase

    // Método statico
    static getClassName():string {
      return this.name                      // Retornara: Person
    }

    constructor(
      public fullName: string,
      private id: string,
      protected age?: number | undefined,
    ){}

    // Método publico
    public getFullName(): string {
      return this.fullName
    }

    // Método privado: solo se puede invocar desde el interior de la clase
    #getIdPerson(): string {
      return this.id
    }

    // Método protegido
    protected getAge(): number | undefined {
      return this.age
    }
  }

  class Student extends Person{

    constructor(
      fullName: string,           // Sin 'public'/'private'
      id: string,                 // Sin 'private'
      age: number | undefined,    // Acepta undefined
      public idStudent: string
    ){
      super( fullName, id, age )
    }

    public greet():string {
      return `Hola soy ${ this.fullName } y tengo ${ this.getAge() || "33" } años de edad.`
    }
  }


  console.log(Person.getClassName());              // Person
  
  const Diego = new Person("Diego Rojas", "1022387268" );

  console.log(Diego.getFullName());
  // console.log(Diego.getIdPerson());
  // console.log(Diego.getAge());

  const DiegoStudent = new Student("Diego Rojas", "1022387268", undefined, "1" );

  console.log(DiegoStudent.greet());
  // Hola soy Diego Rojas y tengo 32 años de edad.
  
  
})()