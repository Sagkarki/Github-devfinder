// Styling variables
const mode = document.getElementById("dark_btn")
const background = document.body.style
const content = document.getElementsByClassName("content")[0].style
const search = document.getElementById("search_container").style
const stats = document.getElementById("statistics").style
const modeText = document.getElementById("modeText")

let darkMode = false
mode.addEventListener("click", function () {
    if(darkMode == false) {
        // darkMode Properties
       darkModeProperties()
    }
    else {
        // lightMode Properties
        lightModeProperties()
    }
})

function darkModeProperties () {
    background.backgroundColor = "rgb(20,29,47)"
    background.color = "white"
    search.backgroundColor = "#1E2A47"
    content.backgroundColor = "#1E2A47"
    stats.backgroundColor = "rgb(20,29,47)"
    modeText.innerText = "LIGHT"
    mode.src = "./assets/icon-sun.svg"
    darkMode = true
}

function lightModeProperties () {
    background.backgroundColor = "#F2F2F2"
    background.color = "black"
    search.backgroundColor = "white"
    content.backgroundColor = "white"
    stats.backgroundColor = "#F6F8FF"
    modeText.innerText = "DARK"
    mode.src = "./assets/icon-moon.svg"
    darkMode = false
}

const url = 'https://api.github.com/users/';
const input = document.getElementById("input")
const userName = document.getElementById("name")


input.addEventListener("keydown", function(e){
    if(e.key== "Enter") {
        if (input.value !==""){
            getUserData(url+input.value)
        }
    }
})



function getUserData(gitUrl){
fetch(gitUrl)
.then(response => response.json())
.then(data => {
    console.log(data.name)
    updateProfile(data)
    console.log(data)
}).catch(error => {
    throw error;
})
}


function updateProfile(data){
    //change html with userdata
}

getUserData(url + "octocat")