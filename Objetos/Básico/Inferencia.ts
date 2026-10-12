(()=>{

  let hero = {
    name: "Superman",
    age: 35,
    powers: ["Fuerza", "Volar", "Rayos X"]
  }

  // Error de compilación: La propiedad 'telefono' no existe en el tipo del objeto
  // hero.telefono = "123456789"; 

  //  Error de compilación: No puedes cambiar el tipo de una propiedad
  // hero.age = 45;
})()