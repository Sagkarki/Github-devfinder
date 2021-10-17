const mode = document.getElementById("dark_btn")
const background = document.body.style
const content= document.getElementsByClassName('content')[0].style
//const stats = document.getElementsById("statistics").style
const search = document.getElementById("search_container").style
const modeText = document.getElementById("modeText")


let darkMode = true
mode.addEventListener("click", function(){
    if (darkMode == true){
        dark_mode_properties();
    }
    else{
        light_mode_properties();
    }
})
function dark_mode_properties(){
    background.backgroundColor = "rgb(20,29,47)"
    backgroundColor = "white"
    content.backgroundColor= "#808080"
 //  stats.backgroundColor = "rgb(20,29,47)"
    search.backgroundColor="#808080"
    darkMode = true
    modeText.innerText= "LIGHT"
    mode.src = "./assets/icon-sun.svg" 

}
 
function light_mode_properties(){

}