$(document).ready(function () {

    $("#jokesBtn").on('click', function () {
        var url = "../html/joke.html";
        var loadFun = $.loadCacategories;
        loadpage(url, loadFun);

    });

    $("#gifsBtn").on('click', function () {
        var url = "../html/gif.html";
        var loadFun = $.loadGifs;
        loadpage(url, loadFun);

    });


    $("#videoBtn").on('click', function () {

    });

    var loadpage = function (url, callBackFunction) {
        $.ajax({
            url: url,
            context: document.body,
            method: 'get',
            success: function (data) {
                $('#content').html(data);
                callBackFunction();
            }

        });

    }


});