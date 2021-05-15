function addSkills(obj, newSkill) {
    obj["skills"] = newSkill;
    return obj;
}

var value = addSkills({name:"Lionel"}, "Freekicks");
console.log(value);

//test-cases : {name:"Lionel"}, "Dribbling"
//             {name:"Lionel"}, "Passing"
//             {name:"Lionel"}, "Freekicks"