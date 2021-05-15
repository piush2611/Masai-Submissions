// declaring a func
function averageDivisible(x) {
    var sum = 0, avg;
    var numbersWhichAreDivisible = [];
    for (var i = 1; i <= x; i++) {
        if(i % 3 == 0) {
            numbersWhichAreDivisible.push(i);
            sum = sum + i;
        }
    }
    avg = sum/(numbersWhichAreDivisible.length);
    console.log(avg);
    return avg
}
// calling a func
averageDivisible(20)

//storing return value
var val = averageDivisible(20)

// test-cases : (20,2)=> 11, (20,3)=> 10.5 , (40,2)=> 21, (400,5)=> 202.5