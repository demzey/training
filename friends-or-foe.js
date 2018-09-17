const friends = ['Mark', 'Meynard', 'Cali']

/* BEST ANSWER */
// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }


let friend = (friends) => {
  return friends.filter(names => {return names.length == 4; });
}

console.log(friend(friends));