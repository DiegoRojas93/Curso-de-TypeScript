(() => {

  class Avenger {
    constructor(
      private name: string,
      protected nickname: string
    ){
      this.start()
    }
    protected start():void { console.log(`${ this.name } es ahora un avenger.`);}

    private greetName():string { return this.name }
    protected greetNickName():string { return this.nickname }


  }

  class XMen extends Avenger {
    constructor(
      name: string,
      nickname: string,
      public power?: number
    ) {
      super(name, nickname)
    }

    protected start():void { console.log(`${ this.greetNickName() } es un Xmen.`);}

    greet(){ console.log(`Hola, soy ${ this.greetNickName() }`) }
  }

  const avenger1 = new Avenger("Tony Stark", "Iron man");
  // Tony Stark es ahora un avenger.

  const avenger2 = new XMen("Charles Xavier", "Profesor X");
  // Profesor X es un Xmen.

  avenger2.greet()
  // Hola, soy Profesor X
  

})()