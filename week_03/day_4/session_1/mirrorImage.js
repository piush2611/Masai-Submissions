

function mirrorImage(input) {
    var smallAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var capAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var mirrored = "";
    for (var i = 0; i < input.length; i++) {
        if(input[i] == "a")
            mirrored += smallAlpha[25];
        else if(input[i] == "b")
            mirrored += smallAlpha[24];
        else if(input[i] == "c")
            mirrored += smallAlpha[23];
        else if(input[i] == "d")
            mirrored += smallAlpha[22];
        else if(input[i] == "e")
            mirrored += smallAlpha[21];
        else if(input[i] == "f")
            mirrored += smallAlpha[20];
        else if(input[i] == "g")
            mirrored += smallAlpha[19];
        else if(input[i] == "h")
            mirrored += smallAlpha[18];
        else if(input[i] == "i")
            mirrored += smallAlpha[17];
        else if(input[i] == "j")
            mirrored += smallAlpha[16];
        else if(input[i] == "k")
            mirrored += smallAlpha[15];
        else if(input[i] == "l")
            mirrored += smallAlpha[14];
        else if(input[i] == "m")
            mirrored += smallAlpha[13];
        else if(input[i] == "n")
            mirrored += smallAlpha[12];
        else if(input[i] == "o")
            mirrored += smallAlpha[11];
        else if(input[i] == "p")
            mirrored += smallAlpha[10];
        else if(input[i] == "q")
            mirrored += smallAlpha[9];
        else if(input[i] == "r")
            mirrored += smallAlpha[8];
        else if(input[i] == "s")
            mirrored += smallAlpha[7];
        else if(input[i] == "t")
            mirrored += smallAlpha[6];
        else if(input[i] == "u")
            mirrored += smallAlpha[5];
        else if(input[i] == "v")
            mirrored += smallAlpha[4];
        else if(input[i] == "w")
            mirrored += smallAlpha[3];
        else if(input[i] == "x")
            mirrored += smallAlpha[2];
        else if(input[i] == "y")
            mirrored += smallAlpha[1];
        else if(input[i] == "z")
            mirrored += smallAlpha[0];
        else if(input[i] == "A")
            mirrored += capAlpha[25];
        else if(input[i] == "B")
            mirrored += capAlpha[24];
        else if(input[i] == "C")
            mirrored += capAlpha[23];
        else if(input[i] == "D")
            mirrored += capAlpha[22];
        else if(input[i] == "E")
            mirrored += capAlpha[21];
        else if(input[i] == "F")
            mirrored += capAlpha[20];
        else if(input[i] == "G")
            mirrored += capAlpha[19];
        else if(input[i] == "H")
            mirrored += capAlpha[18];
        else if(input[i] == "I")
            mirrored += capAlpha[17];
        else if(input[i] == "J")
            mirrored += capAlpha[16];
        else if(input[i] == "K")
            mirrored += capAlpha[15];
        else if(input[i] == "L")
            mirrored += capAlpha[14];
        else if(input[i] == "M")
            mirrored += capAlpha[13];
        else if(input[i] == "N")
            mirrored += capAlpha[12];
        else if(input[i] == "O")
            mirrored += capAlpha[11];
        else if(input[i] == "P")
            mirrored += capAlpha[10];
        else if(input[i] == "Q")
            mirrored += capAlpha[9];
        else if(input[i] == "R")
            mirrored += capAlpha[8];
        else if(input[i] == "S")
            mirrored += capAlpha[7];
        else if(input[i] == "T")
            mirrored += capAlpha[6];
        else if(input[i] == "U")
            mirrored += capAlpha[5];
        else if(input[i] == "V")
            mirrored += capAlpha[4];
        else if(input[i] == "W")
            mirrored += capAlpha[3];
        else if(input[i] == "X")
            mirrored += capAlpha[2];
        else if(input[i] == "Y")
            mirrored += capAlpha[1];
        else if(input[i] == "Z")
            mirrored += capAlpha[0];
    }
    console.log(mirrored);
    return mirrored;
}
mirrorImage("AbCdEfG")