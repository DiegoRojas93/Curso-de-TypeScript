(() => {

  class Avenger {
    constructor(
      private name: string,
      protected nickname: string
    ){
      console.log(`Fue creado el avenger ${ this.nameAvenger }`);
    }

    private get nameAvenger():string {
      return this.name
    }

    public get publicNameAvenger():string {
      return this.name
    }

    public set nicknameAvenger( name: string ) { this.name = name }

  }

  const avenger1 = new Avenger("Tony Stark", "Iron man");
  // Fue creado el avenger Iron man

  avenger1.nicknameAvenger = "Doctor Doom";

  console.log( avenger1.publicNameAvenger );
  // Doctor Doom
  

})()