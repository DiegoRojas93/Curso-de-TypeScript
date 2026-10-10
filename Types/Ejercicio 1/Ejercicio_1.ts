(() => {



    // Tipos

    type superhero = string;

    const batman: superhero = 'Bruce';

    const superman: superhero = 'Clark';

  

    const existe: boolean = false;

  

    // Tuplas

    type heroicDuo = [ string, string ];
    type villian = [ string, number, boolean? ];

    const parejaHeroes: heroicDuo = [batman,superman];

    const villano: villian = ['Lex Lutor',5,true];

  

    // Arreglos

    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

  

    //Enumeraciones

    enum forceHero {
      acuaman,
      batman,
      flash = 5,
      superman = 100
    }

    const fuerzaFlash: forceHero = forceHero.flash;

    const fuerzaSuperman: forceHero = forceHero.superman;

    const fuerzaBatman: forceHero = forceHero.batman;

    const fuerzaAcuaman: forceHero = forceHero.acuaman;

  

    // Retorno de funciones

    function activar_batiseñal():string{

      return 'activada';

    }

  

    function pedir_ayuda():void{

      console.log('Auxilio!!!');

    }

  

    // Aserciones de Tipo

    const poder: any = '100';

    const largoDelPoder:number = ( poder as string ).length;

    console.log( largoDelPoder );

  })()