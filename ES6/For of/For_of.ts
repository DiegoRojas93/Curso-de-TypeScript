(() => {

  type Avenger = {
    nickName: string,
    weapon: string
  }

  const AVENGER1: Avenger = { nickName: "Iron Man", weapon: "Suit" },
    AVENGER2: Avenger = { nickName: "Captain America", weapon: "Shield" },
    AVENGER3: Avenger = { nickName: "Thor", weapon: "Hammer" };


  for (const key in AVENGER1) {
    if (!Object.hasOwn(AVENGER1, key)) continue;
    
    const element = AVENGER1[key as keyof Avenger];
    
    console.log(key, element);
    
  }

  const AVENGERS = [ AVENGER1, AVENGER2, AVENGER3 ];

  for (const avenger of AVENGERS) {
    console.log(avenger);
    
  }
  
})()