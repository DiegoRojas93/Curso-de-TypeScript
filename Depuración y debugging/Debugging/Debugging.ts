(() => {

  console.log("Hola 1");

  type person = {
    name: string,
    age: number
  }

  console.log("Hola 2");

  const Diego: person = {
    name: "Diego Rojas",
    age: 32
  }

  console.log("Hola 3");

  console.log({ Diego });
  
})()