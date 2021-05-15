function findCountDuplicates(obj, target) {
    // var arr =[];
    var targetValue = target;
    var count = 0;
    var array = obj['arr'];
    for(var i =0; i < array.length; i++) {
        if( array[i] === targetValue) {
            count++
        }
    }
    return count;
}
console.log(findCountDuplicates({arr:[1,2,1,1,1,2,3,4,5,6,1]}, 1))