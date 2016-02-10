    $game.player.init({
        id: "player",
        run: "/images/run.gif",
        stop: "/images/stay.png",
        jump: "/images/jump.gif"
    });

    $game.controles.init($game.player, {
        speed: 4
    });
    
    $game.level.start({
        world: 'game',
        components: []
    });