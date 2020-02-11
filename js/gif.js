$.gifReady = function () {

    var apiKey = "tr1aocA11XUCIxsJqnaSKqLrV7244mfk";

    loadGifs("hello");

    $("#click-button").on('click', function () {
        var inputValue = $("#gifType").val();
        loadGifs(inputValue);
    });

    function loadGifs(gifType) {
        $.ajax({
                url: `https://api.giphy.com/v1/gifs/search?api_key=tr1aocA11XUCIxsJqnaSKqLrV7244mfk&q=${gifType}&limit=21&offset=0&rating=G&lang=en`,
                method: "GET"
            })
            .then(function (response) {
                $(".card-body").empty();
                var data = splitarray(response.data, 3);
                data.forEach(item => createRow(item));
                $('[data-toggle="lightbox"]').on('click', function (event) {
                    event.preventDefault();
                    $(this).ekkoLightbox();
                });
            })

    }

    function splitarray(input, spacing) {
        var output = [];
        for (var i = 0; i < input.length; i += spacing) {
            output[output.length] = input.slice(i, i + spacing);
        }
        return output;
    }

    function createRow(data) {

        var rowDiv = $("<div>");
        rowDiv.addClass("row mb-4");
        data.forEach(item => {
            var downsizedLarge = item.images.downsized_large;
            var colDiv = $("<div>");
            colDiv.addClass("col-md-4");
            var anchor = $("<a>");
            anchor.attr('href', downsizedLarge.url);
            anchor.attr("data-toggle", "lightbox");
            anchor.attr("data-gallery", "img-gallery");
            anchor.attr("data-height", downsizedLarge.height);
            anchor.attr("data-width", downsizedLarge.width);
            var image = $("<img>");
            image.attr("src", downsizedLarge.url);
            image.attr('width', "250");
            image.attr('height', "250");
            anchor.append(image);
            colDiv.append(anchor);
            rowDiv.append(colDiv);
        })
        $(".card-body").append(rowDiv);
    }

}