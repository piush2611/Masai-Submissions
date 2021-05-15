function removeDuplicates(arr) {
    var arr1 = [], count = 0;
    for(var i =0; i < arr.length; i++) {
        for( var k =0; k < arr1.length; k++) {
            if( arr[i] ==arr1[k])
                count++
        }
        if(count == 0) 
            arr1.push(arr[i]);
        count = 0;
    }
    return arr1;
}

console.log(removeDuplicates([1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,]))