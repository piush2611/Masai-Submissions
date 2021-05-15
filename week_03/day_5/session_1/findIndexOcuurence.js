function findIndexPos(arr, x) {
    var count = 0, arr2 = [];
    for( var i =0; i < arr.length; i++) {
        if(x == arr[i]) {
            arr2.push(i);
        } else if(x !== arr[i]) {
            count++
        }
    }
    if(count == arr.length) {
        console.log('-1')
    } else 
        console.log("Index of position of occurences of value in given array ",arr2)
}
findIndexPos([10,11,'m','e','s','s','i','messi','messi','lionel'], 'messi')

//test-cases : [10,11,12,13,15,15,18], 18
//             [10,11,12,13,15,15,18], 15 
//             [10,11,12,13,15,15,18,25,25,24,23], 30
//             [10,11,12,13,15,15,18,25,25,24,23], 25