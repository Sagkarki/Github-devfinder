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
const userName = document.getElementById("name")
const avatar = document.getElementById("avatar")
const login = document.getElementById("login")
const bio = document.getElementById("bio")
const repo = document.getElementById("repo")
const followers = document.getElementById("followers")
const following = document.getElementById("following")
const date = document.getElementById("date")
const months = ["January" , "February", "March", "April", "May", "June", "July", "August", "September" + "October" + "Novermber", "December"]




//const location = document.getElementById("location")
//const bio = document.getElementById("website")

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
    avatar.src = data.avatar_url
    userName.innerText = data.name
    login.innerText ="@" + data.login
    bio.innerText = (data.bio ==null ? "The profile has no bio" : data.bio)
    repo.innerText= data.public_repos
    followers.innerText = data.followers
    following.innerText = data.following
    let dateSplit = data.created_at.split("T").shift().split("-")
    date.innerText = "Joined"+ " "+ dateSplit[2] + " " + months[dateSplit[1]-1] + " " + dateSplit[0]
    //location.innerText = data.location
   // bio.innerText = data.blog

}

getUserData(url + "octocat")