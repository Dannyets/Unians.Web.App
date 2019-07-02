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

export default {
  delay,
  getRandomNumbers
};
