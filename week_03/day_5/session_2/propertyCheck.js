function propertyCheck(input) {
    var count = 0;
    var obj = {
        email: "abc",
        name: "abc",
        pass: "abc",
        address: "abc"
    }
    for (key in obj) {
        if (key == input) {
            count++
        }
    }

    if (count > 0) {
        console.log(true);
    } else {
        console.log(false)
    }
}

propertyCheck("nam")

// test-cases : nam, name, email, emai, pas, pass