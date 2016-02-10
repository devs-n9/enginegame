(function () {
    var gameEngine = {
        controles: {
            left: 39,
            right: 37,
            top: 38,
            player: null,
            iterator: 50,
            speed: 5,

            init: function (player, config) {
                for (var param in config) {
                    console.log(config);
                    if (config[param] !== undefined) {
                        gameEngine.controles[param] = config[param];
                    }
                }
                gameEngine.controles.player = player;

                document.addEventListener("keydown", gameEngine.controles.onAction);
                document.addEventListener("keyup", gameEngine.controles.onStop);
            },

            onAction: function (e) {

                if (e.keyCode == gameEngine.controles.left) {
                    gameEngine.controles.iterator += gameEngine.controles.speed;
                    gameEngine.player.character.style.transform = 'scale(1, 1)';
                    gameEngine.player.run();
                }

                if (e.keyCode == gameEngine.controles.right) {
                    gameEngine.controles.iterator -= gameEngine.controles.speed;
                    gameEngine.player.character.style.transform = 'scale(-1, 1)';
                    gameEngine.player.run();
                }

                if (e.keyCode == gameEngine.controles.top) {
                    gameEngine.player.character.setAttribute('class', "jump");
                    gameEngine.player.jump();
                }

                gameEngine.player.character.style.left = gameEngine.controles.iterator + "px";
            },

            onStop: function (e) {
                gameEngine.player.character.removeAttribute('class');
                gameEngine.player.stop();
            }
        },

        player: {
            character: {

            },

            sprites: {
                path: location.protocol + '//' + location.host,
                run: null,
                stop: null,
                jump: null
            },

            init: function (config) {
                console.log(gameEngine.player);
                gameEngine.player.character = document.getElementById(config.id);
                gameEngine.player.sprites.run = config.run;
                gameEngine.player.sprites.stop = config.stop;
                gameEngine.player.sprites.jump = config.jump;
            },

            run: function () {
                if (gameEngine.player.character.src != gameEngine.player.sprites.path + gameEngine.player.sprites.run) {
                    gameEngine.player.character.src = gameEngine.player.sprites.run;
                }
            },

            stop: function () {
                gameEngine.player.character.src = gameEngine.player.sprites.stop;
            },

            jump: function () {
                gameEngine.player.character.src = gameEngine.player.sprites.jump;
            }
        },

        level: {
            world: null,
            components: [],
            start: function(config){
                this.world = config.world;
                this.components = config.components;
                var level = this.getLevel(1);
                this.createLevel(level);
            },
            getLevel: function (level) {
                return [
                    [0, 0, 0, 1, 0, 2],
                    [0, 0, 0, 1, 0, 2],
                    [0, 0, 1, 1, 0, 2],
                    [0, 2, 2, 1, 0, 2]
                ];
            },
            createLevel: function(level){
                var item = null;
                var world = document.getElementById(gameEngine.level.world);
                
                for(var x = 0; x < level.length; x++){
                    for(var y = 0; y < level[x].length; y++){
                        console.log(level[x].length, y + 1);
                        
                        item = document.createElement('div');
                        item.setAttribute('class', 'item');
                        item.style.backgroundColor = "red";
                        world.appendChild(item);
                        
                        if(level[x].length == y + 1){
                            
                            item.style.clear = "both";
                        }
//                        level.components[level[x][y]];
                    }
                }
            }
            
        }
    }
    window.$game = gameEngine;
})();