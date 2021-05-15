function arrayDifference(arr1,arr2) {
    for(var i = arr1.length; i >= 0; i--) {
        for(var j = arr2.length; j >= 0; j--) {
            if(arr1[i] === arr2[j]) {
                arr1.splice(i,1);
            }
        }
    }
    console.log(arr1);
    return arr1;
}

arrayDifference(['10','10','11','12','13','14'],['12','13','13','14','20','21','22'])


//test-cases : ['1','5','6','7','8','9','10'],['1','5','6','7']
//             ['10','10','11','12','13','14'],['12','13','13','14','20','21','22']

