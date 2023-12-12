namespace SpriteKind {
    export const guide = SpriteKind.create()
    export const prisioner = SpriteKind.create()
    export const house = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
function death_char () {
    controller.moveSprite(char_ninja, 0, 0)
    is_alive = false
    sprites.destroyAllSpritesOfKind(SpriteKind.prisioner)
    level1()
    restore_objects()
}
function level1 () {
    in_main = false
    is_alive = true
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    scene.cameraFollowSprite(char_ninja)
    scene.setBackgroundImage(assets.image`black`)
    tiles.setCurrentTilemap(tilemap`level1`)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`switchDown`, function (sprite5, location5) {
    tiles.setTileAt(location5, assets.tile`switchUp0`)
    tiles.setWallAt(tiles.getTileLocation(49, 1), false)
    tiles.setTileAt(tiles.getTileLocation(49, 1), assets.tile`transparency16`)
    game.showLongText("Eso debió haber activado algo...", DialogLayout.Top)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, char_ninja)
})
function load_level (lvl: number) {
    if (lvl == 1) {
        level1()
    } else if (lvl == 2) {
    	
    } else {
    	
    }
    create_lava()
}
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite8, location7) {
    death_char()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (char_ninja.isHittingTile(CollisionDirection.Bottom) && is_alive && !(in_main)) {
        char_ninja.vy = -150
    }
})
function level2 () {
    in_main = false
    is_alive = true
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    scene.cameraFollowSprite(char_ninja)
    scene.setBackgroundImage(assets.image`black`)
    tiles.setCurrentTilemap(tilemap`level2`)
    char_ninja.setPosition(30, 30)
    chest_is_closed = true
    char_ongame_options()
}
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
    for (let value of tiles.getTilesByType(assets.tile`house0`)) {
        tiles.placeOnTile(sprites.create(assets.image`house1`, SpriteKind.house), value)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (char_ninja.isHittingTile(CollisionDirection.Bottom) && is_alive && !(in_main)) {
        char_ninja.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava_enemy`, function (sprite2, location2) {
    death_char()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house2`, function (sprite3, location3) {
    current_level = 2
    char_ninja.setStayInScreen(false)
    load_level(current_level)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house0`, function (sprite3, location3) {
    current_level = 1
    char_ninja.setStayInScreen(true)
    load_level(current_level)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`char_guide`, function (sprite7, location6) {
    char_ninja.sayText("Selecciona la bajada correcta...", 200, false)
})
function restore_objects () {
    for (let value of tiles.getTilesByType(assets.tile`chestOpen`)) {
        tiles.setTileAt(value, assets.tile`chest_closed`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`switchUp0`)) {
        tiles.setTileAt(value2, assets.tile`switchDown`)
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
let lava_projectile: Sprite = null
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
