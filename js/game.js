class Game {
  constructor() {}

  getState() {
    var gameStateref = database.ref("gameState");
    gameStateref.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  async start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount();

    bike1 = createSprite(100, 200);
    bike2 = createSprite(250, 200);
    bike3 = createSprite(400, 200);
    bike4 = createSprite(550, 200);
    bike1.scale = 0.1;
    bike2.scale = 0.1;
    bike3.scale = 0.1;
    bike4.scale = 0.1;

    bikes = [bike1, bike2, bike3, bike4];

    bike1.addImage(bike1img);
    bike2.addImage(bike2img);
    bike3.addImage(bike3img);
    bike4.addImage(bike4img);
    
  }

  play() {
    form.hide();
    Player.getPlayersInfo();
    

    if (allplayers !== undefined) {
      background("#263238");
      image(trackimg, 0, -height * 4, width, height * 5);

      var index = 0;
      var x = 215;
      var y;
      for (var p in allplayers) {
        index = index + 1;
        x = allplayers[p].positionX;
        y = allplayers[p].positionY;
        bikes[index - 1].x = x;
        bikes[index - 1].y = y;

        if (index === player.index) {
          //Create an identifier for active player


          

          camera.position.x = width / 2;
          camera.position.y = bikes[index - 1].y;
        }

       }
    }

    if (keyIsDown(UP_ARROW)) {
      player.positionY -= 10;
      player.distance += 10;
      player.update();
    }

    //Use if condition to move the bike left and right




    //write a condition to finish the game


    drawSprites();
  } 
}
