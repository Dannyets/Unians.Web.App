const delay = ms => new Promise(res => setTimeout(res, ms));

const getRandomNumbers = numberOfElements => {
  let numbers = [];
  
  if(!numberOfElements){
    return numbers;
  }

  for (let index = 0; index < numberOfElements; index++) {
    let randomValue = Math.random() * 200 - 100;
    randomValue = Math.round(randomValue);

    numbers.push(randomValue);
  }

  return numbers;
}

const objectToQueryString = params => {
  const stringParams = Object.keys(params).map(key => `${key}=${params[key]}`)

  let queryString; 

  if(stringParams.length > 0){
    queryString = `?${stringParams.join('&')}`;
  }

  return queryString;
}

const mergeWhiteSpace = (value) => {
  let newValue, prevValue;

  prevValue = value.replace('\\n', '');

  do {
    if(newValue){
      prevValue = newValue;
    }

    newValue = prevValue.replace('  ', ' ');
  }
  while (prevValue !== newValue);

  return newValue;
}

export default {
  delay,
  getRandomNumbers,
  objectToQueryString,
  mergeWhiteSpace
};
