var arr = [{ name: "piyush", marks: 67 }, { name: "Lionel", marks: 91 }, { name: "abc", marks: 81 }, { name: "abc", marks: 45 }, { name: "abc", marks: 38 }];
arr.forEach(function (ele) {
   if (ele.marks > 90)
      ele.grade = "A"
   else if (ele.marks >= 80) {
      ele.grade = "B"
   }
   else if (ele.marks >= 60) {
      ele.grade = "C"
   }
   else if (ele.marks >= 40) {
      ele.grade = "D"
   }
   else if (ele.marks < 40)
      ele.grade = "F"
})

console.log(arr)

