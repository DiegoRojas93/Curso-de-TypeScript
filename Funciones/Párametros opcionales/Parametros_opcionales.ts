((): void => {
  const fullName = ( firstName: string, lastName?: string ): string => `${firstName} ${ lastName || "" }`

  console.log( fullName("Tony", "Stark") );
  // Tony Stark

  console.log( fullName("Tony") );
  // Tony
  
})()