(() => {
    // Arrays
    const avengers = ["Iron man", "Capitan America", "Thor"];
    let [, avenger2] = avengers;
    console.log(avenger2);
    // Tuplas
    const avengersTupla = [1, "Iron man", true];
    let [postion, nickName, isAlive] = avengersTupla;
    console.log({ postion, nickName, isAlive });
})();
export {};
