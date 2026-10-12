(()=>{

  let hero: { name: string, age: number, powers: string[], telefono?: string, getName?: () => string } = {
    name: "Superman",
    age: 35,
    powers: ["Fuerza", "Volar", "Rayos X"]
  }

  hero.telefono = "123456789"; 

  hero.age = 45;

  hero.getName = function() {
    return this.name
  }
})()