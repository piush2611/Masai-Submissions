function reverseString(input) {
    var str = input; 
var output = "";
for(var i = str.length - 1; i >=0; i--) {
    output = output + str[i]
}
console.log(output);
return output;
}
reverseString("Piyush")