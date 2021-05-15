function unionArrays(arr, arr1) {
    for(var j = 0; j < arr.length; j++) {
        for(k = 0; k < arr1.length; k++) {
            if(arr[j] == arr1[k]) {
                arr1.splice(k, 1);
            }
        }
    }
    for(var i = 0; i < arr1.length; i++) {
        arr.push(arr1[i]);
    }
    removeDuplicates(arr);
    console.log(arr);
    return arr;
}
function removeDuplicates(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[i] == arr[j] && i != j) {
                arr.splice(j, 1)
            }
        }
    }
}

unionArrays(['10','10','11','12','13','14'],['12','13','13','14','20','21','22'])

//test-cases : ['1', '2', '3', '4', '5'],['4', '5', '6', '7', '8']
//             ['1', '2', '3', '4', '5'],['4', '5', '6', '7', '8','9]
//             ['10','11','12','13','14'],['12','13','14','20','21','22']
//             ['10','10','11','12','13','14'],['12','13','13','14','20','21','22']

