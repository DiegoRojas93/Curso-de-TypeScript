(() => {
    class Mutant {
        realName;
        nickName;
        constructor(realName, nickName) {
            this.realName = realName;
            this.nickName = nickName;
        }
        greet() { console.log(this.nickName); }
        action(action = "Sobrevivir en la sociedad.") { console.log(action); }
    }
    class XMen extends Mutant {
        action(action = "Salvar el mundo!") { console.log(action); }
    }
    class Villian extends Mutant {
        action(action = "Desruir el mundo!") { console.log(action); }
    }
    class civilMutant extends Mutant {
    }
    const mutant1 = new civilMutant("Lorelei Travis", "Lorelei"), mutant2 = new XMen("Charles Xavier", "Profesor X"), mutant3 = new Villian("Erik Lehnsherr", "Magneto");
    mutant1.action("Trabajar para vivir.");
    // Trabajar para vivir.
    mutant2.action();
    // Salvar el mundo!
    mutant3.action();
    // Desruir el mundo!
})();
export {};
