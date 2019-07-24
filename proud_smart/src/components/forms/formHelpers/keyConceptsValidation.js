function KeyConceptsValidation(str) {
  let arr = str.split(" ");
  console.log(arr);
  let arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    if (arr[i][0] === "#") {
    } else {
      return `the word in position ${i +
        1} is invalid please make sure there is a '#' at the beginning of it`;
    }
  }
}

export default KeyConceptsValidation;
