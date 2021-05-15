function countConsonant(word) {
    var consonantCount = word.length;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "a")
            consonantCount--
        else if (word[i] == "e")
            consonantCount--
        else if (word[i] == "i")
            consonantCount--
        else if (word[i] == "o")
            consonantCount--
        else if (word[i] == "u")
            consonantCount--
        else if (word[i] == "A")
            consonantCount--
        else if (word[i] == "E")
            consonantCount--
        else if (word[i] == "I")
            consonantCount--
        else if (word[i] == "O")
            consonantCount--
        else if (word[i] == "U")
            consonantCount--
    }
    console.log(consonantCount);
    return consonantCount;
}

// callling a func
countConsonant("piyuShSaudagAre")

// storing the value
var val = countConsonant("piyuShSaudagAre")