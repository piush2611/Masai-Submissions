// Database
var userDb = []

//defining the constructor Users
function Users(fname, lname, username, email, pass, address, mob, type) {
    this.fName = fname;
    this.lName = lname;
    this.username = username;
    this.email = email;
    this.pass = pass;
    this.address = address;
    this.mob = mob;
    this.type = type;
}

// on submitting user info this will be invoked
$("#btn").click(() => {
    userDb.push(getData())
    $("#fname").val("")
    $("#lname").val("")
    $("#uname").val("")
    $("#email").val("")
    $("#pass").val("")
    $("#address").val("")
    $("#mob").val("")
})

// taking the user data and returning it
getData = () => {
    var newUser = new Users($("#fname").val(), $("#lname").val(), $("#uname").val(), $("#email").val(), $("#pass").val(), $("#address").val(), $("#mob").val(), $(".type").val())
    if ($(".type").val() == "user") {
        $("#dropdown").append(`<option>${$("#uname").val()}</option>`)
    }
    else {
        $("#dropdown").append(`<option>${$("#uname").val()} [Admin]</option>`)
    }
    return newUser
}

// on selecting particular option from dropdown, it will display the info of that user
$("#dropdown").change(() => {
    var val = $("#dropdown").val()
    if (val[val.length - 1] == "]") {
        $("#info").html(`<h4>Welcome ${val}, everything is okay`)
    }
    else {
        $("#info").html(`<h4> Hello ${val}, Welcome back !!`)
    }
})

// filtering data as users/admins/both
$("#filter").change(() => {
    var val = $("#filter").val()
    fillData(userDb, val)
})

// function to fill data in table
function fillData(input, type) {
    $(".table").text("")
    if (type != "") {
        input.forEach((user) => {
            if (user.type == type) {
                var row = document.createElement("div")
                row.setAttribute("style", "display:flex; margin-bottom:5px")
                for (key in user) {
                    let item = document.createElement("div")
                    item.setAttribute("style", "flex:1")
                    item.textContent = user[key]
                    row.append(item)
                }
                let btn = document.createElement("button");
                btn.setAttribute("class", "btn btn-info btn-sm");
                btn.textContent = "Delete";
                btn.setAttribute("onclick", `deleteUser("${user.username}", "${user.type}")`)
                row.append(btn)
                $(".table").append(row)
            }
        })
    }
    else {
        input.forEach((user) => {
            var row = document.createElement("div")
            row.setAttribute("style", "display:flex; margin-bottom:5px")
            for (key in user) {
                let item = document.createElement("div")
                item.setAttribute("style", "flex:1")
                item.textContent = user[key]
                row.append(item)
            }
            let btn = document.createElement("button");
            btn.setAttribute("class", "btn btn-info btn-sm");
            btn.textContent = "Delete";
            btn.setAttribute("onclick", `deleteUser("${user.username}")`)
            row.append(btn)
            $(".table").append(row)
        })
    }

}

// function to delete particular user/admin
function deleteUser(u, type = "") {
    userDb = userDb.filter(e => e.username != u)
    fillData(userDb, type)
}

// sort function
$("#sortIt").change(() => {
    if ($("#sortIt").val() == "asc") {
        sortAsc(userDb)
    }
    else {
        sortDsc(userDb)
    }
})
var stored;
// sorting in descending order
function sortDsc(input) {
    stored = input.sort((a, b) => {
        var nameA = a.username.toUpperCase();
        var nameB = b.username.toUpperCase();

        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    });
    fillData(stored, "")
}

//sorting in ascending order
function sortAsc(input) {
    stored = input.sort((a, b) => {
        var nameA = a.username.toUpperCase();
        var nameB = b.username.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    fillData(stored, "")
} 

