const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText,  a * b);
  }
  
  const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

  multiplicator(2, 4, 'Multiplied a string and 4, the result is:');
