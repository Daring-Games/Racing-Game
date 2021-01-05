class Game {

    constructor() {

    }

    getState() {
        database.ref('gameState').on("value", (data) => {
            gameState = data.val();
        });
    };

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    };

    async start() {
        if(gameState === 0) {
            player = new Player();
            background(backgroundIMG);
            var playerCountREF = await database.ref('playerCount').once("value");
            if(playerCountREF.exists()) {
                playerCount = playerCountREF.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }  
        car1 = createSprite(100, 200);
        car1.addImage(car1IMG);

        car2 = createSprite(300, 200);
        car2.addImage(car2IMG);

        car3 = createSprite(500, 200);
        car3.addImage(car3IMG);

        car4 = createSprite(700, 200);
        car4.addImage(car4IMG);  
        
        cars = [car1, car2, car3, car4];
    }

    play ()  {
        form.hide();
        Player.getPlayerInput();
        player.getRank();

        background(ground);
        image(trackIMG, 0, -displayHeight*4, displayWidth, displayHeight*5);

        

        if(allPlayers !== undefined) {
            var pos = 50;
          

            var index = 0;

            var text;

            var x = 250;

            var y = 0;


            for(var i in allPlayers) {
                pos = pos + 20;
                index = index + 1;

                x = x + 200;

                y = displayHeight - allPlayers[i].distance;
               


                cars[index - 1].x = x;
                cars[index - 1].y = y;

                

               

                if(i === "player" + player.index) {
                    fill("red");
                    ellipse(x,y,60,60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;

                } else  {
                    fill("silver");
                }


                text = createElement("p");
                text.html(allPlayers[i].name + ": " + allPlayers[i].distance);
                text.position(50, pos);
            }
        }


        if(keyDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 20;
            player.update();
        }


        if(player.distance >= 4200) {
            gameState = 2;
            player.rank = player.rank + 1;
            player.updateRank(player.rank);
            console.log(player.rank);
        }

        drawSprites();
    }
}
