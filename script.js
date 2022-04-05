$(document).ready(() => {
    //console.log('ciao');
    // $('#ciao').html('pluto'); // $('#ciao') = document.getElementById('ciao'). Si usa #, come per leggere gli id nel css.
    // $('p').html('pluto'); // Chiamata per tag, in questo caso il tag p.
    // $('.container p').html('pluto'); // Prendo i tag p dentro al tag con classe container.
    // $('p').on('click', function() {
    //     $('p').hide();
    // });

    $.getJSON("./assets/array.json", function (data) { // Leggo il file json
        $.each(data, function (key, val) { // Per ogni elemento
            $("<p>", { // Creo il tag p, dandogli una classe e un contenuto, e lo appendo a un div contenitore
                "class": val,
                html: val
            }).appendTo(".container");

            // Dopo aver creato l'elemento imposto mouseover e mouseout, dando come parametro la classe corrispondente. Imposto anche il click per farli scomparire.
            // $("." + val).on("mouseover", function () {
            //     $("." + val).css("color", "orange");
            // });
    
            // $("." + val).on("mouseout", function () {
            //     $("." + val).css("color", "black");
            // });

            // $("." + val).on("click", function () {
            //     $("." + val).hide();
            // });

            // Dopo aver creato l'elemento imposto mouseover e mouseout, dando come parametro il testo dell'elemento appena creato. Imposto anche il click per farli scomparire.
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


// window.addEventListener('load', () => {
//     //console.log('ciao in javascript');
//     //document.getElementById('ciao').innerHTML = 'pippo';
//     //console.log('vanilla', document.getElementsByTagName('p'));
//     //[...document.getElementsByTagName('p')].forEach(e => e.innerHTML = 'paperino');
//     document.getElementById('ciao').className = 'ciao';
//     document.getElementById('ciao').classList.add('mondo');
// });