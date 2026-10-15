(() => {
    class Avenger {
        name;
        nickname;
        constructor(name, nickname) {
            this.name = name;
            this.nickname = nickname;
            this.start();
        }
        start() { console.log(`${this.name} es ahora un avenger.`); }
        greetName() { return this.name; }
        greetNickName() { return this.nickname; }
    }
    class XMen extends Avenger {
        power;
        constructor(name, nickname, power) {
            super(name, nickname);
            this.power = power;
        }
        start() { console.log(`${this.greetNickName()} es un Xmen.`); }
        greet() { console.log(`Hola, soy ${this.greetNickName()}`); }
    }
    const avenger1 = new Avenger("Tony Stark", "Iron man");
    // Tony Stark es ahora un avenger.
    const avenger2 = new XMen("Charles Xavier", "Profesor X");
    // Profesor X es un Xmen.
    avenger2.greet();
    // Hola, soy Profesor X
})();
export {};
