Array.prototype.concatUnique = function(otherArray, compareKey = 'id'){
    const mergedArray = this.concat(otherArray);

    let uniques = {};

    mergedArray.forEach(element => {
        const value = element[compareKey];

        uniques[value] = element;
    });

    return Object.values(uniques);
}

Array.prototype.groupBy = function(keySelector, displayNameSelector){
  const map = {};
  this.forEach((item) => {
       const key = keySelector(item);
       const displayName = displayNameSelector ? displayNameSelector(item) : key;
       if (!map[key]) {
           map[key] = {
               groupKey: key,
               groupName: displayName,
               groupValues: [item]
           };
       } else {
          map[key].groupValues.push(item);
       }
  });

  return map;
}

Array.prototype.toObject = function(keyGetter){
  let obj = {};
  this.forEach(item => {
      const key = keyGetter(item);
      obj = {
          ...obj,
          [key]: item
      };
  });
  return obj;
}