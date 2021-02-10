function linearSearch(arr, v) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3], 2));
