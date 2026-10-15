(() => {
    class Person {
        id; // Privado, solo usado en esta clase
        fullName; // Accesible desde afuera
        age; // Visible en Persona y en sus subclases
        static country = "Bogotá"; // Accesible sin necesidad de instanciar la clase
        constructor(fullName, id, age) {
            this.fullName = fullName;
            this.id = id;
            this.age = age;
        }
    }
    console.log(Person.country); // Bogotá
    const Diego = new Person("Diego Rojas", "1022387268");
    console.log(Diego.fullName);
    // console.log(Diego.id);           // ❌ Error: 'cedula' es privada.
    // console.log(Diego.age);          // ❌ Error: 'age' es protegida.
})();
export {};
