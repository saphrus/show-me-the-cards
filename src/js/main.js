function Player(name, surname, asset) {
    var that = this;
    this.name = name;
    this.surname = surname;
    this.asset = asset;

    function getName() {
        return that.name;
    }

    function getSurname() {
        return that.surname;
    }

    function getAsset() {
        return that.asset;
    }
}

var player1 = new Player(
    "Darcy Candice Ball",
    "Crystaldash",
    "Secret Glowquake Gold"
);

player1.getName();
player1.getSurname();
player1.getAsset();