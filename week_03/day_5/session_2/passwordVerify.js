function passwordVerify(obj, pass) {
    if(obj.password === pass) {
        return true;
    } else {
        return false;
    }
}

var value = passwordVerify({ name: "piyush", email: "xyz@gmail.com", password: "Ps@9876543210"}, "Ps@9876543210");
console.log(value);