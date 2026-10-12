(()=>{

  type Hero = { name: string, age: number, powers: string[], greet?: () => string };

  let superman: Hero = {
    name: "Clark Kent",
    age: 35,
    powers: ["Fuerza", "Volar", "Rayos X"]
  }

  let batman: Hero = {
    name: "Bruce Wayne",
    age: 40,
    powers: ["Tactico"],
    greet() {
      return `Soy Batman`
    }
  }

  
})()