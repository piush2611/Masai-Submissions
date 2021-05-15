function arraySymmetricDifference(arr1,arr2) {
    for(var i = arr1.length; i >= 0; i--) {
        for(var j = arr2.length; j >= 0; j--) {
            if(arr1[i] === arr2[j]) {
                arr1.splice(i,1)
                arr2.splice(j,1)
            }
        }
    }
    for(var i=0; i<arr2.length; i++)
        arr1.push(arr2[i]);
    console.log(arr1);
    return arr1;
}

arraySymmetricDifference(['1','2','3','4','5','6','9','10'],['1','5','6','7','8','2','9'])


//test-cases : ['1','2','3','4','5','6','10'],['1','5','6','7','8','9']
//             ['1','2','3','4','5','6','9','10'],['1','5','6','7','8','2','9']
