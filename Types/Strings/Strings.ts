(() => {
  const batman: string = 'Batman',
    linternaVerde: string = "Linterna verde",
    volcanNegro: string = `Héroe: Volcan Negro`;

  const id = 2;

  console.log(`I'm ${ batman }`);
  console.log(`I'm ${ batman } and my identification is ${ id.toString() }`);
  
  
  console.log( batman[10] );                                                // undefined
  // console.log( batman[10].toLocaleUpperCase() );                         // Error
  console.log( batman[10]?.toLocaleUpperCase() );                           // undefined
  console.log( batman[10]?.toLocaleUpperCase() || "No está presente");      // No está presente
  
})()