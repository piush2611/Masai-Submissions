function intersectionArrays(arr1,arr2) {
    var arr3 = [];
    for( var i =0; i < arr1.length; i++) {
        for( j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                arr3.push(arr1[i]);
            } 
        }
    }
    console.log(arr3)
}


intersectionArrays(['1','2','3','4','5'],['6','7','8','9','5'])