var vidBtn = document.getElementById("videoBtn");
var vidCont = document.getElementById("videoContainer");


vidtBtn.addEventListener("click", startVideo);

function startVideo(){
    vidCont.classList.remove("hide");
}