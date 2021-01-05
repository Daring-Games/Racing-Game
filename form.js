class Form {
    constructor() {
        this.title = createElement('h1');

        this.input = createInput('name');

        this.button = createButton('PLAY');

        this.greetings = createElement('h3');

        this.resetButton = createButton('Restart');

    }
    

    hide() {
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
        this.title.hide();
    }
    

    display() {

        this.title.html("RACING GAME");
        this.title.position(450, 50);

        this.resetButton.position(1000, 100);
        this.resetButton.mousePressed(() => {
            game.update(0);
            player.updateCount(0);
            player.updateRank(0);
        });

        this.input.position(600, 300);


        this.button.position(670, 500);


        this.button.mousePressed(() => {
            this.input.hide();
            player.name = this.input.value();
            this.button.hide();

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

           this.greetings.html("HELLO " + player.name + " !");
           this.greetings.position(600, 200);
        });
    }
}

