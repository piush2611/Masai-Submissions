function checkSubsetArrays(arr1, arr2) {
    var joint = 0;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j])
                joint++
        }
    }
    if(joint === (arr1.length)) {
        console.log("arr1 is a subset of arr2");
    } else
        console.log("not a subset");
}


checkSubsetArrays(['1', '8', '7', '6', '9'], ['6', '7', '8', '9', '10', '1'])

// test-cases : arr1['100', '8', '7', '6'], arr2['6', '7', '8', '9', '10', '1'] -> Not a subset
//             arr1['1', '8', '7', '6'], arr2['6', '7', '8', '9', '10', '1'] -> subset
//             arr1['1', '8', '7', '6', '9'], arr2['6', '7', '8', '9', '10', '1'] -> subset