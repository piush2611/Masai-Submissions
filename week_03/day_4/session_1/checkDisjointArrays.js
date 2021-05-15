function checkDisjointArrays(arr1, arr2) {
    var joint = 0;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) 
                joint++
            }
        }
    if (joint > 0) 
        console.log("Arrays are joint")
     else 
        console.log("Arrays are disjoint");
}

checkDisjointArrays(['1', '2', '3', '4', '4', '10000'], ['6', '7', '8', '9', '5'])

//test-cases : arr1['1', '2', '3', '4', '5'], arr2['6', '7', '8', '9', '5'] -> Joint
//             arr1['1', '2', '3', '4', '4'], arr2['6', '7', '8', '9', '5'] -> disjoint
//             arr1['1', '2', '3', '4', '5', '10000'], arr2['6', '7', '8', '9', '5']