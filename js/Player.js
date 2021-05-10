class Player {
    constructor() {
    }
    getCount() {
        var plrCountRef = database.ref('playerCount');
        plrCountRef.on("value", function (data) {
            playerCount = data.val()
        });
    }
    updateCount(count) {
        database.ref('/').update({ playerCount: count })
    }
    updateName(Plrname) {
        var playerindex = "player" + playerCount
        database.ref(playerindex).set({ names: Plrname })
    }
}