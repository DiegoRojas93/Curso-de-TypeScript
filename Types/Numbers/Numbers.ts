(() => {
  let avengers: number = 10,
    villians: number = 5;

  let msg = avengers > villians ? "Ganamos"
    : avengers === villians ? "Ganamos"
    : "Perdemos"

  console.log(msg);
  
})()