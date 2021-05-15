function splitString(inp, char){
    var arr = [];
    var str = "";
    for( var i =0; i <inp.length; i++){
        if( inp[i] != char)
            str+= inp[i]
        else {
            arr.push(str);
            str= "";
        }
    }
    arr.push(str)
    return arr
}

console.log(splitString("a*bc*def*ghi*jklmn*opqrst", "*"))

// testCases : a/b/cd/efg/hijk/lmnop
//             a*bc*def*ghi*jklmn*opqrst