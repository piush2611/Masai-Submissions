function propertyupdate(obj,prop,value) {
    obj[prop] = value;
    return obj;
}

var userInfo = propertyupdate({name:"Lionel messi",pass:"Messileo",email: "Leomessi@yahho.com"},'Country','Argentina');
console.log(userInfo)

//test-cases : {name:"Lionel messi",pass:"Messileo",email: "Leomessi@yahho.com",country: "Argentina"},'name','Frenkie De Jong -> update
//             {name:"Lionel messi",pass:"Messileo",email: "Leomessi@yahho.com"},'Country','Argentina' -> new addition key doesn't exist