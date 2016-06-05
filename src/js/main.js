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

    var cards = $("nav ul li.card-preview");

    $(cards).click(function () {
        $(cards).removeClass("active");
        $(this).addClass("active");
    });
});

$('#sortAsc').on('click', function () {
    var sorted = $("nav ul li.card-preview").sort(function (a, b) {
        return $(a).find(".name").text() > $(b).find(".name").text();
    });
    $("nav ul").html(sorted);

    var cards = $("nav ul li.card-preview");

    $(cards).click(function () {
        $(cards).removeClass("active");
        $(this).addClass("active");
    });
});

$('#sortDesc').on('click', function () {
    var sorted = $("nav ul li.card-preview").sort(function (a, b) {
        return $(a).find(".name").text() < $(b).find(".name").text();
    });
    $("nav ul").html(sorted);

    var cards = $("nav ul li.card-preview");

    $(cards).click(function () {
        $(cards).removeClass("active");
        $(this).addClass("active");
    });
});


$(window).load(function () {

});