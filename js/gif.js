$(document).ready(function () {
    var apiKey = "tr1aocA11XUCIxsJqnaSKqLrV7244mfk";

    $.loadGifs = function () {
        $(".toggle").hide();

        $(".toggle").on("click", function () {
            loadGifs("funny");
        })

        $("#click-button").on('click', function () {
            var inputValue = $("#gifType").val();
            loadGifs(inputValue);
           $(".toggle").unbind("click")
            $(".toggle").bind("click", function () {
                loadGifs(inputValue);
            })
        });

        loadGifs("funny");

    }

    function loadGifs(gifType) {
        $(".toggle").hide();

        $.ajax({
                url: `https://api.giphy.com/v1/gifs/search?api_key=tr1aocA11XUCIxsJqnaSKqLrV7244mfk&q=${gifType}&limit=25&offset=0&rating=G&lang=en`,
                method: "GET"
            })
            .then(function (response) {
                $(".card-body").empty();
                response.data.forEach(element => {
                    var gifImg = element.images.preview_gif.url;
                    var id = element.id;
                    createBox(gifImg, id);
                });

            })

    }

    function createBox(gifImg, id) {
        var newImg = $("<img>");
        newImg.attr('src', gifImg);
        newImg.attr('width', "193");
        newImg.attr('height', "130");
        newImg.addClass('img-box');

        var newAnchor = $("<a>")
        newAnchor.attr('href', "#");
        newAnchor.attr('id', id);
        newAnchor.append(newImg)

        $(".card-body").append(newAnchor);

        $("#" + id).on("click", function (event) {

            $(".card-body").empty();
            createBox(gifImg);
            $(".toggle").show();
        })
    }

})