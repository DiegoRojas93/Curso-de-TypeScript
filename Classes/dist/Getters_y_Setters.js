(() => {
    class Avenger {
        name;
        nickname;
        constructor(name, nickname) {
            this.name = name;
            this.nickname = nickname;
            console.log(`Fue creado el avenger ${this.nameAvenger}`);
        }
        get nameAvenger() {
            return this.name;
        }
        get publicNameAvenger() {
            return this.name;
        }
        set nicknameAvenger(name) { this.name = name; }
    }
    const avenger1 = new Avenger("Tony Stark", "Iron man");
    // Fue creado el avenger Iron man
    avenger1.nicknameAvenger = "Doctor Doom";
    console.log(avenger1.publicNameAvenger);
    // Doctor Doom
})();
export {};
