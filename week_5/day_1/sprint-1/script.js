var arrOfTenthClassName = [];
var arrOfTenthMaths = [];
var arrOfTenthScience = [];
var arrOfTenthHistory = [];
var arrOfTenthGeo = [];
var arrOfTenthEng = [];
var gradeValue = '';
function addGrade() {
    gradeValue = document.getElementsByClassName(".grade").value;
}
function addName() {
    var name = document.querySelector(".name").value;
    arrOfTenthClassName.push("Name : " + name)
}

function addMath() {
    var marks = document.querySelector(".math").value;
    arrOfTenthMaths.push("Math : " + marks)
}

function addScience() {
    var marks = document.querySelector(".science").value;
    arrOfTenthScience.push("Science : " + marks)
}

function addHistory() {
    var marks = document.querySelector(".history").value;
    arrOfTenthHistory.push("History : " + marks)

}

function addGeo() {
    var marks = document.querySelector(".geography").value;
    arrOfTenthGeo.push("Geography : " + marks)
}

function addEng() {
    var marks = document.querySelector(".english").value;
    arrOfTenthEng.push("English : " + marks)
}





function clearAll() {
    var info = document.getElementById("info")
    info.innerHTML = ""
}

function showAllTen() {

    for (var i = 0; i < arrOfTenthClassName.length; i++) {
        var info = document.getElementById("info")
        var row = document.createElement('p');
        row.innerHTML = arrOfTenthClassName[i] + " " + "Grade : 10 " + " " + arrOfTenthScience[i] + " " + arrOfTenthMaths[i] + " " + arrOfTenthHistory[i] + " " + arrOfTenthGeo[i] + " " + arrOfTenthEng[i];
        info.appendChild(row)
    }
}
