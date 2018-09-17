function isIsogram(str){
    if (!str.length) return true;
    
    let charMap = str.split('').reduce((charMap, char) => {
      charMap[char] = ++charMap[char.toLowerCase()] || 1;
      return charMap;
    }, {});
    
    for (char in charMap) {
        if (charMap[char] > 1) {
            return false;
        }
    }

    return true;
}


console.log(isIsogram('qyxdwfzbRvklhcisptajgmrneou'));