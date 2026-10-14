(() => {
    class Person {
        id;
        fullName;
        age;
        static country = "Bogotá";
        constructor(fullName, id, age) {
            this.fullName = fullName;
            this.id = id;
            this.age = age;
        }
    }
    console.log(Person.country);
    const Diego = new Person("Diego Rojas", "1022387268");
    console.log(Diego.fullName);
})();
export {};
