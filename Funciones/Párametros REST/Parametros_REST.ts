((): void => {
  const sum = ( firstNumber: number, ...restNumbers: number[] ): number => {
    let total = firstNumber;

    if( restNumbers.length >= 1 ) total = restNumbers.reduce(( acum, num ) => acum += num , firstNumber )

    return total;
  }

  console.log( sum(1) );
  // 1

  console.log( sum(1, 2) );
  // 3
  
  console.log( sum(1, 2, 3) );
  // 6
  
  console.log( sum(1, 2, 3, 4) );
  // 10
  
  console.log( sum(1, 2, 3, 4, 5) );
  // 15
  
})()