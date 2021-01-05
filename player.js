class Player {
    constructor() {

        this.name = null;

        this.index = null;

        this.rank = null;

        this.distance = 0;
        this.distanceX=0;

    };

    getCount() {
        database.ref('playerCount').on("value", (data) => {
            playerCount = data.val();
        });
    };

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    };


    getRank() {
        database.ref('carsAtEnd').on('value', (data) => {
            this.rank = data.val();
        });
    }

    updateRank(rank) {
        database.ref('/').update({
            carsAtEnd: rank
        })
    }

    
    static getPlayerInput() {
        database.ref('players').on("value", (data) => {
            allPlayers = data.val();
        });
    };

    update() {
        var pos = "players/player" + this.index;
        database.ref(pos).set({
            name: this.name,
            distanceX:this.distanceX,
            distance: this.distance,
        });
    };
};
