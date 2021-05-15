
function avgMarks(student) {
    var sum = 0;
    for(var i = 0; i < student.marks.length; i++) {
        sum = sum + student.marks[i];
    }
    avg = sum / student.marks.length;
    console.log("The average of marks is " + avg);
}
avgMarks({name:'messi',marks: [50,30,100,80,100,200]})

//test-cases : {name:'messi',marks: [50,30,100,80]}
//             {name:'messi',marks: [50,30,100,80,100]}
//             {name:'messi',marks: [50,30,100,80,100,200]}

