
function avgMarks(student) {
    student.average()
}
student = {
    name:'name',
    marks: [50,30,100,80],
    average : function() {
        var sum = 0;
        for (var i = 0; i < this.marks.length; i++) {
            sum = sum + this.marks[i];
        }
        avg = sum / this.marks.length;
        console.log("The average of marks is " + avg);
    }

}
avgMarks(student);