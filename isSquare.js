const isSquare = (n) => {
  
  return n >= 0 && Math.sqrt(n) % 1 === 0;
  
  // return Math.sqrt(n) % 1 === 0; // BEST ANSWER
}

console.log(isSquare(1));