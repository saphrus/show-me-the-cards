// the player model
function Player(name, surname, nick, asset) {
    //var that = this;
    this.name = name;
    this.surname = surname;
    this.nick = nick;
    this.asset = asset;
}

function addCardPreviewListeners() {
    var cardsPreviews = $("nav ul li.card-preview");
    var theCard = $("#card");

    $(cardsPreviews).click(function () {
        var that = this;
        $(theCard).removeClass("invisible");
        $(cardsPreviews).removeClass("active");
        $(this).addClass("active");

        $(theCard).find(".name").fadeOut(500, function () {
            $(this).text($(that).find(".name").text()).fadeIn(350);
        });

        $(theCard).find(".nick").fadeOut(500, function () {
            $(this).text($(that).find(".nick").text()).fadeIn(350);
        });

        $(theCard).find(".asset").fadeOut(500, function () {
            $(this).text($(that).find(".asset").text()).fadeIn(350);
        });
    });
}

// initialize player object array
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
            '<div class="name"><span class="first">' + val.name + '</span><span class="last"> ' + val.surname + '</span></div>' +
            '<div class="nick">' + val.nick + '</div>' +
            '<div class="asset">' + val.asset + '</div>' +
            '</li>';
        $(newCard).appendTo("nav ul");
    });
    addCardPreviewListeners();
    console.log(players);
});

// click listeners
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

$('#sendNames').on('click', function () {
    var playerCard = $("nav ul li.card-preview.active");
    var playerData = [
        {
            "name": $(playerCard).find(".first").text().trim(),
            "surname": $(playerCard).find(".last").text().trim(),
            "nick": $(playerCard).find(".nick").text().trim(),
            "asset": $(playerCard).find(".asset").text().trim()
        }
    ];
    // $.ajax override mock
    $.ajax = function(params){
            params.success({ return: params });
    };

    $.ajax({
        type: "POST",
        url: "mock",
        data: JSON.stringify({Player: playerData}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            window.alert("see console (F12 in most cases)");
            console.log(data);
        },
        failure: function (errMsg) {
            window.alert("see console (F12 in most cases)");
            console.log(errMsg);
        }
    });
});