function checkSubsetArray(arr1, arr2) {
    var obj = {}, count = 0;
    arr2.forEach(function (ele) {
        obj[ele] = ele;
    })
    arr1.forEach(function (ele) {
        if (obj[ele] == ele)
            count++
    })
    count == arr1.length ? console.log("true") : console.log("false")
}

checkSubsetArray([1,2,3,1,11], [1,2,3,4,5,6,7,8])

// test-cases : [1,2,3,1], [1,2,3,4,5,6,7,8]
//              [1,2,2,2,2,3,1], [1,2,3,4,5,6,7,8]
//              [11,12,12,13], [1,2,3,4,5,6,7,8]