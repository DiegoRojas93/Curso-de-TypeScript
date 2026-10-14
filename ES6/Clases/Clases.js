(() => {
    class Avenger {
        nickName;
        power;
        constructor(nickName = "No name", power = 0) {
            this.nickName = nickName;
            this.power = power;
        }
    }
    class FlyingAvenger extends Avenger {
        flying;
        constructor(nickName = "No name", power = 0) {
            super(nickName, power);
            this.flying = true;
        }
    }
    const avenger1 = new Avenger("Hulk", 9001), avenger2 = new FlyingAvenger("Black widow", 5);
    console.log(avenger1);
    console.log(avenger2);
})();
export {};
