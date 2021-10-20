function arrayPlusArray(arr1, arr2) {
    var sum1 = arr1.reduce((a, b) => a + b, 0)
    var sum2 = arr2.reduce((a, b) => a + b, 0)
    ;
    return sum1 + sum2;
    //return arr1 + arr2; //something went wrong
  }


  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // Returns 21
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // Returns -21