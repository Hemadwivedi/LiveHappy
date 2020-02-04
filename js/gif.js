//var apiKey = "tr1aocA11XUCIxsJqnaSKqLrV7244mfk";
$(document).ready(function () {
    var apiKey = "tr1aocA11XUCIxsJqnaSKqLrV7244mfk";
    //https://api.giphy.com/v1/gifs/search?api_key=tr1aocA11XUCIxsJqnaSKqLrV7244mfk&q=funny&limit=25&offset=0&rating=G&lang=en
    var baseGifurl = ""
    $.loadGifs = function () {

        $("#click-button").on('click', function () {
            var a = $("#gifType").val();
            loadGifs(a)
        });

        loadGifs("funny");

    }

    function loadGifs(gifType) {
        $.ajax({
                url: `https://api.giphy.com/v1/gifs/search?api_key=tr1aocA11XUCIxsJqnaSKqLrV7244mfk&q=${gifType}&limit=25&offset=0&rating=G&lang=en`,
                method: "GET"
            })
            .then(function (response) {
                $(".card-body").empty();
                response.data.forEach(element => {
                    var a = `<a href="#" class="gif_img" data-id=${element.id}><img src= ${element.images.preview_gif.url} crossorigin="anonymous" width="193" height="130"></img></a>`
                    $(".card-body").append(a);

                    $(".gif_img").on("click" , function(){
                        var gifId = $(this).attr("data-id");
                        console.log(gifId)
                    });
                });
              
            })

    }
})