function intersectionOfArr(arr1, arr2) {
    var obj = {}, outputArr = [];
    arr1.forEach( function(key) {
        obj[key] = key;
    })
    arr2.forEach( function(key) {
        if( obj[key] == key){
            outputArr.push(key)
        } else {
            null
        }
    })
    return outputArr
}

console.log(intersectionOfArr([1,2,3,4], [3,4,5,6]))