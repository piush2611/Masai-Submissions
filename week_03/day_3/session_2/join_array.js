function joinArray(arr, c) {
    var str = arr[0];
    for (var i = 1; i < arr.length; i++) {
        str = str + c + arr[i];
    }
    console.log(str);
    return str;
}

// calling th func
joinArray(['1', '2', 'a', 'c', 'd', 'efgh', 'charlie'], "*")

// storing in val
var val = joinArray(['1', '2', 'a', 'c', 'd', 'efgh', 'charlie'])