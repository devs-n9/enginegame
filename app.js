var mario = new Game();
    
    mario.player.init({
        id: "player",
        run: "/images/run.gif",
        stop: "/images/stay.png",
        jump: "/iamges/jump.gif"
    });

    mario.controles.init(mario.player);