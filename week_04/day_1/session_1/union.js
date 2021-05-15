function union(arr1,arr2) {
    var obj = {};
    arr1.forEach(function(ele) {
        obj[ele] = ele;
    })
    arr2.forEach(function(ele) {
        obj[ele] = ele;
    })
    return Object.keys(obj)
}

console.log(union([1,2,3,4,5,6,7,7,7,7,7,8], [1,2,2,2,2,2,3,3,4,5]))

// test-cases : [1,2,3,4,5,6,7,8], [1,2,3,4,11]
//              [1,2,3,4,5,6,7,8], [1,21,32,41,11]
//              [1,2,3,4,5,6,7,7,7,7,7,8], [1,2,2,2,2,2,3,3,4,5]
//              [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 8], [1, 2, 2, 2, 2, 2, 3, 3, 4, 5,11,12,13,14,15,16]