var Game = function Game() {
    var self = this;
    self.controles = {
        left: 39,
        right: 37,
        top: 38,
        player: null,
        iterator: 50,
        speed: 5,

        init: function (player, config) {
            for(var param in config){
                if (config[param] !== undefined) {
                    self.controles[param] = config[param];
                }
            }
            self.controles.player = player;
            
            document.addEventListener("keydown", self.controles.onAction);
            document.addEventListener("keyup", self.controles.onStop);
        },

        onAction: function (e) {

            if (e.keyCode == self.controles.left) {
                self.controles.iterator += self.controles.speed;
                self.player.character.style.transform = 'scale(1, 1)';
                self.player.run();
            }

            if (e.keyCode == self.controles.right) {
                self.controles.iterator -= self.controles.speed;
                self.player.character.style.transform = 'scale(-1, 1)';
                self.player.run();
            }
            self.player.character.style.left = self.controles.iterator + "px";
        },

        onStop: function (e) {
            self.player.stop();
        }
    };

    self.player = {
        character: {

        },

        sprites: {
            path: location.protocol + '//' + location.host,
            run: null,
            stop: null,
            jump: null
        },

        init: function (config) {
            console.log(self.player);
            self.player.character = document.getElementById(config.id);
            self.player.sprites.run = config.run;
            self.player.sprites.stop = config.stop;
            self.player.sprites.jump = config.jump;
        },

        run: function () {
            if (self.player.character.src != self.player.sprites.path + self.player.sprites.run) {
                self.player.character.src = self.player.sprites.run;
            }
        },

        stop: function () {
            self.player.character.src = self.player.sprites.stop;
        },

        jump: function () {
            self.player.character.src = self.player.sprites.jump;
        }
    };
}