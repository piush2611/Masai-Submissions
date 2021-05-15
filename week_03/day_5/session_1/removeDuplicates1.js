function removeDuplicates(arr){
    var obj = {};
    for(var i =0; i < arr.length; i++) {
        obj[arr[i]] = 1;
    }
    return Object.keys(obj)
}

console.log(removeDuplicates([1,2,31,31,1,1,1,1,1,2,2,2,2,2,3,4]))

// test-cases : [1,2,31,31,1,1,1,1,1,2,2,2,2,2,3,4]
//              [1,2,31,31,1,1,1,1,1,2,2,2,2,2,3,4,12,12,12,121,12,12,1,1,1,3,4,5,4]