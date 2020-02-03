$(document).ready(function () {
    var baseJokeUrl = "https://api.icndb.com";
    var number = 15;
    var type = "";
    var categoriesUrl = baseJokeUrl + "/categories"
    var randomUrl = baseJokeUrl + "/jokes/random/" + number;
    var queryUrlForType = randomUrl + "?limitTo="

    var queryUrlForType3 = randomUrl + "?exclude="

    $.loadCacategories = function () {

        $("#type1").on('click', function () {
            $.ajax({
                    url: queryUrlForType + this.text,
                    method: "GET"
                })
                .then(function (response) {
                    $(".card-body").empty();
                    response.value.forEach(function (item) {
                        var a = `<p class="card-text" id="joke-container">${item.joke}</p>`
                        $(".card-body").append(a);
                    })
                })
        });

        $("#type2").on('click', function () {
            $.ajax({
                    url: queryUrlForType + this.text,
                    method: "GET"
                })
                .then(function (response) {
                    $(".card-body").empty();
                    response.value.forEach(function (item) {
                        var a = `<p class="card-text" id="joke-container">${item.joke}</p>`
                        $(".card-body").append(a);
                    })
                });
        });
        $("#type3").on('click', function () {
            $.ajax({
                    url: queryUrlForType3 + "[nerdy,explicit]",
                    method: "GET"
                })
                .then(function (response) {
                    $(".card-body").empty();
                    response.value.forEach(function (item) {
                        var a = `<p class="card-text" id="joke-container">${item.joke}</p>`
                        $(".card-body").append(a);
                    })
                });
        });
        $.ajax({
                url: categoriesUrl,
                method: "GET"
            })
            .then(function (categorieResponse) {

                var type = $("#jokeType").find("a");
                for (var i = 0; i < type.length; i++) {
                    var value = categorieResponse.value[i];
                    type[i].text = value ? value : "guess me";
                }
                $.ajax({
                        url: queryUrlForType + categorieResponse.value[0],
                        method: "GET"
                    })
                    .then(function (response) {
                        $(".card-body").empty();
                        response.value.forEach(function (item) {
                            var a = `<p class="card-text" id="joke-container">${item.joke}</p>`
                            $(".card-body").append(a);
                        })


                    })
            })
    }

});
// http://api.icndb.com/jokes/random?limitTo=[nerdy]
// http://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]