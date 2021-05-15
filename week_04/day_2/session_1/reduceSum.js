function reduceSum(arr, target) {
   newArr = arr.filter(function (ele) {
      return ele > target
   }).reduce(function (a, c) {
      return a + c;
   })
   return newArr
}

console.log(reduceSum([1,2,3,4,5,6,7,8,9],5))