function checkEleBefore(arr) {
    var prev = arr[0]
    var A = arr.map( function(ele) {
        if( prev > ele){
            prev = ele
            return -1
        }
        else {
            prev = ele
            return 1
        }
    })
    return A
}

console.log(checkEleBefore([1,2,3,4,1,2,4,3,2,1]))