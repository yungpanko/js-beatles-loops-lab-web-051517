function theBeatlesPlay(musiciansArray, instrumentsArray) {
  let array = [];
  for (let i = 0; i < musiciansArray.length; i++) {
    array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  let newArray = []
  while (array.length > 0) {
    newArray.push(array[0] + '!!!');
    array.shift();
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return array;
}
