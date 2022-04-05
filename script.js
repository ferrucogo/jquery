$(document).ready(() => {
    $.getJSON("./assets/array.json", function (data) { // Leggo il file json
        $.each(data, function (key, val) { // Per ogni elemento
            $("<p>", { // Creo il tag p, dandogli una classe e un contenuto, e lo appendo a un div contenitore
                "class": val,
                html: val
            }).appendTo(".container");

            $("p:contains(" + val + ")").on("mouseover", function () {
                $("p:contains(" + val + ")").css("color", "orange");
            });
    
            $("p:contains(" + val + ")").on("mouseout", function () {
                $("p:contains(" + val + ")").css("color", "black");
            });

            $("p:contains(" + val + ")").on("click", function () {
                $("p:contains(" + val + ")").hide();
            });

        });
    });

});
