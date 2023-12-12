namespace SpriteKind {
    export const guide = SpriteKind.create()
    export const prisioner = SpriteKind.create()
    export const house = SpriteKind.create()
    export const citizen = SpriteKind.create()
}
function death_char () {
    controller.moveSprite(char_ninja, 0, 0)
    is_alive = false
    sprites.destroyAllSpritesOfKind(SpriteKind.prisioner)
    level1()
    restore_objects()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (char_ninja.isHittingTile(CollisionDirection.Bottom) && is_alive && !(in_main)) {
        char_ninja.vy = -150
    }
})
function level1 () {
    in_main = false
    is_alive = true
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    scene.cameraFollowSprite(char_ninja)
    scene.setBackgroundImage(assets.image`black`)
    tiles.setCurrentTilemap(tilemap`nivel1`)
    char_ninja.setPosition(30, 30)
    chest_is_closed = true
    char_ongame_options()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite6, otherSprite) {
    death_char()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    if (chest_is_closed) {
        load_menu()
    } else {
        char_ninja.sayText("GG", 200, false)
    }
    if (current_level == 1) {
        tiles.placeOnTile(char_ninja, tiles.getTileLocation(3, 3))
    } else if (current_level == 2) {
    	
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ladder`, function (sprite9, location8) {
    if (controller.up.isPressed()) {
        char_ninja.vy = -35
    } else {
        char_ninja.vy = 250
    }
})
function foodhealth () {
    listfood = [img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `]
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (char_ninja.isHittingTile(CollisionDirection.Bottom) && is_alive && !(in_main)) {
        char_ninja.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`switchDown`, function (sprite5, location5) {
    tiles.setTileAt(location5, assets.tile`switchUp0`)
    tiles.setWallAt(tiles.getTileLocation(49, 1), false)
    tiles.setTileAt(tiles.getTileLocation(49, 1), assets.tile`transparency16`)
    game.showLongText("Eso debió haber activado algo...", DialogLayout.Top)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, char_ninja)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    char_ninja.sayText("Me estoy muriendo!", 2000, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    char_ninja,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    100,
    true
    )
})
function load_level (lvl: number) {
    if (lvl == 1) {
        level1()
    } else if (lvl == 2) {
    	
    } else {
    	
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    create_lava()
}
function char_ongame_options () {
    controller.moveSprite(char_ninja, 50, 0)
    char_ninja.ay = 300
    char_ninja.setImage(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `)
}
function create_zombies () {
    for (let index = 0; index < 7; index++) {
        zombie = sprites.create(img`
            . . f f f f f f f . . . . . . . 
            . f f 3 b 3 b 3 f f . . . . . . 
            f f b b 3 b 3 2 3 f f . . . . . 
            f 3 b 3 b 2 b 3 b 3 f f . . . . 
            f b 3 2 3 3 3 b 3 2 3 f . . . . 
            f 7 7 7 7 2 7 7 7 7 7 f . . . . 
            f 7 7 7 7 7 2 7 7 e 7 f . . . . 
            f 7 7 f f 7 7 f f 7 7 f . . . . 
            f e 7 7 7 7 7 7 7 7 e f . . . . 
            . f e 7 7 b b 7 7 e f . . . . . 
            . f f e 7 2 7 7 e f f . . . . . 
            7 7 f b 1 1 7 1 b f 7 7 . . . . 
            2 d f 1 1 7 1 1 1 f d 7 . . . . 
            7 7 f 1 1 1 1 2 1 f 7 7 . . . . 
            . . . f f f f f f . . . . . . . 
            . . . f f . . f f . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(zombie, sprites.dungeon.floorDarkDiamond)
        zombie.follow(char_ninja, randint(0, 10))
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite8, location7) {
    death_char()
})
function level2 () {
    in_main = false
    is_alive = true
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    scene.cameraFollowSprite(char_ninja)
    scene.setBackgroundImage(assets.image`black`)
    tiles.setCurrentTilemap(tilemap`nivel14`)
    char_ninja.setPosition(30, 30)
    chest_is_closed = true
    char_ongame_options()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`house0`, function (sprite32, location32) {
    current_level = 1
    char_ninja.setStayInScreen(true)
    load_level(current_level)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    char_ninja.startEffect(effects.disintegrate)
    sprites.destroy(char_ninja)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    char_ninja,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    true
    )
})
function createCitizen () {
    survivor = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.citizen)
    tiles.placeOnTile(survivor, tiles.getTileLocation(7, 2))
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
})
scene.onHitWall(SpriteKind.Projectile, function (sprite10, location9) {
    sprite10.y = 130
    sprite10.vy = 0
    sprite10.ay = -30
})
function throw_l (lava_x: number, lava_y: number) {
    lava_projectile = sprites.create(assets.image`lava_project`, SpriteKind.Projectile)
    tiles.placeOnTile(lava_projectile, tiles.getTileLocation(lava_x, lava_y))
    lava_projectile.vy = -20
}
function load_menu () {
    char_ninja.ay = 0
    tiles.setCurrentTilemap(tilemap`nivel13`)
    scene.cameraFollowSprite(char_ninja)
    controller.moveSprite(char_ninja, 100, 100)
    foodhealth()
    for (let value of tiles.getTilesByType(assets.tile`house0`)) {
        tiles.placeOnTile(sprites.create(assets.image`house1`, SpriteKind.house), value)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`house2`)) {
        tiles.placeOnTile(sprites.create(assets.image`house2`, SpriteKind.house), value2)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.floorDark3)) {
        snacks = sprites.create(listfood[randint(0, 2)], SpriteKind.Food)
        tiles.placeOnTile(snacks, value)
    }
    create_zombies()
    createCitizen()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava_enemy`, function (sprite2, location2) {
    death_char()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house2`, function (sprite3, location3) {
    current_level = 2
    char_ninja.setStayInScreen(false)
    load_level(current_level)
})
function create_health () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(char_ninja)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.citizen, function (sprite, otherSprite) {
    if (!(name_player)) {
        game.showLongText("Hola, cuál es tu nombre? Necesito tu ayuda", DialogLayout.Bottom)
        name_player = game.askForString("Introduce tu nombre")
    }
    game.showLongText("Tienes que ayudarme a rescatar a mis amigos!", DialogLayout.Bottom)
    game.showLongText("Están dentro de las casas, no pueden salir solos", DialogLayout.Bottom)
    game.showLongText("Pero cuidado con los zombies, intentarán matarte", DialogLayout.Bottom)
    pause(5000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`char_guide`, function (sprite7, location6) {
    char_ninja.sayText("Selecciona la bajada correcta...", 200, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `)) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 40
    }
    if (otherSprite.image.equals(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `)) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 20
    }
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `)) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 13
    }
})
function restore_objects () {
    for (let value3 of tiles.getTilesByType(assets.tile`chestOpen`)) {
        tiles.setTileAt(value3, assets.tile`chest_closed`)
    }
    for (let value22 of tiles.getTilesByType(assets.tile`switchUp0`)) {
        tiles.setTileAt(value22, assets.tile`switchDown`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest_closed`, function (sprite4, location4) {
    tiles.setTileAt(location4, assets.tile`chestOpen`)
    prisioner1 = sprites.create(assets.image`duck_left`, SpriteKind.prisioner)
    chest_is_closed = false
    tiles.placeOnTile(prisioner1, location4)
    prisioner1.follow(char_ninja, 40)
})
function create_lava () {
    for (let lava of tiles.getTilesByType(assets.tile`lava_enemy`)) {
        throw_l(lava.column, lava.column)
    }
}
let prisioner1: Sprite = null
let name_player = ""
let snacks: Sprite = null
let lava_projectile: Sprite = null
let statusbar: StatusBarSprite = null
let survivor: Sprite = null
let zombie: Sprite = null
let listfood: Image[] = []
let current_level = 0
let chest_is_closed = false
let is_alive = false
let char_ninja: Sprite = null
let in_main = false
in_main = true
char_ninja = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
load_menu()
create_health()
