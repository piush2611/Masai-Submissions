function filterArrayGreaterThan(arr, target) {
    newArr = arr.filter(function(elem) {
        return elem < target;

    })
    return newArr;
}
filteredArray = console.log(filterArrayGreaterThan([1,2,3,4,5,6,7,8], 6));


