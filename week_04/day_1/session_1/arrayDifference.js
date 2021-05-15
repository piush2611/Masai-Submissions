function diff(arr1, arr2) {
    var obj = {}, arr = [];
    arr2.forEach(function (ele) {
        obj[ele] = ele;
    })
    arr1.forEach(function (ele) {
        if (obj[ele] != ele) {
            arr.push(ele)
        }
    })
    return arr

}

console.log(diff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 5, 6]))