var vidBtn = document.getElementById("videoBtn");
var youtubeCont = document.getElementById("youtubeContainer");


vidBtn.addEventListener("click", startVideo);

function startVideo(){
    
    youtubeCont.classList.remove("hide");
}

$(document).ready(function(){
    var key = "AIzaSyBbk_ozhKHH28nWJ1hU4vxNbwLqtsd9gIw";
    var playlistId = "PLlKT_xceHwURQUQ5LbA95KvpcQw57BRij";
    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

    var options = {
        part: "snippet",
        key: key,
        maxResults:12,
        playlistId: playlistId
    }

    loadVids();

    function loadVids(){
        $.getJSON(URL, options, function(data){
            console.log(data);
        })
    }


});