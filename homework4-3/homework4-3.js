let sampleArray = [10, [14, [55]], [25, 13], 2];
let count = 0;
let getDepth = (array) => {
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (Array.isArray(element)) {
      count += 1;
      getDepth(element);
    }
  }
  return count;
};

console.log(getDepth(sampleArray));
