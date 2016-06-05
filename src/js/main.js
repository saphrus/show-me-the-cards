function Player(name, surname, nick, asset) {
    //var that = this;
    this.name = name;
    this.surname = surname;
    this.nick = nick;
    this.asset = asset;
    /*
     function getName() {
     return that.name;
     }

     function getSurname() {
     return that.surname;
     }

     function getNick() {
     return that.nick;
     }

     function getAsset() {
     return that.asset;
     }
     */
}

function addCardPreviewListeners() {
    var cardsPreviews = $("nav ul li.card-preview");
    var theCard = $("#card");

    $(cardsPreviews).click(function () {
        var that = this;
        $(theCard).removeClass("invisible");
        $(cardsPreviews).removeClass("active");
        $(this).addClass("active");

        $(theCard).find(".name").fadeOut(500, function() {
            $(this).text($(that).find(".name").text()).fadeIn(350);
        });

        $(theCard).find(".nick").fadeOut(500, function() {
            $(this).text($(that).find(".nick").text()).fadeIn(350);
        });
        
        $(theCard).find(".asset").fadeOut(500, function() {
            $(this).text($(that).find(".asset").text()).fadeIn(350);
        });
    });
}

var players = [];

$.getJSON('players.json', function (data) {
    $.each(data.players, function (key, val) {
        players.push(new Player(
            val.name,
            val.surname,
            val.nick,
            val.asset
        ));
        var newCard =
            '<li class="card-preview">' +
            '<div class="name">' + val.name + " " + val.surname + '</div>' +
            '<div class="nick">' + val.nick + '</div>' +
            '<div class="asset">' + val.asset + '</div>' +
            '</li>';
        $(newCard).appendTo("nav ul");
    });
    addCardPreviewListeners();
});

$('#sortAsc').on('click', function () {
    var sorted = $("nav ul li.card-preview").sort(function (a, b) {
        return $(a).find(".name").text() > $(b).find(".name").text();
    });
    $("nav ul").html(sorted);
    addCardPreviewListeners();
});

$('#sortDesc').on('click', function () {
    var sorted = $("nav ul li.card-preview").sort(function (a, b) {
        return $(a).find(".name").text() < $(b).find(".name").text();
    });
    $("nav ul").html(sorted);
    addCardPreviewListeners();
});


$(window).load(function () {

});