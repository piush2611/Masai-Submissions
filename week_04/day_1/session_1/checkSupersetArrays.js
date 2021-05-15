function checkSupersetArray(arr1, arr2) {
    var obj = {}, count = 0;
    arr1.forEach( function(ele) {
        obj[ele] = ele;
    })
    arr2.forEach(function(ele) {
        if(obj[ele] == ele)
            count++
    })
    count == arr2.length ? console.log("true") : console.log("false")}

checkSupersetArray([1,2,3,4,56,42], [2,3,4])

// test-cases : [1,2,3,4,5,6,7,8], [1,2,3,4,11]
//              [1,2,3,4,5,6,7,8], [1,2,3,4,11]
//              [1,2,3,4,5,6,7,8], [1,21,32,41,11]
//              [1,2,3,4,5,6,7,7,7,7,7,8], [1,2,2,2,2,2,3,3,4,5]