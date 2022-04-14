function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      result += arr[i] 
    } 
  } return result
} 

function opposite(number) {
  return number * (-1);
}

function removeChar(str){
  return str.slice(1, str.length - 1)
 };

 function repeatStr (n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

module.exports= {positiveSum, opposite, removeChar, repeatStr} ;


