const mode = document.getElementById("dark_btn")
const background = document.body.style



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

}
 
function light_mode_properties(){

}