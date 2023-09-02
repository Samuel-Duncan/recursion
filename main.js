const fibonacciIteration = (n) => {
  const array = [0, 1];
  for (let i = 2; i <= n - 1; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array;
};

console.log(fibonacciIteration(8));

const fibonacciRecursion = (n) => {
  const result = [0, 1];

  const generateFibonacci = () => {
    const nextValue = result[result.length - 1] + result[result.length - 2];
    result.push(nextValue);

    if (result.length >= n) {
      return result;
    }

    return generateFibonacci();
  };

  return generateFibonacci();
};

console.log(fibonacciRecursion(8));

const mergeSort = (array) => {
  const mid = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  if (array.length <= 1) {
    return array;
  }

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));

  function merge(leftHalf, rightHalf) {
    let leftIndex = 0;
    let rightIndex = 0;
    let sortedIndex = 0;
    const leftLength = leftHalf.length - 1;
    const rightLength = rightHalf.length - 1;
    const sortedArray = [];

    while (leftIndex <= leftLength && rightIndex <= rightLength) {
      if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
        sortedArray[sortedIndex++] = leftHalf[leftIndex++];
      } else {
        sortedArray[sortedIndex++] = rightHalf[rightIndex++];
      }
    }

    for (; leftIndex <= leftLength; leftIndex++) {
      sortedArray[sortedIndex++] = leftHalf[leftIndex];
    }

    for (; rightIndex <= rightLength; rightIndex++) {
      sortedArray[sortedIndex++] = rightHalf[rightIndex];
    }

    return sortedArray;
  }
};

const unsortedArray = [1, 9, 3, 7, 5, 6, 4, 8, 2];

console.log(mergeSort(unsortedArray));
