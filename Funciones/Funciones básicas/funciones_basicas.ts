((): void => {

  const HERO: string = "Flash";

  function returnName(): string {
    return HERO;
  }

  console.log(returnName());
  // Flash



  const activateBatiSignal = (): string => "Bati señal activada!"

  console.log( activateBatiSignal(), typeof activateBatiSignal());
  // Bati señal activada! string
  

})()