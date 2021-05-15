function disjoint(arr1, arr2) {
    var obj = {}, count = 0;
    arr1.forEach(function(key) {
        obj[key] = key
    })
    arr2.forEach( function(key) {
        if( obj[key] == key){
            count++
        } else 
            null
    })
    if( count > 0)
        return false
    else
        return true
}

console.log(disjoint([1,2,3,4], [8,5,6,7]))

// test-cases : [1, 2, 3, 4], [8, 1, 6, 7]
//              [1, 2, 3, 4], [5,6,6,7,8,9]
//              [1, 2, 3, 4], [5,4,6,6,7,7,8,9]