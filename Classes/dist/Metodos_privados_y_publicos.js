(() => {
    class Person {
        fullName;
        id;
        age;
        static country = "Bogotá"; // Accesible sin necesidad de instanciar la clase
        // Método statico
        static getClassName() {
            return this.name; // Retornara: Person
        }
        constructor(fullName, id, age) {
            this.fullName = fullName;
            this.id = id;
            this.age = age;
        }
        // Método publico
        getFullName() {
            return this.fullName;
        }
        // Método privado: solo se puede invocar desde el interior de la clase
        #getIdPerson() {
            return this.id;
        }
        // Método protegido
        getAge() {
            return this.age;
        }
    }
    class Student extends Person {
        idStudent;
        constructor(fullName, // Sin 'public'/'private'
        id, // Sin 'private'
        age, // Acepta undefined
        idStudent) {
            super(fullName, id, age);
            this.idStudent = idStudent;
        }
        greet() {
            return `Hola soy ${this.fullName} y tengo ${this.getAge() || "33"} años de edad.`;
        }
    }
    console.log(Person.getClassName()); // Person
    const Diego = new Person("Diego Rojas", "1022387268");
    console.log(Diego.getFullName());
    // console.log(Diego.getIdPerson());
    // console.log(Diego.getAge());
    const DiegoStudent = new Student("Diego Rojas", "1022387268", undefined, "1");
    console.log(DiegoStudent.greet());
    // Hola soy Diego Rojas y tengo 32 años de edad.
})();
export {};
