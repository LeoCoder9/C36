class Form {
    constructor() {
    }
    display() {
        var title = createElement('h1');
        title.html("CAR RACING GAME!");
        title.position(470, 20);

        var name = createInput("Input your name");
        name.position(540, 160);

        var button = createButton("Enter the game");
        button.position(560, 200);

        var welcome = createElement('h2')


        button.mousePressed(function () {
            name.hide()
            button.hide()

            var playerName = name.value()
            welcome.html("Welcome " + playerName)
            welcome.position(510, 150)
            playerCount = playerCount+1
            player.updateCount(playerCount)
            player.updateName(playerName)

        })


    }
}