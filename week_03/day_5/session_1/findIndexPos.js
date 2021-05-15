function findIndexPos(arr, x) {
    count = 0;
    for( var i =0; i < arr.length; i++) {
        if(x == arr[i]) {
            console.log(i);
            break;
        } else if(x !== arr[i]) {
            count++;
        }
    }
    if(count == arr.length) {
        console.log('-1');
    }
}
findIndexPos(['10','11','12','13','15','15','18','m','e','s','s','i'], "s")

//test-cases : ['10','11','12','13','15','15','18'], 18
//             ['10','11','12','13','15','15','18'], 15
//             ['10','11','12','13','15','15','18'], 11
//             ['10','11','12','13','15','15','18'], 28