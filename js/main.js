$(document).ready(function () {
    var whereToGo = window.location.hash;

    switch (whereToGo) {
        case "#about":
            $("#aboutNav").click();
            console.log("Trigger click on About")
            break;
        case "#gify":
            $("#giphyNav").click();
            console.log("Trigger click on giphy")
            break;
        case "#video":
            $("#videoNav").click();
            console.log("Trigger click on video")
            break;
        case "#joke":
            $("#jokeNav").click();
            console.log("Trigger click on Joke")
            break;
    }

})