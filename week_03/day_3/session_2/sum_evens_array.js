function sumEvenArrays(arr) {
    var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 == 0)
        sum = sum + Number(arr[i]);
}
console.log("sum of even numbers in given array is : " + sum)
} 
sumEvenArrays(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '20', '30', '40', '100'])
