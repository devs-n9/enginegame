    $game.player.init({
        id: "player",
        run: "/images/giphy.gif",
        stop: "/images/stay_nyan.png",
        jump: "/images/stay_nyan.png"
    });

    $game.controles.init($game.player, {
        speed: 3
    });
    
    $game.http.getRoutes({
        level: 'levels/first.json'
    })
    $game.level.start({
        world: 'game',
        components: [
            { img: '/images/sky.jpg', visible: 0 },
            { img: '/images/wall.jpg', visible: 1 }
            
        ]
    });

