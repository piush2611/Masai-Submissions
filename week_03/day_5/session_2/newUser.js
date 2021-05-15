function newUser(Name,Email,Pass) {
    var userInfo = {};
    userInfo.name = Name;
    userInfo.email = Email;
    userInfo.password = Pass;
    return userInfo;
}
var value = newUser("Leo Messi","Leomessi@gmail.com","Leomessi@123");
console.log(value);
