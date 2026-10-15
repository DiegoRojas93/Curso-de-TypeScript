(() => {
    class Person {
        id;
        fullName;
        age;
        static country = "Bogotá";
        constructor(id, fullName, age) {
            this.id = id;
            this.fullName = fullName;
            this.age = age;
        }
    }
    console.log(Person.country);
    const Diego = new Person("Diego Rojas", "1022387268");
    console.log(Diego.fullName);
})();
export {};
