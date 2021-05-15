function squareElements(arr) {
    newArr = arr.map(function(value) {
        return value*value;
    })
}
squareElements([1,2,3,4,5])
console.log(newArr)
