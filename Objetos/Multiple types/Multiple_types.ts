(()=>{

  type Hero = { name: string, age: number, powers: string[], greet?: () => string };


  let myCustomVariable: ( string | number | Hero ) = "Diego";

  console.log( myCustomVariable );
  

  myCustomVariable = 32;
  
  console.log( myCustomVariable );
  

  myCustomVariable = {
    name: "Clark Kent",
    age: 35,
    powers: ["Fuerza", "Volar", "Rayos X"]
  }
  
  console.log( myCustomVariable );
})()