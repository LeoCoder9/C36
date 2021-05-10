class Game {
    constructor() {

    }
    start() {
        if(gameState === 0){

        
        form = new Form()
        form.display()

        player = new Player();
        player.getCount()
        }
    }
    readState(){
        var statecount = database.ref('gameState');
        statecount.on("value", function(data){
            gameState = data.val()
        })
    }
    updateState(gcount){
        database.ref('/').update({gameState: gcount})
    }
    
}