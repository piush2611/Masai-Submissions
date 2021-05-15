
function countVowel(word) {
    var vowelCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "a")
            vowelCount++
        else if (word[i] == "e")
            vowelCount++
        else if (word[i] == "i")
            vowelCount++
        else if (word[i] == "o")
            vowelCount++
        else if (word[i] == "u")
            vowelCount++
        else if(word[i] == "A")
            vowelCount++
        else if(word[i] == "E")
            vowelCount++
        else if(word[i] == "I")
            vowelCount++
        else if(word[i] == "O")
            vowelCount++
        else if(word[i] == "U")
            vowelCount++
    }
    console.log(vowelCount);
    return vowelCount;
}

// callling a func
countVowel("piyuShSaudagAreaEiOu")

// storing the value
var val = countVowel("piyuShSaudagAre")
