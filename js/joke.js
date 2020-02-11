$.jokeReady = function () {
    var baseJokeUrl = "https://api.icndb.com";
    var number = 15;
    var type = "";
    var categoriesUrl = baseJokeUrl + "/categories"
    var randomUrl = baseJokeUrl + "/jokes/random/" + number;
    var queryUrlForType = randomUrl + "?limitTo="

    var queryUrlForType3 = randomUrl + "?exclude="

    $("#type2").on('click', function () {
        var url = queryUrlForType + this.text.toLowerCase();
        clickableFunction(url);
    });

    $("#type3").on('click', function () {
        var url = queryUrlForType3 + "[nerdy]";
        clickableFunction(url);
    });

    var loadDefault = function () {
        $.ajax({
                url: categoriesUrl,
                method: "GET"
            })
            .then(function (categorieResponse) {
                var type = $("#jokeType").find("a");
                for (var i = 0; i < type.length; i++) {
                    var value = categorieResponse.value[i + 1];
                    if (value !== undefined) {
                        type[i].text = value.toUpperCase();
                    } else {
                        type[i].text = "GUESS ME";
                    }
                }
                var url = queryUrlForType + categorieResponse.value[1];
                clickableFunction(url);
            })
    }

    loadDefault();


    var clickableFunction = function (url) {
        $.ajax({
                url: url,
                method: "GET"
            })
            .then(function (response) {
                $(".card-body").empty();
                response.value.forEach(function (item) {
                    var a = `<p class="card-text" id="joke-container">${item.joke}</p>`
                    $(".card-body").append(a);
                })
            });
    }
}