function emailChecker(obj) {
    var emailId = obj.email, count = 0; checkForAt = false;
    for (var i = 0; i < emailId.length; i++) {
        if (emailId[0] == '@' || emailId[0] == '.') {
            count++
        }
        else if (emailId[i] == '@') {
            checkForAt = true
        }
        else if (emailId[i] == '.' && emailId[i + 1] == '.') {
            count++
        }
        else if (emailId[i] == "~" || emailId[i] == "!" || emailId[i] == "#" || emailId[i] == "$" || emailId[i] == "%" || emailId[i] == "^" || emailId[i] == "&" || emailId[i] == "*" || emailId[i] == "(" || emailId[i] == ")" || emailId[i] == "+") {
            count++
        }
        else if (emailId[i] == '.' && emailId[i - 1] == '@') {
            count++
        }
    }
    if (count == 0 && checkForAt == true) {
        console.log("valid email")
        count = 0;
        checkForAt = false;
    } else {
        console.log("Invalid email")
    }
}

emailChecker({name:"piyush",email:"masai@.com.my"})

// test-cases   : masai.school.com 
//                masai@.com.my
//              @masai.school.net
//              name@.org.org 
//              .name@masaischool.org 
//              masaischool()*@gmail.com 
//              name..1234@yahoo.com 
//              mysite@masaischool.com
//               my.name@masaischool.org
//               mysite@masai.school.net

