(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let forceHero;
    (function (forceHero) {
        forceHero[forceHero["acuaman"] = 0] = "acuaman";
        forceHero[forceHero["batman"] = 1] = "batman";
        forceHero[forceHero["flash"] = 5] = "flash";
        forceHero[forceHero["superman"] = 100] = "superman";
    })(forceHero || (forceHero = {}));
    const fuerzaFlash = forceHero.flash;
    const fuerzaSuperman = forceHero.superman;
    const fuerzaBatman = forceHero.batman;
    const fuerzaAcuaman = forceHero.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
export {};
