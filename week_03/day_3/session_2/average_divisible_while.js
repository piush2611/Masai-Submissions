// Declaring a func
function averageDivisibleWhile(x) {
    var i =1, sum = 0, avg, arr = [];
    while(i < x) {
        if(i % 11 == 0) {
            arr.push(i);
            sum = sum + i;
        }
        i++
    }
    avg = sum/ (arr.length);
    console.log(avg);
    return avg
}

// calling a func
averageDivisibleWhile(100)

// storing return value from func
var val = averageDivisibleWhile(100)

// test_cases : (20,3)=> 10.5, (40,3)=> 21, (100,11)=> 55