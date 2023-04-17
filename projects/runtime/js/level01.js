var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "enemy", "x": 500, "y": groundY},
                { "type": "reward", "x": 300, "y": groundY},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
       /* var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = 400;
        sawBladeHitZone.y = 100;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);*/


        //creating saw blade function
        function createSawBlade(x , y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            //picture of 8 bit sawblade 
            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
           obstacleImage.x = -25;
           obstacleImage.y = -25;

           obstacleImage.scaleX = .25;
           obstacleImage.scaleY = .25;
        }
        //creating enemy function 
        function create(){}
        function createEnemy(x,y){
            var enemy = game.createGameItem("enemy", 25);
            //picture of 8 bit ghost 
            var ghost = draw.bitmap("img/ghost.png");
            //speed of the enemy
            ghost.x = -25;
            ghost.y = -25;
            //size of the enemy
            ghost.scaleX = .1;
            ghost.scaleY = .1;
            enemy.addChild(ghost);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);  
            enemy.velocityX = -1;  
            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut();
            }
        }
        //creating reawrd function 
        function createReward(x, y){
            var reward = game.createGameItem("reward", 25);
            //picture of 8 bit coin
            var coin = draw.bitmap("img/coin png.png");
            //size of the reward
            coin.scaleX = .2;
            coin.scaleY = .2;
            //speed of the reward
            coin.x = -25;
            coin.y = -25;
            reward.addChild(coin);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);  
            reward.velocityX = -1; 
            //health when collecting the reward 
            reward.onPlayerCollision = function (){
                game.increaseScore(100);
                reward.fadeOut();
            };
            reward.onProjectileCollision = function(){
                
                reward.fadeOut();
            }
        }
        //createEnemy(400, groundY - 50);
        //createSawBlade(800, groundY);

        //loop for level data and all game items 
        for (var i = 0; i < levelData.gameItems.length; i++){
                var gameItem = levelData.gameItems[i];
                if (gameItem.type === "reward"){
                    createReward(gameItem.x, gameItem.y);
                }
                if (gameItem.type === "sawblade"){
                    createSawBlade(gameItem.x, gameItem.y);
                }
                if(gameItem.type === "enemy"){
                    createEnemy(gameItem.x, gameItem.y);
                }
        }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
