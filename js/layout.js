$(document).ready(function () {

    $("#aboutNav").on("click", function () {
        var url = "../html/about.html";
        var callBackFunction = $.aboutReady;
        loadpage(url, callBackFunction);
    })

    $("#jokeNav").on("click", function () {
        var url = "../html/joke.html";
        var callBackFunction = $.jokeReady;
        loadpage(url, callBackFunction);
    })

    $("#giphyNav").on("click", function () {
        var url = "../html/gif.html";
        var callBackFunction = $.gifReady;
        loadpage(url, callBackFunction);
    })
    
    $("#videoNav").on("click", function () {
        var url = "../html/video.html";
        var callBackFunction = $.videoReady;
        loadpage(url, callBackFunction);
    })

    var loadpage = function (url, callBackFunction) {
        $.ajax({
            url: url,
            context: document.body,
            method: 'get',
            success: function (data) {
                $('#section').html(data);
                callBackFunction();;
            }

        });

    }
})