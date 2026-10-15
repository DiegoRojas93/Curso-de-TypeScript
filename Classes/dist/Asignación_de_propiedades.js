(() => {
    class Person {
        id;
        fullName;
        age;
        static country = "Bogotá"; // Accesible sin necesidad de instanciar la clase
        constructor(id, fullName, age) {
            this.id = id;
            this.fullName = fullName;
            this.age = age;
        }
    }
    console.log(Person.country); // Bogotá
    const Diego = new Person("Diego Rojas", "1022387268");
    console.log(Diego.fullName);
    // console.log(Diego.id);                 // ❌ Error: 'cedula' es privada.
    // console.log(Diego.age);                // ❌ Error: 'age' es protegida.
})();
export {};
