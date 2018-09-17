let data = [
    {
      country: 'China',
      pop: 1409517397,
    },
    {
      country: 'India',
      pop: 1339180127,
    },
    {
      country: 'USA',
      pop: 324459463,
    },
    {
      country: 'Indonesia',
      pop: 263991379,
    }
  ];
//remove the element containing 'China' from the array
  let notChina = data.filter(count => {
    return count.country !== 'China'; 
  });

//console.log(notChina);
  // accumulate all the value of of the new array notChina
  let population = notChina.reduce((acc, value) =>  
    acc + value.pop, 0
);
  
// BEST ANSWER
let sum = data.reduce((acc, val) => {
    return val.country == 'China' ? acc : acc + val.pop;
  }, 0);

// FILTER ALL POPULATION AND MAP IT SEPERATETLY
console.log(data.filter(d => d.country != 'China').map(d => d.pop));

console.log(population);
console.log(sum);