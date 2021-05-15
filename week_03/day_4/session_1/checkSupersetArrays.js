function checkSupersetArrays(arr1, arr2) {
    var joint = 0;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j])
                joint++
        }
    }
    if(joint === (arr2.length)) {
        console.log("arr1 is a superset of arr2");
    } else
        console.log("not a superset");
}


checkSupersetArrays(['1', '8', '7', '6', '9', '10', '11', '12', '13'], ['6', '7', '8', '9', '10'])

//test-cases : arr1['1', '8', '7', '6', '9', '10', '11', '12', '13'], arr2['6', '7', '8', '9', '10', '1', '100'] -> not a superset
//             arr1['1', '8', '7', '6', '9', '10', '11', '12', '13'], arr2['6', '7', '8', '9', '10', '1'] -> superset
//             arr1['1', '8', '7', '6', '9', '10', '11', '12', '13'], ['6', '7', '8', '9', '10'] -> superset