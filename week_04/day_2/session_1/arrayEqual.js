function arrayEqual(arr, target) {
    newArr = arr.filter(function (ele) {
        return ele != target
    }).map(function (ele) {
        return ele * ele
    })
    return newArr
}

console.log(arrayEqual([1, 2, 3, 4, 1, 5, 6, 7, 1, 8, 9, 1, 10], 7))
