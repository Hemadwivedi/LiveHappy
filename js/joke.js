$(document).ready(function () {
    var baseJokeUrl = "https://api.icndb.com";
    var number = 15;
    var type = "";
    var categoriesUrl = baseJokeUrl + "/categories"
    var randomUrl = baseJokeUrl + "/jokes/random/" + number;
    var queryUrlForType = randomUrl + "?limitTo="

    var queryUrlForType3 = randomUrl + "?exclude="

    $.loadCacategories = function () {

       // $("#type1").on('click', function () {
         //   var url = queryUrlForType + this.text;
         //   clickableFunction(url);

       // });

        $("#type2").on('click', function () {
            var url = queryUrlForType + this.text;
            clickableFunction(url);
        });

        $("#type3").on('click', function () {
            var url = queryUrlForType3 + "[nerdy]";
            clickableFunction(url);
        });

        loadDefault();
    }

    var loadDefault = function () {
        $.ajax({
                url: categoriesUrl,
                method: "GET"
            })
            .then(function (categorieResponse) {
                var type = $("#jokeType").find("a");
                for (var i = 0; i < type.length; i++) {
                    var value = categorieResponse.value[i+1];
                    type[i].text = value ? value : "guess me";
                }
                var url = queryUrlForType + categorieResponse.value[1];
                clickableFunction(url);
            })
    }
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

});
// http://api.icndb.com/jokes/random?limitTo=[nerdy]
// http://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]