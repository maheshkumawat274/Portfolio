document.addEventListener("DOMContentLoaded", function () {
 const hamburger = document.querySelector(".hamburger");
 const menu = document.querySelector(".menu");

 hamburger.addEventListener("click", function () {
     menu.classList.toggle("active");
 });
});


function Click(){
    let inputText = document.getElementById("inputText").value;
    if(inputText === ""){
        alert("Please fill detils !");
        return false
    }else{
        alert("sent successfull ! no backend use")
        return false;
    }
}
