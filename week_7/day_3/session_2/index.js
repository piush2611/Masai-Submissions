var data 
window.addEventListener('load',function(){
    console.log('loading')
    var xhr = new XMLHttpRequest()
    xhr.open('GET','http://localhost:8000/students')
    xhr.onload = function(){
        data = JSON.parse(xhr.response)
        console.log(data)
        fillData(data)
        $("#sortIt").change(() => { 
            let value = $("#sortIt").val();
            sortByName(dataBase || data, value) 
        })
        $("#category").change(() => { 
            let value = $("#category").val(); 
            sortByCategory(dataBase || data, value) 
        })
        $("#marks").change(() => { 
            let value = $("#marks").val();
            sortByMarks(dataBase || data, value) 
        })
        $("#search").change(() => {
            let value = $("#search").val()
            partialSearch(data, value)
        })
        $("#email").change(() => {
            let value = $("#email").val()
            searchByEmail(data, value)
        })
        $("#domain").change(() => {
            let value = $("#domain").val()
            searchByDomain(data, value)
        })
        $("#pagination").change(() => {
            $("#buttons").html("")
            let value = $("#pagination").val()
            if(value == "10"){
                for(let i =1; i < 11; i++){
                    $("#buttons").append(`<button class="btn btn-info m-1" onclick="createPagesFor10(${i}, data)">${i}</button>`)
                }
            }
            else if(value == "25"){
                for(let i =1; i <5; i++){
                    $("#buttons").append(`<button class="btn btn-info m-1" onclick="createPagesFor25(${i}, data)">${i}</button>`)
                }
            }
            else if(value == "50"){
                for(let i =1; i <3; i++){
                    $("#buttons").append(`<button class="btn btn-info m-1" onclick="createPagesFor50(${i}, data)">${i}</button>`)
                }
            }
            else if(value == "100"){
                fillData(data)
            }
        })
    }
    xhr.send()
})

// function to populate the table
function fillData(input) {
    $("#table").text("")
    input.forEach(user => {
        let row = document.createElement("tr");
        for( key in user){
            let td = document.createElement("td")
            td.textContent = user[key]
            row.append(td)
        }
        let totalMarks = document.createElement("td")
        totalMarks.textContent = Number(`${user.english}`) + Number(`${user.maths}`) + Number(`${user.science}`) 
        row.append(totalMarks)
        $("#table").append(row)
    })
}


var dataBase
// function to sort by name or email
function sortByName(input, value){
    if(value == "name") {
        dataBase = input.sort((a,b) => { return a.first_name > b.first_name ? 1 : -1 })
        fillData(dataBase)
    }
    else if(value == "email") {
        dataBase = input.sort((a,b) => { return a.email > b.email ? 1 : -1 })
        fillData(dataBase)
    }
    else if( value = "nameDesc"){
        dataBase = input.sort((a,b) => { return a.first_name < b.first_name ? 1 : -1 })
        fillData(dataBase)
    }
    else if(value == "emailDesc"){
        dataBase = input.sort((a,b) => { return a.email < b.email ? 1 : -1 })
        fillData(dataBase)
    }
}   

// function to sort by category like all male/ female/ both
function sortByCategory(input, type) {
    if(type == "both"){
        fillData(input)
    }
    else if(type == "male"){
        dataBase = input.filter(user => user.gender == "Male")
        fillData(dataBase)
    }
    else {
        dataBase = input.filter(user => user.gender == "Female")
        fillData(dataBase)
    }
}

//function to sort marks in ascending or descending order
function sortByMarks(input, type) {
    if(type == "EngAsc"){
        dataBase = input.sort((a, b) => a.english - b.english)
        fillData(dataBase)
        console.log(dataBase)
    }
    else if(type == "EngDesc"){
        dataBase = input.sort((a, b) => b.english - a.english)
        console.log(dataBase)
        fillData(dataBase)
    }
    else if(type == "MathsDesc"){
        dataBase = input.sort((a, b) => b.maths - a.maths)
        fillData(dataBase)
        console.log(dataBase)
    }
    else if(type = "MathsAsc"){
        dataBase = input.sort((a, b) => a.maths - b.maths)
        fillData(dataBase)
        console.log(dataBase)
    }
    else if(type == "SciDesc"){
        dataBase = input.sort((a, b) => b.science - a.science)
        fillData(dataBase)
        console.log(dataBase)
    }
    else if(type == "SciAsc"){
        dataBase = input.sort((a, b) => a.science - b.science)
        fillData(dataBase)
        console.log(dataBase)
    }
}

// function to search by exact input
function searchByName(data, input) {
    input = input.toLowerCase()
    dataBase = data.filter((user) => user.first_name.toLowerCase() == input || user.last_name.toLowerCase() == input)
    fillData(dataBase)
}

// function to search input partially
function partialSearch(data, input) {
    input = input.toLowerCase()
    dataBase = data.filter((user) => { 
        let fName = user.first_name.toLowerCase().indexOf(input);
        let lName = user.last_name.toLowerCase().indexOf(input);
        return fName != -1 || lName != -1
    })
    fillData(dataBase)
}

// function to search by email
function searchByEmail(data, input) {
    dataBase = data.filter((user) => user.email == input)
    fillData(dataBase)
}

// function to search by domain
function searchByDomain(data, input) {
    dataBase = data.filter(user => {
        return user.email.split("@")[1] == input
    })
    fillData(dataBase)
}

// function for pagination in 10 parts
function createPagesFor10(n, data) {
    a = data
    dataBase = data.filter(user =>  user.id <= n*10 && user.id >= (n-1)*10)
    fillData(dataBase)
}

// function for pagination in 4 parts
function createPagesFor25(n ,data) {
    dataBase = data.filter(user => user.id <= n*25 && user.id >= (n-1)*25)
    fillData(dataBase)
}

// function for pagination in 2 parts
function createPagesFor50(n ,data) {
    dataBase = data.filter(user => user.id <= n*50 && user.id >= (n-1)*50)
    fillData(dataBase)
}